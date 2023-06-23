const Node = require("./Node");

function buildHuffmanTree(frequencies) {
  const queue = [];

  frequencies.forEach((fq, ch) => {
    queue.push(new Node(ch, fq, null, null));
  });

  while (queue.length > 1) {
    queue.sort((a, b) => a.freq - b.freq);

    const left = queue.shift();
    const right = queue.shift();

    const pairedFq = left.freq + right.freq;
    const parentNode = new Node(null, pairedFq, left, right);
    queue.push(parentNode);
  }

  return queue[0];
}

module.exports = buildHuffmanTree;
