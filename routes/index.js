const mongoose = require("mongoose");
const express = require("express");

// Router object to manage all routes
const router = express.Router();

// Contoller fot home page
const homeController = require("../controllers/homeController");


// Home page request
router.get("/", homeController.home);

// create task post request
router.post("/create-task", homeController.create_task);

// delete tasks post request
router.post("/delete-tasks", homeController.delete_tasks);

module.exports = router;
