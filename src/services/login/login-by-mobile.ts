export const LOGIN_BY_MOBILE_KEY = '__Login_By_Mobile__';

const url = '/login/loginByMobile';

export interface LoginByMobileParams {
  mobile: string;
  password: string;
}

export const loginByMobile = (params: LoginByMobileParams) => http.post<string, LoginByMobileParams>(url, params);
