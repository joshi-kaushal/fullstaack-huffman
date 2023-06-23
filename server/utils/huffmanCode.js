function huffmanCode(inputStr, codes) {
  let encodedStr = "";

  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i];
    encodedStr += codes.get(char);
  }

  return encodedStr;
}

module.exports = huffmanCode;
