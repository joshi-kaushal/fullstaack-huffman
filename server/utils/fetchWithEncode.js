const axios = require("axios");
const data = require("../data.json");
const getFrequencies = require("./getFrequencies");
const buildHuffmanTree = require("./buildHuffmanTree");
const generateCode = require("./generateCode");
const encodeHuffmanCode = require("./encodeHuffmanCode");
// const Node = require("./Node");

async function fetchWithEncode() {
  const response = await axios(
    "https://jsonplaceholder.typicode.com/comments"
  ).then((res) => {
    return JSON.stringify(res.data);
  });
  // const stringified = JSON.stringify(response);

  const frequencies = getFrequencies(response);
  //   console.log({ frequencies });
  const huffmanTreeRoot = buildHuffmanTree(frequencies);
  //   console.log(huffmanTreeRoot);
  const codes = generateCode(huffmanTreeRoot);
  // console.log(codes);
  const encodedData = encodeHuffmanCode(response, codes);

  return { codes, encodedData, huffmanTreeRoot };
}

module.exports = { fetchWithEncode };
