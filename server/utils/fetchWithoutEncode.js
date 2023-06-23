const data = require("../data.json");

function fetchWithoutEncode() {
  return data;
}

module.exports = { fetchWithoutEncode };
