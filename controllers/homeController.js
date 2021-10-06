// import task model
const Task = require("../models/task");


// GET request handler for home page
module.exports.home = function (req, res) {
  // get all elements from document
  Task.find({}, (err, tasks) => {
    // if error
    if (err) {
      console.log("Error in fetching from db");
      return;
    }

    // sorts elements based on earliest deadline task
    tasks.sort((a, b) => a.due_date - b.due_date);

    // Render tasks in proper timeline order
    return res.render("home", {
      title: "My ToDo App",
      task_list: tasks,
    });
  });
};

// POST request handler for new task submission
module.exports.create_task = function (req, res) {
  // create new task
  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      due_date: req.body.due_date,
    },
    function (err, newTask) {
      // if error
      if (err) {
        console.log("Error in creating Task");
        return;
      }
      return res.redirect("back");
    }
  );
};


// POST request handler for deleting tasks
module.exports.delete_tasks = function (req, res) {
  // get the ids of selected tasks
  const keys = Object.keys(req.body);

  // if no checkbox is checked, do nothing
  if (keys.length === 0) {
    return res.redirect("back");
  }

  // find the task in database using array "keys" (containing each task ID) and deleting each task
  Task.deleteMany({ _id: { $in: keys } }, function (err) {
    // if error
    if (err) {
      console.log("Error in deleting contact from db");
      return;
    }

    return res.redirect("back");
  });
};
