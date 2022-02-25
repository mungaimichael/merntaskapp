import express from "express";
const router = express.Router();
import {
  getTodos,
  setTodo,
  editTodo,
  deleteTodo,
} from "../controllers/todos.controller.js";

router.get("/", getTodos);
router.post("/add", setTodo);
router.put("/edit/:id", editTodo);
router.delete("/delete/:id", deleteTodo);
export default router;
