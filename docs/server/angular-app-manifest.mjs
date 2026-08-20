
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
    'index.csr.html': {size: 646, hash: '922d0382713ecc2477e9a65ad937b4c4b400fb10f77105889046d43842d6e1bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '30474f78cdd0a02d9e66c975d2e87b6b3b174a236bcf02b6641fdded5cb26bfb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38204, hash: '79efda7fcf817af2ccf2ee5339b17483fa762656dbc10675dfaa3828ec682945', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NV5VJXJX.css': {size: 163, hash: 'K64/dqIErsA', text: () => import('./assets-chunks/styles-NV5VJXJX_css.mjs').then(m => m.default)}
  },
};
