const Task = require("../models/task");

module.exports.home = function (req, res) {
  Task.find({}, (err, tasks) => {
    if (err) {
      console.log("Error in fetching from db");
      return;
    }

    return res.render("home", {
      title: "My ToDo App",
      task_list: tasks,
    });
  });
};

module.exports.create_task = function (req, res) {
  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      due_date: req.body.due_date,
    },
    function (err, newTask) {
      if (err) {
        console.log("Error in creating Task");
        return;
      }
      /*
      console.log("*****************");
      console.log(newTask);
      */
      return res.redirect("back");
    }
  );
};

module.exports.delete_tasks = function (req, res) {
  // get the id of the checked element
  const keys = Object.keys(req.body);

  if (keys.length === 0) {
    return res.redirect("back");
  }

  // find the contact in database using id and delete it
  Task.deleteMany({ _id: { $in: keys } }, function (err) {
    if (err) {
      console.log("Error in deleting contact from db");
      return;
    }

    return res.redirect("back");
  });
};
