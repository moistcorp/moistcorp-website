import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_BODY_BYTES = 20_000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

const allowedQuantities = new Set([
  "50 - 200 pcs",
  "200 - 500 pcs",
  "500 - 1000 pcs",
  "1000+ pcs",
]);

const allowedCategories = new Set([
  "T-Shirts",
  "Hoodies",
  "Sweatshirts",
  "Shorts",
  "Joggers",
  "Multiple Products",
]);

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  website?: unknown;
  quantity?: unknown;
  category?: unknown;
  message?: unknown;
  companyWebsiteConfirmation?: unknown;
};

type ContactDetails = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  quantity: string;
  category: string;
  message: string;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function jsonError(error: string, status: number) {
  return NextResponse.json({ success: false, error }, { status });
}

function textValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function cleanEmailText(value: string) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

function cleanSingleLineText(value: string) {
  return cleanEmailText(value).replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isValidWebsite(value: string) {
  if (!value) return true;
  if (/\s/.test(value) || value.length > 200) return false;

  try {
    const parsed = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return Boolean(parsed.hostname) && !parsed.username && !parsed.password;
  } catch {
    return false;
  }
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();

  if (rateLimitStore.size > 5000) {
    for (const [key, entry] of rateLimitStore) {
      if (entry.resetAt <= now) rateLimitStore.delete(key);
    }
  }

  const existing = rateLimitStore.get(ip);
  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { limited: false, retryAfter: 0 };
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return {
      limited: true,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { limited: false, retryAfter: 0 };
}

function validatePayload(payload: ContactPayload): ContactDetails | null {
  const firstName = cleanSingleLineText(textValue(payload.firstName));
  const lastName = cleanSingleLineText(textValue(payload.lastName));
  const company = cleanSingleLineText(textValue(payload.company));
  const email = textValue(payload.email).toLowerCase();
  const phone = cleanSingleLineText(textValue(payload.phone));
  const website = cleanSingleLineText(textValue(payload.website));
  const quantity = textValue(payload.quantity);
  const category = textValue(payload.category);
  const message = cleanEmailText(textValue(payload.message));

  if (
    !firstName ||
    !lastName ||
    !company ||
    firstName.length > 100 ||
    lastName.length > 100 ||
    company.length > 150 ||
    !email ||
    email.length > 254 ||
    !isValidEmail(email) ||
    phone.length > 40 ||
    !isValidWebsite(website) ||
    !allowedQuantities.has(quantity) ||
    !allowedCategories.has(category) ||
    message.length > 5000
  ) {
    return null;
  }

  return {
    firstName,
    lastName,
    company,
    email,
    phone,
    website,
    quantity,
    category,
    message,
  };
}

function formatEmail(details: ContactDetails) {
  return [
    "New Moistcorp Inquiry",
    "",
    `Name: ${details.firstName} ${details.lastName}`,
    `Company: ${details.company}`,
    `Business Email: ${details.email}`,
    `Telephone: ${details.phone || "Not provided"}`,
    `Website: ${details.website || "Not provided"}`,
    `Quantity: ${details.quantity}`,
    `Product Category: ${details.category}`,
    "",
    "Project Details:",
    details.message || "Not provided",
  ].join("\n");
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return jsonError("Unable to submit inquiry.", 413);
  }

  const rateLimit = isRateLimited(getClientIp(request));
  if (rateLimit.limited) {
    return NextResponse.json(
      { success: false, error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfter) } },
    );
  }

  let payload: ContactPayload;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return jsonError("Unable to submit inquiry.", 413);
    }

    const parsed: unknown = JSON.parse(rawBody);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return jsonError("Unable to submit inquiry.", 400);
    }
    payload = parsed as ContactPayload;
  } catch {
    return jsonError("Unable to submit inquiry.", 400);
  }

  // Honeypot submissions look successful to bots but are never emailed.
  if (textValue(payload.companyWebsiteConfirmation)) {
    return NextResponse.json({ success: true });
  }

  const details = validatePayload(payload);
  if (!details) {
    return jsonError("Please check the form fields and try again.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL_TO;
  const sender = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !recipient || !sender) {
    return jsonError("Unable to submit inquiry.", 503);
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: sender,
      to: [recipient],
      subject: `New Moistcorp Inquiry — ${details.company || details.firstName}`,
      text: formatEmail(details),
    });

    if (result.error) {
      return jsonError("Unable to submit inquiry.", 502);
    }

    return NextResponse.json({ success: true });
  } catch {
    return jsonError("Unable to submit inquiry.", 502);
  }
}
