import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "insert a todo"],
  },
});

export const GoalModel = mongoose.model("todos", goalSchema);
