<script setup lang="ts">
import Logo from './logo.component.vue';
import LoginForm from './form.component.vue';

const [isOpen, toggleIsOpen] = useToggle(false);

onMounted(() => {
  setTimeout(() => {
    toggleIsOpen();
  }, 1500);
});
</script>

<template>
  <div h-full flex flex-row>
    <LoginForm :is-open="isOpen" />
    <Logo :is-open="isOpen" />
  </div>
</template>
