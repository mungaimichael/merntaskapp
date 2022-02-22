import { GoalModel } from "../models/GoalModel.js";

export const getGoal = async (req, res) => {
  try {
    const goal = await GoalModel.find();
    res.json(goal);
  } catch (err) {
    res.json(err);
  }
};
export const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ text: "send a text" });
  }
  const goal = await GoalModel.create({ text: req.body.text });
  res.json(goal);
};
export const deleteGoal = async (req, res) => {
  const goal = await GoalModel.findByIdAndDelete(req.params.id);
  if (!goal) {
    res.status(400).json("did not find goal");
  }
  res.json({ text: `deleted goald` });
};
export const updateGoal = async (req, res) => {
  const goal = await GoalModel.findById(req.params.id);

  if (!goal) {
    res.status(400).json("did not find goal");
  }
  const updatedGoal = await GoalModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedGoal);
};
