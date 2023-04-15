import { createApp } from 'vue';

import App from './app';
import { router } from './router';

import './index.css';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';

// preflight styles
const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);

app.use(router);
app.mount('#app');
