<script setup lang="ts">
import type { FormInst } from 'naive-ui';

import {
  GET_RSA_PUBLIC_KEY_KEY,
  getRSAPublicKey,
  LOGIN_BY_MOBILE_KEY,
  loginByMobile,
} from '~/services';
import { loginFormRules, phoneInputValidateRegex } from './config';
import { encryptByRSA, isDeleteSpace, removeSpaces, splicePhoneNumber } from './utils';

const props = defineProps<{ isOpen: boolean }>();

const formRef = ref<FormInst>();
const info = reactive({
  phone: '',
  password: '',
});

const { data: pubKey } = useQuery({
  enabled: true,
  queryKey: [GET_RSA_PUBLIC_KEY_KEY],
  queryFn: getRSAPublicKey,
  select: data => data.data,
});

const { isFetching, refetch } = useQuery({
  queryKey: [LOGIN_BY_MOBILE_KEY, info, pubKey],
  queryFn: () => {
    const encryptPassword = encryptByRSA(pubKey.value!, info.password);
    return loginByMobile({ mobile: info.phone, password: encryptPassword });
  },
  select: data => data.data,
  // onSuccess: (token) => {
  //   localStorage.setItem(TOKEN_KEY, token);
  //   router.push({ name: 'overview' });
  // },
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
  await formRef.value?.validate();
  pubKey.value && refetch();
};
</script>

<template>
  <main
    relative
    grid place-content-center
    transition-base overflow-hidden
    :w="props.isOpen ? '100%' : '0'"
    :md:w="props.isOpen ? '50%' : '0'"
    :lg:w="props.isOpen ? '40%' : '0'"
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
      <NButton type="primary" flex-1 :loading="isFetching" @click="handleLogin">
        登录
      </NButton>
      <ThemeSwitch type="info" size="medium" secondary />
    </NButtonGroup>
  </main>
</template>
