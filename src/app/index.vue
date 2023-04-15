<script setup lang="ts">
const isDark = useDark();

const theme = computed(() => isDark.value ? darkTheme : lightTheme);
</script>

<template>
  <NConfigProvider h-full :theme-overrides="theme">
    <RouterView />
  </NConfigProvider>
</template>
