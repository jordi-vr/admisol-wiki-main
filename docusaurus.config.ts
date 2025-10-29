import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Admisol Manual',
  tagline: 'Uw Gids naar Efficiënt Beheer en Optimaal Gebruik!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://admisol.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/admisol-wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Admisol', // Usually your GitHub org/user name.
  projectName: 'admisol-wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl-BE',
    locales: ['nl-BE'],
  },

  markdown: {
    mermaid: true,
  },

  plugins: [
    
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Disable blog functionality
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "nl"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      hideOnScroll: true,
      title: 'Admisol manual',
      logo: {
        alt: 'Admisol manual',
        src: 'img/logo.png',
      },
      items: [
        {
          
          to:"/docs/Office/navigeren/startscherm",
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Office',
        },
        
        {
          href: 'https://login.admisol.be/?lng=nl',
          label: 'Admisol',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Office',
              to: '/docs/Office/navigeren/startscherm',
            },
          ],
        },
        {
          title: 'Navigatie',
          items: [
            {
              label: 'Admisol website',
              href: 'https://admisol.be/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/admisolnv',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Admisol ondernemers',
              href: 'https://admisol.be/office',
            },
            {
              label: 'Admisol accountants',
              href: 'https://admisol.be/accountancy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Admisol NV`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
