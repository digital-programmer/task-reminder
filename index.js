const express = require("express");
const port = 8000;

const app = express();

// use express router to connect
app.use("/", require("./routes"));

// set view engine and view route
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log("Error listening on port" + port);
  }
  console.log("Server listening on port" + port);
});
