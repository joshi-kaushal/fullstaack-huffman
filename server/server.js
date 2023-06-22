const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

const data = require("./data.json");

app.get("/", (req, res) => {
  res.status(200).send("Response from server: Everything is working OK!");
});

app.get("/fetch", async (req, res) => {
  const type = req.query.type;

  if (type === "withoutEncode") {
    // const data = fetchWithoutEncode();
    res.status(200).json({ message: "Status ok", data: data });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
