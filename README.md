# Accessibility Audit Project

## Project Overview

This project documents an accessibility and architecture audit of the National Portal of India – Services page.

Audited Website:
https://www.india.gov.in/services

## Project Structure

```text
accessibility-audit/
├── client/
├── server/
├── docs/
│   ├── audit-report.md
│   └── screenshots/
└── test/

## Architecture Boundaries

### Client
Contains the frontend application and user-facing interface.

### Server
Contains backend/server-side functionality and future API or business logic.

### Docs
Contains audit documentation, reports, screenshots, and project documentation.

### Test
Contains automated and manual test-related files.

## Local Setup

1. Clone the repository.
2. Open the project folder in VS Code.
3. Review the project structure.
4. Open `docs/audit-report.md` to review the accessibility audit.
5. Add frontend, backend, and test implementation files as the project develops.

## First Vertical Feature Slice

The first feature slice will connect the client, server, documentation, and test layers around an accessibility-focused feature.

The initial implementation will:
- provide a client-side interface,
- connect to a server-side endpoint when required,
- document the feature and accessibility considerations,
- include related test coverage.

## Accessibility Audit

The audit report is available at:

`docs/audit-report.md`

The report contains five documented accessibility or architecture findings, evidence, severity, user impact, and recommended fixes.