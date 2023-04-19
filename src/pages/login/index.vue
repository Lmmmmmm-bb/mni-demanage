<script setup lang="ts">
import { type FormInst } from 'naive-ui';

import { loginFormRules, phoneInputValidateRegex } from './config';
import { isDeleteSpace, removeSpaces, splicePhoneNumber } from './utils';

const formRef = ref<FormInst>();
const [isOpen, toggleIsOpen] = useToggle(false);
const info = reactive({
  phone: '',
  password: '',
});

const formatPhone = computed(() => splicePhoneNumber(info.phone));

const handlePhoneAllowInput = (val: string) => {
  const _val = removeSpaces(val);
  const isValidate = phoneInputValidateRegex.test(_val);

  return isValidate;
};

const handlePhoneInput = (val: string) => {
  const _val = removeSpaces(val);
  info.phone = isDeleteSpace(val, info.phone) ? _val.slice(0, -1) : _val;
};

const handleLogin = async () => {
  formRef.value?.validate();
};

onMounted(() => {
  setTimeout(() => {
    toggleIsOpen();
  }, 1500);
});
</script>

<template>
  <div h-full flex flex-row>
    <div
      relative
      grid place-content-center
      transition-base overflow-hidden
      :w="isOpen ? '100%' : '0'"
      :md:w="isOpen ? '50%' : '0'"
      :lg:w="isOpen ? '40%' : '0'"
    >
      <NForm
        ref="formRef" w-72
        xl:w-97
        transition="width duration-500"
        :show-require-mark="false"
        :show-feedback="false"
        :model="info"
        :rules="loginFormRules"
      >
        <NFormItem label="手机号" path="phone">
          <NInput
            font-serif
            autofocus
            placeholder="XXX XXXX XXXX"
            :value="formatPhone"
            :allow-input="handlePhoneAllowInput"
            @input="handlePhoneInput"
          />
        </NFormItem>
        <NFormItem mt-6 label="密码" path="password">
          <NInput
            v-model:value="info.password"
            tracking-widest
            type="password"
            placeholder="请输入"
            show-password-on="mousedown"
            :maxlength="24"
          />
        </NFormItem>
      </NForm>
      <NButtonGroup mt-6>
        <NButton type="primary" flex-1 @click="handleLogin">
          登录
        </NButton>
        <ThemeSwitch type="info" size="medium" secondary />
      </NButtonGroup>
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
