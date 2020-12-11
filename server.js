const express = require("express");

const app = express();

app.use(express.static("./dist/belajarangular"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/belajarangular/" });
});

app.listen(process.env.PORT || 4200);