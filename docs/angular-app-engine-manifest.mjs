
export default {
  basePath: '/',
  allowedHosts: [],
  supportedLocales: {
  "ru-RU": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
