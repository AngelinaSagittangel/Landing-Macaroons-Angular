
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "ru-RU",
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 646, hash: 'bf50b4dcd2f7b2286f91fdef0f8e04a5fe87e64df0080e80b9792a10dadae1a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '5cd2e7e05a747cfe5fcb2712e4ae76564034139274d1f2de0964479c17734dc6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37068, hash: '24c83ce37337335fe5f26dcca648c6fc9d13bd6eb6cdd45d104489f408d9e9b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NV5VJXJX.css': {size: 163, hash: 'K64/dqIErsA', text: () => import('./assets-chunks/styles-NV5VJXJX_css.mjs').then(m => m.default)}
  },
};
