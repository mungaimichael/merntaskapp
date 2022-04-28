import { taskModel } from "../models/tasks.model.js";
import userModel from "../models/user.model.js";

export const addTask = async (req, res, next) => {
  try {
    const { task, description, completed, priority } = req.body;
    const newTask = await taskModel.create({
      task,
      description,
      completed,
      priority,
      user: req.id,
    });
    res.send(newTask);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// function to get all added task s

export const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await taskModel.find({ user: req.id });
    if (tasks) {
      res.status(200).send(tasks);
    } else {
      res.send("No added tasks found");
    }
  } catch (err) {
    res.send(err.message);
  }
};

// function to edit a task

export const editTask = async (req, res, next) => {
  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (updatedTask.user.toString() === req.id) {
      res.status(200).send(updatedTask);
    } else {
      res.send("unauthorized");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
// function to delete a task
export const deleteTask = async (req, res, next) => {
  try {
    const deletedTask = await taskModel.findByIdAndDelete(req.params.id);
    if (deletedTask.user.toString() === req.id) {
      res.status(200).send("delete task successfull");
    } else {
      res.send("unauthorized");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};
