import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://demanage-server.zeabur.app/',
  timeout: 10 * 1e3,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  config.headers.Authorization = token;
  return config;
});

instance.interceptors.response.use(
  null,
  () => {
    const { notification } = createDiscrete();
    notification.error({
      keepAliveOnHover: true,
      duration: 5000,
      title: '服务内部错误',
      content: '抱歉，系统发生了一些问题，我们正在努力修复中，请稍后重试',
    });
  },
);

export const axiosInstance = instance;
