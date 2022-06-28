// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ESF Docs",
  tagline: "ENS Subdomain Factory Documentation",
  url: "https://docs.esf.tools",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "esf", // Usually your GitHub org/user name.
  projectName: "docs.esf.tools", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/username/repo-name/tree/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          blogTitle: "Blog",
          path: "blog",
          blogDescription: "ESF Blog",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/username/repo-name/tree/main/",
          postsPerPage: 15,
          blogSidebarCount: 10,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        /** Google Analytics **/
        // googleAnalytics: {
        //   trackingID: 'UA-123456789-1',
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ESF Docs",
        logo: {
          alt: "ESF Logo",
          src: "img/logo_navbar.png",
        },
        items: [
          {
            to: "/guides",
            position: "left",
            label: "Guides",
          },
          {
            to: "/developers",
            position: "left",
            label: "Developers",
          },
          {
            to: "/about",
            position: "left",
            label: "About",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://esf.tools/",
            label: "ESF App",
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
                label: "Guides",
                to: "/guides",
              },
              {
                label: "Developers",
                to: "/developers",
              },
              {
                label: "FAQs",
                to: "/guides/faqs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/zVA8GeGRAp",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/esf_eth",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "About",
                to: "/about",
              },
              {
                label: "Team",
                to: "/about/team",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ESF Docs. Built with Docusaurus.`,
      },
      image: "img/logo.png",
      metadata: [{ name: "twitter:card", content: "summary" }],
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 3,
        indexBlog: true,
        indexPages: true,
        language: ["en"],
        style: undefined,
        lunr: {
          tokenizerSeparator: /[\s\-]+/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          b: 0.75,
          k1: 1.2,
          titleBoost: 5,
          contentBoost: 1,
          parentCategoriesBoost: 2,
        },
      },
    ],
  ],
};

module.exports = config;
