import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema(
  {
    isDone: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    collection: "tasks",
    timestamps: true,
  }
);

export const TaskModel = mongoose.model("tasks", TaskSchema);
