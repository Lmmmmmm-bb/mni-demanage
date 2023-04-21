import { resolve } from 'path';
import unocss from 'unocss/vite';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';
import { defineConfig } from 'vitest/config';
import layouts from 'vite-plugin-vue-layouts';
import compression from 'vite-plugin-compression';
import autoImport from 'unplugin-auto-import/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import vueComponents from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  test: { environment: 'jsdom' },
  plugins: [
    vue(),
    pages(),
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
        './src/services/**',
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
