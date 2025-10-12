
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/BlogForge',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/BlogForge/login",
    "route": "/BlogForge"
  },
  {
    "renderMode": 2,
    "route": "/BlogForge/login"
  },
  {
    "renderMode": 2,
    "route": "/BlogForge/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/BlogForge/posts"
  },
  {
    "renderMode": 2,
    "route": "/BlogForge/categories"
  },
  {
    "renderMode": 2,
    "route": "/BlogForge/authors"
  },
  {
    "renderMode": 2,
    "route": "/BlogForge/account"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5044, hash: 'a49a03bc5069bc15b1903158f9315ab55901a37814cbf2dd3cb4832971f31204', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: '4387cecacab30b19007950ab39f10e99c6bfdc3ecdb79d12baf7ae119dac9aa3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 16773, hash: '374c2d8146012345a1d78cb6317813c37401fc127bbef1fbb94f0f364271ddc1', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 16773, hash: '374c2d8146012345a1d78cb6317813c37401fc127bbef1fbb94f0f364271ddc1', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'account/index.html': {size: 16773, hash: '374c2d8146012345a1d78cb6317813c37401fc127bbef1fbb94f0f364271ddc1', text: () => import('./assets-chunks/account_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 16773, hash: '374c2d8146012345a1d78cb6317813c37401fc127bbef1fbb94f0f364271ddc1', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'authors/index.html': {size: 16773, hash: '374c2d8146012345a1d78cb6317813c37401fc127bbef1fbb94f0f364271ddc1', text: () => import('./assets-chunks/authors_index_html.mjs').then(m => m.default)},
    'posts/index.html': {size: 16773, hash: '374c2d8146012345a1d78cb6317813c37401fc127bbef1fbb94f0f364271ddc1', text: () => import('./assets-chunks/posts_index_html.mjs').then(m => m.default)},
    'styles-EM25RRIA.css': {size: 315730, hash: 'DzsxyK5Nic4', text: () => import('./assets-chunks/styles-EM25RRIA_css.mjs').then(m => m.default)}
  },
};
