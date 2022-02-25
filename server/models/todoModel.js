import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, "insert a todo"],
  },
  complete: {
    type: Boolean,
    required: true,
  },
});

export const todoModel = mongoose.model("todos", todoSchema);
