
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
    'index.csr.html': {size: 646, hash: '453218ee528a8a5ad61ce48a95201a8bae3804695402093d503f8cd75343a45a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '183280fcf560e863c080644e3d359bc86fd9632a69468969617bae543cd680fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37781, hash: '4645465bc8f147abc95a8eded38e891a65852921349cf2519b3d4cb87e082d5a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NV5VJXJX.css': {size: 163, hash: 'K64/dqIErsA', text: () => import('./assets-chunks/styles-NV5VJXJX_css.mjs').then(m => m.default)}
  },
};
