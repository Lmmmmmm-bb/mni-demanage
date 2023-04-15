<script setup lang="ts">
const isDark = useDark({ valueLight: 'light' });
const toggleColorMode = useToggle(isDark);
</script>

<template>
  <div
    h-full
    grid place-content-center
    font-serif
  >
    <NButton type="primary" @click="toggleColorMode()">
      <template #icon>
        <div i-carbon:moon dark:i-carbon:sun />
      </template>
    </NButton>
  </div>
</template>
