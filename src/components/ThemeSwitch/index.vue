<script setup lang="ts">
const isDark = useDark({ valueLight: 'light' });
const toggleColorMode = useToggle(isDark);
</script>

<template>
  <NButton quaternary size="small" @click="toggleColorMode()">
    <template #icon>
      <div i-carbon:moon dark:i-carbon:sun />
    </template>
  </NButton>
</template>
