
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: "ru-RU",
  routes: [
  {
    "renderMode": 2,
    "route": "/Landing-Macaroons-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 672, hash: '0812cbd768158f1125f9a63b2d0a3f43cec07e439f22226270f3708f970e9d53', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1045, hash: '31e67a1c639fb00f6434d4b3d3e5fba930f32ec34105dd62986c9f8d52d524fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Landing-Macaroons-Angular/index.html': {size: 37094, hash: '001a9f4e8f616986b7ae5d455b9824c0bbb89d2e20bdd105c79d6498bd8a2c08', text: () => import('./assets-chunks/Landing-Macaroons-Angular_index_html.mjs').then(m => m.default)},
    'styles-NV5VJXJX.css': {size: 163, hash: 'K64/dqIErsA', text: () => import('./assets-chunks/styles-NV5VJXJX_css.mjs').then(m => m.default)}
  },
};
