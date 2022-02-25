import { todoModel } from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const goal = await todoModel.find();
    res.json(goal);
  } catch (err) {
    res.json(err);
  }
};
export const setTodo = async (req, res) => {
  if (!req.body.task) {
    res.status(400).json({ task: "send a task" });
  }
  const goal = await todoModel.create({
    task: req.body.task,
    complete: req.body.complete,
  });
  res.json(goal);
};
export const deleteTodo = async (req, res) => {
  const goal = await todoModel.findByIdAndDelete(req.params.id);
  if (!goal) {
    res.status(400).json("did not find goal");
  }
  res.json({ task: `deleted goal` });
};
export const editTodo = async (req, res) => {
  const goal = await todoModel.findById(req.params.id);

  if (!goal) {
    res.status(400).json("did not find goal");
  }
  const updatedGoal = await todoModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedGoal);
};
