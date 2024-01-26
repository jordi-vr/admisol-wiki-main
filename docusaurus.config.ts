import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Admisol Manual',
  tagline: 'Uw Gids naar Efficiënt Beheer en Optimaal Gebruik!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Admisol NV', // Usually your GitHub org/user name.
  projectName: 'Admisol Manual', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Admisol manual',
      logo: {
        alt: 'Admisol manual',
        src: 'img/logo.png',
      },
      items: [
        {
          to:"/docs/office/navigeren/startscherm",
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
              to: '/docs/office/navigeren/startscherm',
            },
            {
              label: 'Stock',
              to: '/docs/stock/',
            },
            {
              label: 'Retail',
              to: '/docs/retail/',
            },
          ],
        },
        {
          title: 'Navigatie',
          items: [
            {
              label: 'Admisol website',
              href: 'https://admisol.be/benl/',
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
              href: 'https://admisol.be/benl/office.html',
            },
            {
              label: 'Admisol accountants',
              href: 'https://admisol.be/benl/accountancy.html',
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
