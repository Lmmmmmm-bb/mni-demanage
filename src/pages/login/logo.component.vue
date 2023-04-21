<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>();
</script>

<template>
  <div
    grid place-content-center
    :w="props.isOpen ? '0' : '100%'"
    :md:w="props.isOpen ? '50%' : '100%'"
    :lg:w="props.isOpen ? '60%' : '100%'"
    bg="#f7f8fa" dark:bg="#17171a"
    transition-base overflow-hidden
  >
    <div
      w-72 h-72 relative
      bg="#6AA1FF" dark:bg="#1D4DD2"
      transition-base
      border="rounded-50%"
      after:content-none
      after:h-72 after:w-122 after:absolute
      after:left="50%" after:top="50%" after:translate-x="-1/2"
      after:backdrop="saturate-150 blur-30px"
    />
  </div>
</template>
