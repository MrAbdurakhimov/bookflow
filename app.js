const express = reqire("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(
  $_PORT,
  console.log(`Application has been started on the port: ${$_PORT}`)
);
