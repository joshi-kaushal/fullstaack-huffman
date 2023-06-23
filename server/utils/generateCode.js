function generateCodes(root) {
  // const codes = new Map();
  const codes = {};
  function traverse(node, code) {
    if (node.char !== null) {
      codes[node.char] = code;
      // codes.set(node.char, code);
      return;
    }

    traverse(node.left, code + "0");
    traverse(node.right, code + "1");
  }

  traverse(root, "");
  return codes;
}

module.exports = generateCodes;
