# Accessibility Audit Report

## Audited Website

**Website:** National Portal of India – Services  
**URL:** https://www.india.gov.in/services

## Audit Method

The website was evaluated using:
- Lighthouse Accessibility audit
- Manual keyboard navigation check
- HTML/DOM inspection using browser DevTools

## Lighthouse Accessibility Score

**Score: 85/100**

## Findings

### WEB-001 — ARIA Required Parent Relationship

**Page/Component:** `/services` — Service category list

**WCAG Reference:** WCAG 1.3.1 – Info and Relationships

**Evidence:** Lighthouse identified ARIA roles that are not contained by their required parent element.

**Severity:** Medium

**User Impact:** Incorrect ARIA structure may cause screen readers to interpret the list structure incorrectly.

**Recommended Fix:** Use valid native list structure and ensure ARIA roles have their required parent elements.

---

### WEB-002 — Incorrect List Structure

**Page/Component:** `/services` — Service category and footer lists

**WCAG Reference:** WCAG 1.3.1 – Info and Relationships

**Evidence:** Lighthouse identified list items (`<li>`) that are not contained within `<ul>`, `<ol>` or `<menu>` parent elements.

**Severity:** Medium

**User Impact:** Incorrect list structure may make list relationships unclear to screen-reader users.

**Recommended Fix:** Ensure every `<li>` is placed inside a valid `<ul>`, `<ol>` or `<menu>` parent element.

---

### WEB-003 — Redundant Image Alternative Text

**Page/Component:** `/services` — Flagship card images

**WCAG Reference:** WCAG 1.1.1 – Non-text Content

**Evidence:** Lighthouse identified image elements where the alt text may be redundant with nearby text; the reported element includes `img#flagshipcardImg`.

**Severity:** Low

**User Impact:** Redundant alternative text can cause screen-reader users to hear the same information more than once.

**Recommended Fix:** Review each affected image. Use concise meaningful alt text for informative images; use `alt=""` when the image is decorative or its information is already provided by nearby text.

---

### WEB-004 — Production Console Logging Suppressed

**Page/Component:** `/services` — Production logging / observability

**WCAG Reference:** N/A – Architecture / Maintainability

**Evidence:** The page source contains a script with `id="disable-console"` that replaces `console.log`, `console.info`, `console.debug` and `console.warn` with empty functions.

**Severity:** Low

**User Impact:** Suppressing console output can make runtime warnings and debugging information unavailable to developers, making maintenance and troubleshooting harder.

**Recommended Fix:** Avoid globally disabling console methods. Use controlled production logging and error monitoring instead.

---

### WEB-005 — Insufficient Color Contrast

**Page/Component:** `/services` — Footer and text content

**WCAG Reference:** WCAG 1.4.3 – Contrast (Minimum)

**Evidence:** Lighthouse Accessibility audit identified multiple elements with insufficient foreground/background color contrast, including the App Privacy Policy footer link and text elements using `text-gray-300`.

**Severity:** Medium

**User Impact:** Low-contrast text can be difficult to read, particularly for users with low vision or reduced contrast sensitivity.

**Recommended Fix:** Adjust the foreground and background color combinations to meet the required contrast ratio. Use at least 4.5:1 for normal text and 3:1 for large text.

---

## Keyboard Navigation

A manual keyboard-only navigation check was performed. No blocking keyboard navigation issue was identified during the check.

## Summary

Five accessibility or architecture findings were documented from the audit. The findings include ARIA structure, list semantics, image alternative text, production logging, and color contrast.