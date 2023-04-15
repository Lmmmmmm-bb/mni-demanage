import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router';

const history = createWebHistory();

const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  history,
  routes,
});
