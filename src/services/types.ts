export type BaseResponse<T = unknown> = {
  status: true;
  data: T;
  message?: string;
} | {
  status: false;
  errorMsg: string;
  errorCode: string;
};
