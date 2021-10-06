const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

// Database config
const db = require("./config/mongoose");

// use express router to connect
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));

// Middleware

app.use(express.static(path.join(__dirname, "assets")));

// set view engine and view route
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log("Error listening on port", port);
  }
  console.log("Server listening on port", port);
});
