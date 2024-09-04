import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dec'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5f7'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '517'),
            routes: [
              {
                path: '/docs/category/menu---instalattion',
                component: ComponentCreator('/docs/category/menu---instalattion', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/menu---options',
                component: ComponentCreator('/docs/category/menu---options', '8af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/license',
                component: ComponentCreator('/docs/license', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-installation/congratulations',
                component: ComponentCreator('/docs/menu-installation/congratulations', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-installation/create-bot',
                component: ComponentCreator('/docs/menu-installation/create-bot', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-installation/install-app',
                component: ComponentCreator('/docs/menu-installation/install-app', 'ab9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-installation/install-postgres',
                component: ComponentCreator('/docs/menu-installation/install-postgres', '6ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/auto-trade-gainers',
                component: ComponentCreator('/docs/menu-options/auto-trade-gainers', '8e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/congratulations',
                component: ComponentCreator('/docs/menu-options/congratulations', '9fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/elliot-waves-analisys',
                component: ComponentCreator('/docs/menu-options/elliot-waves-analisys', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/gainers-analisys',
                component: ComponentCreator('/docs/menu-options/gainers-analisys', 'af6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/list-menu',
                component: ComponentCreator('/docs/menu-options/list-menu', '162'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/manual-trade-gainers',
                component: ComponentCreator('/docs/menu-options/manual-trade-gainers', 'e71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/reset-trader',
                component: ComponentCreator('/docs/menu-options/reset-trader', 'd76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/run-backtest',
                component: ComponentCreator('/docs/menu-options/run-backtest', 'e18'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/start-stop-bot',
                component: ComponentCreator('/docs/menu-options/start-stop-bot', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/start-stop-signals',
                component: ComponentCreator('/docs/menu-options/start-stop-signals', '34b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/menu-options/technicall-analisys',
                component: ComponentCreator('/docs/menu-options/technicall-analisys', 'a31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/trading_signal_analysis',
                component: ComponentCreator('/docs/trading_signal_analysis', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
