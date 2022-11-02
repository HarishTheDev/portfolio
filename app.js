const { createServer } = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json({ limit: "10000mb" }));
app.set("view engine", "ejs");
createServer(app).listen(port);
// End point to access main HTML
app.get(["/"], (req, res) => {
  res.render("main", { name: "Harish The Dev!" });
});
