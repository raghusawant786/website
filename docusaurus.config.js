// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Raghunath Sawant',
  tagline: 'Quality Analyst | Agile tester | ISQTB Certified | UI and API Automation |',
  url: 'https://raghunahtsawant.github.io', // Your website URL
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/RS_logo.jpg',
  organizationName: 'raghusawant786', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],	
  plugins: ['@docusaurus/plugin-ideal-image'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/RS_logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'About Me',
          },
          {
            position: 'left',
            to: '/Certifications',
            label: 'Certifications'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/games', label: 'Games', position: 'left'},
          {
            href: 'https://drive.google.com/file/d/13T_LPK0HvH0noA0GtM7o4q2CZ48H2G6F/view?usp=sharing',
            label: 'Resume',
            position: 'right',
          },
          {
            href: 'https://github.com/raghusawant786',
            label: 'GitHub',
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
                label: 'About Me',
                to: '/docs/intro',
              },
              {
                label: 'Resume',
                href: 'https://drive.google.com/file/d/13T_LPK0HvH0noA0GtM7o4q2CZ48H2G6F/view',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/15999685/raghunath-sawant',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/raghunath-sawant-19071994/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/raghunath.sawant/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/raghusawant786',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Raghunath Sawant`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    /*  announcementBar: {
        id: 'support_us',
        content:
          '⭐️ If you like my website , give it a star on <a href="https://github.com/raghusawant786/website"> Github</a> ⭐️',
        backgroundColor: '#D6DBDF',
        textColor: '#091E42',
        isCloseable: false,
    },*/
    }),
};

module.exports = config;
