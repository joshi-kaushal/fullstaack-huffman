function getFrequencies(string) {
  const frequencies = new Map();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (frequencies.has(char)) {
      frequencies.set(char, frequencies.get(char) + 1);
    } else frequencies.set(char, 1);
  }
  return frequencies;
}

module.exports = getFrequencies;
