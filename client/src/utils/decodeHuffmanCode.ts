export default function decodeHuffmanCode(encodedStr, huffmanTr) {
  let decodedStr = "";
  let currentNde = huffmanTr;

  for (let i = 0; i < encodedStr.length; i++) {
    const bit = encodedStr[i];

    bit === "0"
      ? (currentNde = currentNde.left)
      : (currentNde = currentNde.right);

    if (currentNde.char !== null) {
      decodedStr += currentNde.char;
      currentNde = huffmanTr;
    }
  }

  return decodedStr;
}
