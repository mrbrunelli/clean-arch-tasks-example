import { Task } from "../models/task";

export interface AddTask {
  add(task: Task): Task;
}
