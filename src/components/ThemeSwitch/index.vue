<script setup lang="ts">
const isDark = useDark({ valueLight: 'light' });
const toggleColorMode = useToggle(isDark);

watchEffect(() => {
  useHead({
    meta: [
      { name: 'theme-color', content: isDark.value ? '#222' : '#fff' },
    ],
  });
});
</script>

<template>
  <NButton secondary size="small" @click="toggleColorMode()">
    <template #icon>
      <div i-carbon:moon dark:i-carbon:sun />
    </template>
  </NButton>
</template>
