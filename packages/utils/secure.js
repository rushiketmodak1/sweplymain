import CryptoJS from "crypto-js";

export const encryptData = (data) => {
  try {
    let stringify_data = JSON.stringify(data);
    let ciphertext = CryptoJS.AES.encrypt(
      stringify_data,
      process.env.EN_SECRETE_KEY
    ).toString();

    return ciphertext;
  } catch (e) {
    // console.log("error in decrypteData ", e);
  }
};

export const decrypteData = (data_ciphertext) => {
  try {
    // if envirment i DEV then return data as it
    // if (process.env.ENV_MODE === "DEV") return data_ciphertext;
    let bytes = CryptoJS.AES.decrypt(
      data_ciphertext,
      process.env.EN_SECRETE_KEY
    );
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  } catch (e) {
    // console.log("error in decrypteData ", e);
  }
};
export const encryptData_ = (data) => {
  try {
    // if envirment i DEV then return data as it

    let stringify_data = JSON.stringify(data);
    let ciphertext = CryptoJS.AES.encrypt(
      stringify_data,
      process.env.EN_SECRETE_KEY
    ).toString();
    //  console.log("en=>> ciphertext",ciphertext)
    return ciphertext;
  } catch (e) {
    // console.log("error in decrypteData ", e);
  }
};

export const decrypteData_ = (data_ciphertext) => {
  try {
    // if envirment i DEV then return data as it

    let bytes = CryptoJS.AES.decrypt(
      data_ciphertext,
      process.env.EN_SECRETE_KEY
    );
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    //  console.log("en=>> decryptedData",decryptedData)
    return decryptedData;
  } catch (e) {
    // console.log("error in decrypteData ", e);
  }
};

//for bypass admin
// Your encryption key (please use the same strong and secure key for encryption and decryption)
export function urlSafeBase64Encrypt(data) {
  const encryptionKey = process.env.EN_SECRETE_KEY;

  // Encrypt the data
  const encryptedData = CryptoJS.AES.encrypt(data, encryptionKey).toString();

  // Convert encrypted data to Base64 string
  const base64String = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(encryptedData)
  );

  // Replace characters that are not URL-safe
  const urlSafeBase64String = base64String
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return urlSafeBase64String;
}

export function urlSafeBase64Decrypt(urlSafeBase64String) {
  const encryptionKey = process.env.EN_SECRETE_KEY;

  // Replace characters that are URL-safe back to their original form
  const base64String = urlSafeBase64String
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd((urlSafeBase64String.length + 3) & ~3, "=");

  // Convert Base64 string to encrypted data
  const encryptedData = CryptoJS.enc.Base64.parse(base64String).toString(
    CryptoJS.enc.Utf8
  );

  // Decrypt the data
  const decryptedData = CryptoJS.AES.decrypt(
    encryptedData,
    encryptionKey
  ).toString(CryptoJS.enc.Utf8);

  return decryptedData;
}
