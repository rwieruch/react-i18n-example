# react-i18next example

- https://github.com/i18next/react-i18next
- https://www.npmjs.com/package/react-i18next
- https://react.i18next.com/

[Read more about it.](https://www.robinwieruch.de/react-internationalization)

## Installation

- `git clone <repo>`
- `cd frontend`
- `npm install`
- `npm start`

## Walkthrough

#### Setup

- see package.json for libraries
- see src/i18n.js for library setup
- see src/index.js for library setup import
- see src/App.js for usage

#### Extracting Translations

Reference: https://react.i18next.com/guides/extracting-translations

- 1. Manual

- 2. Extraction Tool

  - https://www.npmjs.com/package/i18next-scanner
  - https://www.npmjs.com/package/i18next-parser (used)
    - see _frontend/src/i18n.js_ and _package.json_
  - https://www.npmjs.com/package/babel-plugin-i18next-extract

- 3. Runtime Extraction with Backend

  - custom Express backend (Reference: https://github.com/i18next/i18next-express-middleware)
  - see _frontend/src/i18n.js_ and _backend/_

## Alternative Libraries

### react-intl

- https://github.com/formatjs/react-intl
- https://www.npmjs.com/package/react-intl

### js-lingui

- https://github.com/lingui/js-lingui
- https://www.npmjs.com/package/@lingui/react
- https://lingui.js.org/tutorials/setup-cra.html
