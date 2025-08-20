
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/Eazifly/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/Eazifly"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6JLRAWUU.js",
      "chunk-WXPGMDHL.js",
      "chunk-XKHAYIZY.js",
      "chunk-23VQCLN4.js"
    ],
    "route": "/Program%20Files/Git/Eazifly/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L72KHLNG.js",
      "chunk-XKHAYIZY.js",
      "chunk-23VQCLN4.js"
    ],
    "route": "/Program%20Files/Git/Eazifly/faqs"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YI4ME4HQ.js",
      "chunk-WXPGMDHL.js",
      "chunk-23VQCLN4.js"
    ],
    "route": "/Program%20Files/Git/Eazifly/how-to-apply"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TB67GU6S.js",
      "chunk-23VQCLN4.js"
    ],
    "route": "/Program%20Files/Git/Eazifly/application-form"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JC65KOJR.js",
      "chunk-23VQCLN4.js"
    ],
    "route": "/Program%20Files/Git/Eazifly/terms"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZE3GPMPI.js"
    ],
    "route": "/Program%20Files/Git/Eazifly/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2HQLGXLA.js"
    ],
    "route": "/Program%20Files/Git/Eazifly/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JV7HTID7.js"
    ],
    "route": "/Program%20Files/Git/Eazifly/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CGQKIS6N.js"
    ],
    "route": "/Program%20Files/Git/Eazifly/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 18168, hash: 'c8e72ef2944d1f32fc6e8e0d4a98db875adfd6f3a44a9bca22c6b8b5d7ca35d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3864, hash: 'b06b6f3e15d409223ac06a08ceacb2f93b7634ca9cd421405ef013ab6b8de9fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QCEG65L2.css': {size: 204556, hash: 'iU2W1S4fny8', text: () => import('./assets-chunks/styles-QCEG65L2_css.mjs').then(m => m.default)}
  },
};
