# react-i18next example

- https://github.com/i18next/react-i18next
- https://www.npmjs.com/package/react-i18next
- https://react.i18next.com/

## Installation

- `git clone <repo>`
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

  - https://www.npmjs.com/package/i18next-scanner (Bug)
  - https://www.npmjs.com/package/i18next-parser
    - extracts from whole application vi CLI
    - <Trans> bug https://github.com/i18next/i18next-parser/issues/205
    - negative: only stored to files, no API yet
  - https://www.npmjs.com/package/babel-plugin-i18next-extract (Didn't try)

- 3. Runtime Extraction with Backend

  - custom Express backend (Reference: https://github.com/i18next/i18next-express-middleware)
  - negative: manual browsing, not across languages

## Alternative Libraries

### react-intl

- https://github.com/formatjs/react-intl
- https://www.npmjs.com/package/react-intl

### js-lingui

- https://github.com/lingui/js-lingui
- https://www.npmjs.com/package/@lingui/react
- https://lingui.js.org/tutorials/setup-cra.html

### react-i18next

- https://github.com/i18next/react-i18next
- https://www.npmjs.com/package/react-i18next
- https://react.i18next.com/
