function encodeHuffmanCode(inputStr, codes) {
  let encodedStr = "";

  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i];
    // encodedStr += codes.get(char);
    encodedStr += codes[char];
  }
  return encodedStr;
}

module.exports = encodeHuffmanCode;
