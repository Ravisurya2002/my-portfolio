
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 570, hash: 'e9129967e329f3003a3c4dbeb97b5ae32cb81a87fead309eb01ffda9ede5d393', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: 'e1acee3e1ba47827e8620cb9f1c5bdc000c7a84e0f176bc7d516595e297d9bac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6918, hash: '62aedceb1b0ca53d4c8139f14eeb587bd27956678541e554dd38c44a9437f672', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 5686, hash: '2bafc2312c941bbeb991c0487e44b4a43de5a2adde3ac2cde9ceac489aee1c36', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6081, hash: 'e4c81360dc8d902b9491e484a54902c6b40e243ec3e06bc109aa8ad713bf73b0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 7391, hash: '53f2c51c2d02a934d6ed9f968ff0053a1ea44c921c4b3711564f4c6c94c36c6f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 6595, hash: 'd9ed8be5c14178231163e46d5dbfbd1bf4f131cffc99b6f73d827adfe9d10502', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
