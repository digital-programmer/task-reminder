// require library
const mongoose = require("mongoose");

// connect to local database (will connect to cloud db later)
mongoose.connect("mongodb://localhost:27017/tasks_list_db");

// acquire the connection object
const db = mongoose.connection;

// if error event is triggered
db.on("error", console.error.bind(console, "error connecting to db"));

// if successful
db.once("open", function () {
  console.log("Connected to Database Successfullly");
});
