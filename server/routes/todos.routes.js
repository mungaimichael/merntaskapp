import express from "express";
const router = express.Router();
import {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/todos.controller.js";

router.route("/").get(getGoal).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);
export default router;
