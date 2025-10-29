---
sidebar_position: 2
---

# Translate your site

Let's translate `docs/intro.md` to French.

## Configure i18n

Modify `docusaurus.config.js` to add support for the `pt-BR` locale:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-BR"],
  },
};
```

## Translate a doc

Copy the `docs/intro.md` file to the `i18n/pt-BR` folder:

```bash
mkdir -p i18n/pt-BR/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/pt-BR/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/pt-BR/docusaurus-plugin-content-docs/current/intro.md` in Portuguese.

## Start your localized site

Start your site on the Portuguese locale:

```bash
npm run start -- --locale pt-BR
```

Your localized site is accessible at [http://localhost:3000/pt-BR/](http://localhost:3000/pt-BR/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "localeDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale pt-BR
```

Or build your site to include all the locales at once:

```bash
npm run build
```
