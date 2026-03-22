// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Raghunath Sawant',
  tagline: 'Lead QA Engineer | 9+ Years BFSI | BDD/Serenity | Full-Stack Testing | AI-Powered Quality',
  url: 'https://raghunahtsawant.github.io', // Your website URL
  baseUrl: '/website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/RS_logo.jpg',
  organizationName: 'raghusawant786', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],	
  plugins: [
    '@docusaurus/plugin-ideal-image',
  ],

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
      metadataHead: [
        ['meta', { name: 'description', content: 'Raghunath Sawant - Lead QA Engineer | 9+ Years BFSI Domain | Serenity BDD | Full-Stack Test Automation | Team Leadership | SS&C Technologies' }],
        ['meta', { property: 'og:title', content: 'Raghunath Sawant - Automation Engineer Portfolio' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:image', content: '/img/profile_img.jpeg' }],
        ['meta', { property: 'og:url', content: 'https://raghunahtsawant.github.io/website/' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: 'Raghunath Sawant - QA Engineer' }],
        ['meta', { name: 'twitter:description', content: 'Portfolio showcasing 5+ years of QA automation experience' }],
        // Google Analytics 4 - Replace G-XXXXXXX with your Measurement ID
        ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX' }],
        ['script', {}, "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-XXXXXXX', { 'anonymize_ip': true });"],
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
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
         // {to: '/games', label: 'Games', position: 'left'},
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
