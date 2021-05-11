// npm i crypto 
const crypto = require('crypto');

// Encrypt with Public Key as string 
function cyberSourceEncrypt(cardNumber, publicKey) {
    let formatPublicKey;
    const dataBuffer = Buffer.from(cardNumber);
    if (!publicKey.includes('-BEGIN PUBLIC KEY-')) {
        formatPublicKey = `-----BEGIN PUBLIC KEY-----
        ${publicKey}
-----END PUBLIC KEY-----`;
    } else { formatPublicKey = publicKey };
    const encryptedCardBuffer = crypto.publicEncrypt(
        {
            key: formatPublicKey,
            oaepHash: 'sha256',
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        }, buffer=dataBuffer);
    return encryptedCardBuffer.toString('base64');
}
// cyberSourceEncrypt("credit-card", "publicKey")
// cyberSourceEncrypt("4024007179632343", "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjrSowyFeRCqRzBsLBVzHWEQ7RWs.......")
console.log(cyberSourceEncrypt("", ""))