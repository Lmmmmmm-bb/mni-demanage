import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import unocss from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import vueComponents from 'unplugin-vue-components/vite';
import compression from 'vite-plugin-compression';
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: { environment: 'jsdom' },
  plugins: [
    vue(),
    pages({ exclude: ['**/*.component.vue'] }),
    layouts(),
    unocss(),
    compression(),
    visualizer({
      open: true,
      gzipSize: true,
      filename: './dist/visualizer.html',
    }),
    autoImport({
      imports: [
        'vue',
        'vue-router',
        'vitest',
        'pinia',
        '@vueuse/core',
        '@vueuse/head',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
            'createDiscreteApi',
          ],
        },
        {
          '@tanstack/vue-query': [
            'useQuery',
            'useMutation',
          ],
        },
      ],
      dirs: [
        './src/configs/**',
        './src/stores/**',
        './src/utils/**',
      ],
      dts: './src/typings/auto-import.d.ts',
      vueTemplate: true,
    }),
    vueComponents({
      dts: './src/typings/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          ui: ['naive-ui'],
          vue: ['vue', 'vue-router'],
          vueuse: ['@vueuse/core', '@vueuse/head'],
        },
      },
    },
  },
});
