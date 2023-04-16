import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';

export const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
};

export { VueQueryPlugin as vueQuery };
