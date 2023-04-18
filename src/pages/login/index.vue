<script setup lang="ts">
const [isOpen, toggleIsOpen] = useToggle(false);

onMounted(() => {
  setTimeout(() => {
    toggleIsOpen();
  }, 1500);
});
</script>

<template>
  <div
    h-full
    flex flex-row
  >
    <div
      relative
      grid place-content-center
      :w="isOpen ? '100%' : '0'"
      :md:w="isOpen ? '50%' : '0'"
      :lg:w="isOpen ? '40%' : '0'"
      transition-base overflow-hidden
    >
      Form
      <ThemeSwitch />
    </div>
    <div
      grid place-content-center
      :w="isOpen ? '0' : '100%'"
      :md:w="isOpen ? '50%' : '100%'"
      :lg:w="isOpen ? '60%' : '100%'"
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
  </div>
</template>
