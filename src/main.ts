import { createApp } from 'vue';

import App from './app';
import { head, pinia, router } from './modules';

import './index.css';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';

// preflight styles
const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);

app.use(router);
app.use(head);
app.use(pinia);
app.mount('#app');
