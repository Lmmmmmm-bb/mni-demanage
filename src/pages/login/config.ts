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

export const phoneInputValidateRegex = /^\d{0,13}$/;
