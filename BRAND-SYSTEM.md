# Moist Corp identity

Use Inter 400–600 for primary text and IBM Plex Mono 400–500 for short metadata. Fonts are locally hosted Latin WOFF2 assets with licenses in `src/app/fonts`. Color tokens live in `src/app/globals.css`: carbon #080A0D, graphite #171A1F, industrial white #F1F2EE, utility grey #A5A9AF, cobalt #1547FF. Utility grey is for dark surfaces; use the darker muted token on light surfaces. Amber is reserved for actual exceptions.

Facility identities and readable operational captions live in `src/lib/facilities.ts`. Q5 and K320 are canonical names. Use `facilityAreaCaption("Q5", "QC")` only when the underlying material is confirmed to depict that facility and function. Current photographs and operating metrics remain network-wide: the existing assets do not establish separate location attribution, capacity or equipment. Do not infer it from filenames.

Article identifiers are static: MC-INT-001 (inventory risk) and MC-INT-002 (AI and manufacturing). Keep these identifiers stable if editorial order changes.

Future merchandise may use `/supply`, navigation label Supply, and stable product identifiers MC-EQ-001 onward. No placeholder route, store, checkout or inaccessible navigation is published until that business is ready.

The project intake retains its existing API contract, validation and delivery provider. Target timelines remain part of the project details field. Browser verification must not send unsolicited test inquiries to the live recipient; exercise success/error UI with intercepted responses and test API validation separately.
