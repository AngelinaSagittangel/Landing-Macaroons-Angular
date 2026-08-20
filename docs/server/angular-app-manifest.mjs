
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
    'index.csr.html': {size: 646, hash: 'c8ed7028ffb5a662e742f39ccda2435d7664759ae8232fad391623e7bde3ae94', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '9a30a57355d121ee0c79694da6f7f76721bff93292f8b8189622feb88a7a53f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 38125, hash: 'fee2f68106a780f933289f12e028d1d907bcc65f4ada829e9b96a8cf9a0af272', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NV5VJXJX.css': {size: 163, hash: 'K64/dqIErsA', text: () => import('./assets-chunks/styles-NV5VJXJX_css.mjs').then(m => m.default)}
  },
};
