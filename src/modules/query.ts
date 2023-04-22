import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';

export const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: false,
        enabled: false,
        refetchOnWindowFocus: false,
      },
    },
  },
};

export { VueQueryPlugin as vueQuery };
