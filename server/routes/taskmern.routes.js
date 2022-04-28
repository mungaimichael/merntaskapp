import express from "express";
//  import task controller funtions
import {
  addTask,
  deleteTask,
  editTask,
  getAllTasks,
} from "../controllers/tasks.controllers.js";

// import user controller functions
import { loginUser, createUser, getUser } from "../controllers/users.contr.js";

// import protected route function
import { protect } from "../middleware/authMiddleware.js";
// create a router instance

const router = express.Router();

// user register , login and log out routes

router.get("/users", protect, getUser);
router.post("/login", loginUser);
router.post("/register", createUser);

// task add , edit,delete  routes

router.post("/tasks/addtask", protect, addTask);

router.get("/tasks/all", protect, getAllTasks);

//  edit task function
router.put("/tasks/edit/:id", protect, editTask);

// delete task function
router.delete("/tasks/delete/:id", protect, deleteTask);

export default router;
