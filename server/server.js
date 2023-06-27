const express = require("express");
const cors = require("cors");

const { fetchWithEncode, fetchWithoutEncode } = require("./utils/utils");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).send("Response from server: Everything is working OK!");
});

app.get("/fetch", async (req, res) => {
  const type = req.query.type;
  if (type === "withoutEncode") {
    const data = fetchWithoutEncode();
    res.status(200).json({ data: data });
  } else {
    const data = fetchWithEncode();
    res.status(200).json({ data });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
