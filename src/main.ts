import { createApp } from 'vue';

import {
  head,
  pinia,
  router,
  vueQuery,
  vueQueryOptions,
} from './modules';
import App from './app';

import './index.css';
import 'virtual:uno.css';
import 'virtual:unocss-devtools';
import '@unocss/reset/tailwind.css';

// preflight styles
const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);

app.use(router);
app.use(head);
app.use(pinia);
app.use(vueQuery, vueQueryOptions);
app.mount('#app');
