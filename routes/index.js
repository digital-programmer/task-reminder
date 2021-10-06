const mongoose = require("mongoose");

const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.home);
router.post("/create-task", homeController.create_task);
router.post("/delete-tasks", homeController.delete_tasks);

module.exports = router;
