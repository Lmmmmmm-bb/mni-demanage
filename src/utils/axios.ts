import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { type BaseResponse, type BaseSuccessResponse, errorCodeHandler } from '~/services';

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
  (response: AxiosResponse<BaseResponse>): AxiosResponse['data'] => {
    const { data } = response;
    if (data.status) {
      return data;
    }
    // 通用业务状态错误处理
    errorCodeHandler(data.errorCode);

    return Promise.reject(data);
  },
  (error) => {
    const { notification } = createDiscrete();
    notification.error({
      keepAliveOnHover: true,
      duration: 5000,
      title: '系统正在维护中',
      content: '为了确保系统的稳定性，我们正在对系统进行维护，维护期间部分功能将无法正常使用',
    });

    return error;
  },
);

export const http = {
  get: <T = unknown, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ) => instance.get<T, BaseSuccessResponse<T>, D>(url, config),
  post: <T = unknown, D = unknown>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<D>,
  ) => instance.post<T, BaseSuccessResponse<T>, D>(url, data, config),
  put: <T = unknown, D = unknown>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<D>,
  ) => instance.put<T, BaseSuccessResponse<T>, D>(url, data, config),
  delete: <T = unknown, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ) => instance.delete<T, BaseSuccessResponse<T>, D>(url, config),
};
