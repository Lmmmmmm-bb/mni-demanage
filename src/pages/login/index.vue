<script setup lang="ts">
import LoginForm from './form.component.vue';
import Logo from './logo.component.vue';

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

<route lang="yaml">
name: login
meta:
  title: 登录 - demanage
  layout: empty
</route>
