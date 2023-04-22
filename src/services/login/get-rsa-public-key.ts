export const GET_RSA_PUBLIC_KEY_KEY = '__Get_RSA_PublicKey__';

const url = '/login/getRsaPublicKey';

export const getRSAPublicKey = () => http.get<string>(url);
