/** Public facility identities, shared across corporate pages. */
export const facilities = [
  { name: "FACILITY Q5", code: "MC-Q5", anchor: "q5", id: "Q5" },
  { name: "FACILITY K320", code: "MC-K320", anchor: "k320", id: "K320" },
] as const;

/** Caption vocabulary. Assign to photography only after location is confirmed. */
export const operationalAreas = {
  QC: "Quality control",
  WH: "Materials / warehouse",
  CUT: "Cutting / material preparation",
  ASM: "Assembly",
  FIN: "Finishing",
  DSP: "Dispatch",
} as const;

export function facilityAreaCaption(
  facility: (typeof facilities)[number]["id"],
  area: keyof typeof operationalAreas,
) {
  return `${facility}-${area} / ${operationalAreas[area]}`;
}
