import { resolve } from 'path';
import unocss from 'unocss/vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import { defineConfig } from 'vitest/config';
import layouts from 'vite-plugin-vue-layouts';
import autoImport from 'unplugin-auto-import/vite';
import vueComponents from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  test: { environment: 'jsdom' },
  plugins: [
    vue(),
    pages(),
    layouts(),
    unocss(),
    autoImport({
      imports: ['vue', 'vue-router', 'vitest'],
      dts: './src/typings/auto-import.d.ts',
      vueTemplate: true,
    }),
    vueComponents({ dts: './src/typings/components.d.ts' }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
});
