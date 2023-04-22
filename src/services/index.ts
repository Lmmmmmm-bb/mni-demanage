import { ErrorCode } from './codes';

export type { BaseResponse, BaseErrorResponse, BaseSuccessResponse } from './types';

export {
  LOGIN_BY_MOBILE_KEY,
  type LoginByMobileParams,
  loginByMobile,
  GET_RSA_PUBLIC_KEY_KEY,
  getRSAPublicKey,
} from './login';

const notificationConfig = {
  keepAliveOnHover: true,
  duration: 5000,
};

// 通用业务状态错误处理
export const errorCodeHandler = (code: ErrorCode | string) => {
  const { notification } = createDiscrete();
  if (code === ErrorCode.SystemError) {
    notification.error({
      ...notificationConfig,
      title: '系统错误',
      content: '抱歉，系统发生了一些问题，我们正在努力修复中',
    });
  } else if ([ErrorCode.NullPointer, ErrorCode.MethodNotSupport].includes(code as ErrorCode)) {
    notification.error({
      ...notificationConfig,
      title: '服务错误',
      content: '抱歉，服务内部发生了一些问题，请尝试刷新页面或稍后重试',
    });
  }
};
