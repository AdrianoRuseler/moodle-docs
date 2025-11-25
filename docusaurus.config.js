// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23", // Use 24-hour format
});
const utc3Time = formatter.format(new Date());
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} Moodle Docs, Inc. Built with Docusaurus at ${utc3Time} UTC-3.`;

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

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn", // or 'throw'
    },
  },

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
          // 👇 Add this line for the last update time
          showLastUpdateTime: true,
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
        path: "adm-docs", // Path to your adm docs folder
        routeBasePath: "adm", // Base URL for these docs (e.g., yoursite.com/adm/...)
        sidebarPath: require.resolve("./sidebarsAdm.js"), // Separate sidebar for ADM docs
        // 👇 Add this line for the last update time
        showLastUpdateTime: true,
        // ... other options specific to your ADM docs
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
        // 👇 Add this line for the last update time
        showLastUpdateTime: true,
        // ... other options specific to your Dev docs
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "edu", // Unique ID for this docs instance
        path: "edu-docs", // Path to your Edu docs folder
        routeBasePath: "edu", // Base URL for these docs (e.g., yoursite.com/dev/...)
        sidebarPath: require.resolve("./sidebarsEdu.js"), // Separate sidebar for Edu docs
        // 👇 Add this line for the last update time
        showLastUpdateTime: true,
        // ... other options specific to your Edu docs
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: "qa", // Unique ID for this docs instance
        path: "qa-docs", // Path to your QA docs folder
        routeBasePath: "qa", // Base URL for these docs (e.g., yoursite.com/dev/...)
        sidebarPath: require.resolve("./sidebarsQA.js"), // Separate sidebar for QA docs
        // 👇 Add this line for the last update time
        showLastUpdateTime: true,
        // ... other options specific to your QA docs
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
          {
            to: "/qa/intro", // Link to a page in your QA docs
            label: "QA",
            position: "left",
            activeBaseRegex: `/qa/`, // Highlight when any QA doc is active
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://moodledev.io/",
            label: "Development",
            position: "right",
          },
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
              {
                label: "QA testing",
                href: "https://moodledev.io/general/development/process/testing/qa",
              },
              {
                label: "DiceBear",
                href: "https://www.dicebear.com/",
              },
            ],
          },
          {
            title: "Plugins",
            items: [
              {
                label: "moodle501",
                href: "https://github.com/AdrianoRuseler/moodle501-plugins",
              },
              {
                label: "moodle500",
                href: "https://github.com/AdrianoRuseler/moodle500-plugins",
              },
              {
                label: "moodle405",
                href: "https://github.com/AdrianoRuseler/moodle405-plugins",
              },
              {
                label: "mdldev",
                href: "https://github.com/AdrianoRuseler/mdldev-plugins",
              },
            ],
          },

          {
            title: "Docker",
            items: [
              {
                label: "moodle-docker",
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
              {
                label: "moodle-dev",
                href: "https://github.com/kabalin/moodle-dev-compose",
              },
            ],
          },

          {
            title: "Self-hosting",
            items: [
              {
                label: "Moodle 5.2dev",
                href: "https://integration.adrianoruseler.com",
              },
              {
                label: "Moodle 5.1+",
                href: "https://mdl51.adrianoruseler.com/",
              },
              {
                label: "Moodle 5.0+",
                href: "https://mdl50.adrianoruseler.com/",
              },
              {
                label: "Moodle 4.5+",
                href: "https://mdl45.adrianoruseler.com/",
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
              {
                label: "SVG Repo",
                href: "https://www.svgrepo.com/",
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} Moodle Docs, Inc. Built with Docusaurus.`,
        copyright: COPYRIGHT_STRING,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          "autohotkey",
          "arduino",
          "apacheconf",
          "nginx",
          "bash",
          "matlab",
          "powershell",
          "ini",
        ],
      },
    }),
};

export default config;
