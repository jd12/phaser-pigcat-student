const express = require("express");
const app = express();

app.use("/assets", express.static("./assets/"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, () => {
  console.log("Server listening on http://localhost:8080");
});
