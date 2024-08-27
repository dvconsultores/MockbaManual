import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/MockbaManual/blog',
    component: ComponentCreator('/MockbaManual/blog', 'd69'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/archive',
    component: ComponentCreator('/MockbaManual/blog/archive', 'e23'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/authors',
    component: ComponentCreator('/MockbaManual/blog/authors', 'd65'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/MockbaManual/blog/authors/all-sebastien-lorber-articles', '619'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/authors/yangshun',
    component: ComponentCreator('/MockbaManual/blog/authors/yangshun', 'e58'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/first-blog-post',
    component: ComponentCreator('/MockbaManual/blog/first-blog-post', '260'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/long-blog-post',
    component: ComponentCreator('/MockbaManual/blog/long-blog-post', '2ec'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/mdx-blog-post',
    component: ComponentCreator('/MockbaManual/blog/mdx-blog-post', '954'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/tags',
    component: ComponentCreator('/MockbaManual/blog/tags', '4da'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/tags/docusaurus',
    component: ComponentCreator('/MockbaManual/blog/tags/docusaurus', 'f04'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/tags/facebook',
    component: ComponentCreator('/MockbaManual/blog/tags/facebook', '817'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/tags/hello',
    component: ComponentCreator('/MockbaManual/blog/tags/hello', '73b'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/tags/hola',
    component: ComponentCreator('/MockbaManual/blog/tags/hola', '63d'),
    exact: true
  },
  {
    path: '/MockbaManual/blog/welcome',
    component: ComponentCreator('/MockbaManual/blog/welcome', '683'),
    exact: true
  },
  {
    path: '/MockbaManual/markdown-page',
    component: ComponentCreator('/MockbaManual/markdown-page', '602'),
    exact: true
  },
  {
    path: '/MockbaManual/docs',
    component: ComponentCreator('/MockbaManual/docs', '1fc'),
    routes: [
      {
        path: '/MockbaManual/docs',
        component: ComponentCreator('/MockbaManual/docs', '5c8'),
        routes: [
          {
            path: '/MockbaManual/docs',
            component: ComponentCreator('/MockbaManual/docs', 'db7'),
            routes: [
              {
                path: '/MockbaManual/docs/category/tutorial---basics',
                component: ComponentCreator('/MockbaManual/docs/category/tutorial---basics', 'ef7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/category/tutorial---extras',
                component: ComponentCreator('/MockbaManual/docs/category/tutorial---extras', '42f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/intro',
                component: ComponentCreator('/MockbaManual/docs/intro', 'cd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/license',
                component: ComponentCreator('/MockbaManual/docs/license', 'b4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/MockbaManual/docs/tutorial-basics/congratulations', 'f76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/MockbaManual/docs/tutorial-basics/create-a-blog-post', 'c78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/MockbaManual/docs/tutorial-basics/create-a-document', 'a69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/MockbaManual/docs/tutorial-basics/create-a-page', 'be6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/MockbaManual/docs/tutorial-basics/deploy-your-site', 'c0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/MockbaManual/docs/tutorial-basics/markdown-features', '5a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/MockbaManual/docs/tutorial-extras/manage-docs-versions', '2c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/MockbaManual/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/MockbaManual/docs/tutorial-extras/translate-your-site', 'b37'),
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
    path: '/MockbaManual/',
    component: ComponentCreator('/MockbaManual/', '8b7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
