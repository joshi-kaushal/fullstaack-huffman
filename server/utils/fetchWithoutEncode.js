const axios = require("axios");
const data = require("../data.json");

// function fetchWithoutEncode() {
//   let response = "";
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       response = res.data;

//       console.log("responseThen", response);
//     })
//     .catch((err) => {
//       console.log("err", err);
//     });

//   console.log("responseFn", response);
//   return response;
// }

// module.exports = { fetchWithoutEncode };

async function fetchWithoutEncode() {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/comments")

    .catch((err) => {
      console.log("err", err);
    });

  return response.data;
}

module.exports = { fetchWithoutEncode };
