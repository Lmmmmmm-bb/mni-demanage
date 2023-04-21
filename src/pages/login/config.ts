import type { FormRules } from 'naive-ui';

export const loginFormRules: FormRules = {
  phone: {
    required: true,
    message: '请输入手机号码',
  },
  password: {
    required: true,
    message: '请输入密码',
  },
};

export const phoneInputValidateRegex = /^[0-9]{0,13}$/;
