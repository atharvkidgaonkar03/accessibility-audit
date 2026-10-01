# Accessible E-Commerce Store

## Project Overview

This project started as an accessibility and architecture audit of the National Portal of India – Services page and was progressively developed into an accessible E-Commerce web application.

The application demonstrates semantic HTML5, responsive CSS architecture, JavaScript DOM manipulation, REST API integration, authentication simulation, CRUD operations, and persistent client-side state.

## Live Application

https://atharvkidgaonkar03.github.io/accessibility-audit/

## Repository

https://github.com/atharvkidgaonkar03/accessibility-audit

## Audited Website

National Portal of India – Services:

https://www.india.gov.in/services

## Key Features

- Accessible semantic HTML5 structure
- Responsive mobile-first design
- CSS design tokens and responsive breakpoints
- Product data loaded from a public REST API
- Real-time product search
- Category filtering and category tabs
- Product sorting
- Authentication simulation using localStorage
- Shopping cart functionality
- Add products to cart
- Update product quantities
- Remove products from cart
- Persistent cart state using localStorage
- Loading skeleton states
- User-friendly API error handling
- Accessible form controls and status messages

## Technology Stack

- HTML5
- CSS3
- JavaScript ES6+
- REST API
- Fetch API
- localStorage
- Git and GitHub
- GitHub Pages

## Project Structure

```text
accessibility-audit/
│
├── index.html
│
├── client/
│   ├── index.html
│   ├── reports.html
│   ├── settings.html
│   ├── style.css
│   ├── app.js
│   └── api.js
│
├── server/
│   └── README.md
│
├── docs/
│   ├── audit-report.md
│   └── screenshots/
│
├── test/
│   └── README.md
│
└── README.md
````

## Architecture

```text
User / Browser
      |
      v
client/index.html
      |
      +---- app.js ---- api.js ---- Fake Store API
      |
      +---- style.css
      |
      +---- localStorage
             |
             +---- Authentication
             +---- Cart
             +---- User Preferences
             ```

## Key Functionality

### Authentication

Client-side authentication simulation using localStorage.

### Product Catalog

Products are fetched from the Fake Store API using async/await and the Fetch API.

### Search, Filter and Sort

Users can search products, filter products by category, use category tabs, and sort products without reloading the page.

### Shopping Cart

The shopping cart supports:

- Add products
- View cart products
- Update product quantities
- Remove products
- Persistent cart state using localStorage

## Accessibility

The project uses semantic HTML5 structure, accessible form labels, keyboard-friendly controls, status messages, ARIA attributes where appropriate, and W3C validation practices.

## Responsive Design

The application follows a mobile-first responsive design approach using CSS Grid, Flexbox, CSS custom properties, responsive breakpoints, shadows, transitions, and reusable design tokens.

## Local Setup

1. Clone the repository.
2. Open the project in VS Code.
3. Run the project using Live Server.
4. Open `client/index.html`.
5. Internet access is required for the REST API.

## Deployment

The application is deployed using GitHub Pages.

Live URL:

https://atharvkidgaonkar03.github.io/accessibility-audit/

## Project Development Journey

1. Accessibility audit
2. Semantic HTML architecture
3. Responsive CSS architecture
4. REST API and JavaScript functionality
5. Authentication simulation
6. Shopping cart CRUD
7. Live deployment

## Project Status

**Production capstone deployed successfully.**