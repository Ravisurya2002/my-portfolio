
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
    'index.csr.html': {size: 570, hash: '545b721ee0e2957f18e67156428e3d73a488980031864c4e6f94e7a675b69e22', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: 'f33c8341ede5ca99be8a46af45fe3a45bc2663fe77ff40f8e61acc9cfa8fdd37', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6079, hash: 'ea40ddef309695bb731e207078295c82f391055585d8ca3bfd49fc4ef78c09ba', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 5678, hash: '0054c199cb39ce7f835d46feea4b4a0103f3713fb7c33c19defb932fb2b0b2c5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6918, hash: '0d4fcf905a3481c05269f03578cabd8b0fbe62ad110150c0ac5dedaed5e8d32f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 7391, hash: 'a5e5e3fff4eb9039db51c338514ab46242bb6e3aa3d1fe99157a969e8a6dc447', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 6595, hash: '13df99678929f76481a5a6e19774267243ebbe5f1bf66483a12f7ec1ffeabc08', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
