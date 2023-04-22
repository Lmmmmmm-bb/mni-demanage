export interface BaseSuccessResponse<T = unknown> {
  status: true;
  data: T;
  message?: string;
}

export interface BaseErrorResponse {
  status: false;
  errorMsg: string;
  errorCode: string;
}

export type BaseResponse<T = unknown> = BaseSuccessResponse<T> | BaseErrorResponse;
