const data = require("../data.json");
const getFrequencies = require("./getFrequencies");
const buildHuffmanTree = require("./buildHuffmanTree");
const generateCode = require("./generateCode");
const encodeHuffmanCode = require("./encodeHuffmanCode");
// const Node = require("./Node");

function fetchWithEncode() {
  const stringified = JSON.stringify(data.comments);
  const frequencies = getFrequencies(stringified);
  //   console.log({ frequencies });
  const huffmanTreeRoot = buildHuffmanTree(frequencies);
  //   console.log(huffmanTreeRoot);
  const codes = generateCode(huffmanTreeRoot);
  console.log(codes);
  const encodedData = encodeHuffmanCode(stringified, codes);

  return { codes, encodedData, huffmanTreeRoot };
}

module.exports = { fetchWithEncode };
