module.exports.home = function (req, res) {
  let tasksList = [
    {
      id: "1",
      description: "Annual report submission deadline",
      category: "school",
      due_date: "21 Oct, 2021",
    },
    {
      id: "2",
      description: "Get grocery",
      category: "personal",
      due_date: "02 Nov, 2021",
    },
  ];

  return res.render("home", {
    title: "To-Do App",
    task_list: tasksList,
  });
};
