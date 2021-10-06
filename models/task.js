const mongoose = require("mongoose");


// Collection for storing each task document
const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  due_date: {
    type: Date,
    required: true,
  },
});


// Model creation
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
