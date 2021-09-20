require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello world");
});

$_PORT = process.env.PORT || 3000;
app.listen(
  $_PORT,
  console.log(`Application has been started on the port: ${$_PORT}`)
);
