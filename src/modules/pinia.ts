import { createPersistedState } from 'pinia-plugin-persistedstate';

const persistedState = createPersistedState({
  auto: true,
});

export const pinia = createPinia();

pinia.use(persistedState);
