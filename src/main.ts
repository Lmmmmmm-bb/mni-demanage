import { createApp } from 'vue';

import App from './app';
import { router } from './router';

import './index.css';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
