const axios = require("axios");
const data = require("../data.json");

async function fetchWithoutEncode() {
  // Line 6-13: To send data from API:
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/comments")

    .catch((err) => {
      console.log("err", err);
    });

  return response.data;

  // To send hardcoded data:
  // return data;
}

module.exports = { fetchWithoutEncode };
