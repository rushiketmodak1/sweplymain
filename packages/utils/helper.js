export const dataURLtoBlob = (dataURL) => {
    const parts = dataURL.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const byteString = atob(parts[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
  
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
  
    return new Blob([arrayBuffer], { type: contentType });
};