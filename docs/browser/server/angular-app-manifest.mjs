
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
    'index.csr.html': {size: 570, hash: 'ea3fbed9603e2236ad81b437d93ae4d00f138631739d6313b8c7ff943727149e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: 'd79d3c6908f567a5b88ba89dc41da22b900261e1938fb6a01a8371f07bcd9b8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6081, hash: '6239e3f83e5629094c9ddd9f4b5d4c6e430058b04bb7fc754660d5c44c5dc5e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 6595, hash: 'c8f48ebe7a7c7b1af3169aab66fb30263290745d071b5400057242c96790fb08', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 7391, hash: '33f0fbd9600b55412ebd0e8460ebd727ede3cb28f6a782ed28f8cdbc78c2adc7', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 5678, hash: '717c4662fdff5eceea76bc395a361f8f3b9e10d4f4cd8573b8eafd6c9e6d320a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 6918, hash: '42d802fcd6d5fb46e8b38048e7e9fcd61cc8053acbc67ffda39be66c60a0550a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
