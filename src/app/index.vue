<script setup lang="ts">
const isDark = useDark();

const theme = computed(() => isDark.value ? darkTheme : lightTheme);
</script>

<template>
  <NConfigProvider h-full :theme-overrides="theme">
    <NNotificationProvider :max="3">
      <RouterView />
    </NNotificationProvider>
  </NConfigProvider>
</template>
