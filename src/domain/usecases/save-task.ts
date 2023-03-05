import { Task } from "../models/task";

export interface SaveTask {
  save(task: Task): Task;
}
