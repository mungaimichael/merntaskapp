import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  // user field to provide a relationship
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  task: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
  priority: {
    type: Boolean,
  },
});

export const taskModel = mongoose.model("tasks", taskSchema);
