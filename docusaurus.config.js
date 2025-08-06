// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Moodle Docs",
  tagline: "Moodle is cool",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://adrianoruseler.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/moodle-docs/",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "adrianoruseler", // Usually your GitHub org/user name.
  projectName: "moodle-docs", // Usually your repo name.
  deploymentBranch: "gh-pages", // The branch that GitHub pages will deploy from.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/adrianoruseler/moodle-docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/adrianoruseler/moodle-docs/edit/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "adm", // Unique ID for this docs instance
        path: "adm-docs", // Path to your API docs folder
        routeBasePath: "adm", // Base URL for these docs (e.g., yoursite.com/api/...)
        sidebarPath: require.resolve("./sidebarsAdm.js"), // Separate sidebar for API docs
        // ... other options specific to your API docs
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "dev", // Unique ID for this docs instance
        path: "dev-docs", // Path to your Developer docs folder
        routeBasePath: "dev", // Base URL for these docs (e.g., yoursite.com/dev/...)
        sidebarPath: require.resolve("./sidebarsDev.js"), // Separate sidebar for Developer docs
        // ... other options specific to your Dev docs
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "edu", // Unique ID for this docs instance
        path: "edu-docs", // Path to your Developer docs folder
        routeBasePath: "edu", // Base URL for these docs (e.g., yoursite.com/dev/...)
        sidebarPath: require.resolve("./sidebarsEdu.js"), // Separate sidebar for Developer docs
        // ... other options specific to your Dev docs
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Moodle Docs",
        logo: {
          alt: "Moodle Docs Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            to: "/adm/intro", // Link to a page in your Dev docs
            label: "Administrator",
            position: "left",
            activeBaseRegex: `/adm/`, // Highlight when any Dev doc is active
          },
          {
            to: "/dev/intro", // Link to a page in your Dev docs
            label: "Developer",
            position: "left",
            activeBaseRegex: `/dev/`, // Highlight when any Dev doc is active
          },
          {
            to: "/edu/intro", // Link to a page in your Dev docs
            label: "Educator",
            position: "left",
            activeBaseRegex: `/edu/`, // Highlight when any Dev doc is active
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/AdrianoRuseler/moodle-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                href: "https://docusaurus.io/docs",
              },
              {
                label: "devdocs",
                href: "https://github.com/moodle/devdocs",
              },
            ],
          },
          {
            title: "Development",
            items: [
              {
                label: "Roadmap",
                href: "https://moodledev.io/general/community/roadmap",
              },
              {
                label: "MDK",
                href: "https://moodledev.io/general/development/tools/mdk",
              },
            ],
          },
          {
            title: "QA",
            items: [
              {
                label: "QA testing",
                href: "https://moodledev.io/general/development/process/testing/qa",
              },
            ],
          },

          {
            title: "Docker",
            items: [
              {
                label: "Environment",
                href: "https://github.com/moodlehq/moodle-docker",
              },
              {
                label: "Bitnami",
                href: "https://github.com/bitnami/containers/tree/main/bitnami/moodle",
              },
              {
                label: "mdlbkp-bitnami",
                href: "https://github.com/AdrianoRuseler/mdlbkp-bitnami",
              },
            ],
          },

          {
            title: "Self-hosting",
            items: [
              {
                label: "Moodle 5.1dev",
                href: "https://integration.adrianoruseler.com",
              },
              {
                label: "Moodle 5.0+",
                href: "https://mdl50.adrianoruseler.com/",
              },
              {
                label: "Moodle 4.4+",
                href: "https://mdl44.adrianoruseler.com/",
              },
              {
                label: "Moodle 4.3+",
                href: "https://mdl43.adrianoruseler.com/",
              },
            ],
          },

          {
            title: "Academy",
            items: [
              {
                label: "Educator",
                href: "https://moodle.academy/course/index.php?categoryid=2",
              },
              {
                label: "Administrator",
                href: "https://moodle.academy/course/index.php?categoryid=3",
              },
              {
                label: "Developer",
                href: "https://moodle.academy/course/index.php?categoryid=4",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@moodle",
              },
              {
                label: "MoodleNet",
                href: "https://moodle.net",
              },
            ],
          },
          {
            title: "Moodle LMS",
            items: [
              {
                label: "Releases",
                href: "https://moodledev.io/general/releases",
              },
              {
                label: "Development",
                href: "https://moodledev.io/",
              },
              {
                label: "Documentation",
                href: "https://docs.moodle.org/",
              },
              {
                label: "Tracker",
                href: "https://moodle.atlassian.net/",
              },
              {
                label: "Plugins",
                href: "https://moodle.org/plugins/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "moodle.org",
                href: "https://moodle.org",
              },
              {
                label: "moodle.com",
                href: "https://moodle.com",
              },
              {
                label: "Academy",
                href: "https://moodle.academy/",
              },
              {
                label: "GitHub",
                href: "https://github.com/AdrianoRuseler/moodle-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
