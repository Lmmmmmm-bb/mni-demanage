import RASEncrypt from 'jsencrypt';

export const removeSpaces = (str: string) => str.replace(/\s/g, '');

export const splicePhoneNumber = (str: string) => {
  const mac = str.slice(0, 3);
  const hlr = str.slice(3, 7);
  const lsr = str.slice(7, 11);

  // format phone number
  // xxxxxxxxxxx to xxx xxxx xxxx
  let res = '';
  if (mac) {
    res += mac.length === 3 ? `${mac} ` : mac;
  }
  if (hlr) {
    res += hlr.length === 4 ? `${hlr} ` : hlr;
  }
  if (lsr) {
    res += lsr;
  }
  return res;
};

export const isDeleteSpace = (current: string, prev: string) => {
  const currentLen = current.length;
  const prevLen = prev.length;

  const isHlrSpace = currentLen === 8 && prevLen === 7;
  const isLsrSpace = currentLen === 3 && prevLen === 3;

  return isHlrSpace || isLsrSpace;
};

export const encryptByRSA = (pubKey: string, content: string) => {
  const encrypt = new RASEncrypt();
  encrypt.setPublicKey(pubKey);
  const rsaPassWord = encrypt.encrypt(content);

  return rsaPassWord || '';
};
