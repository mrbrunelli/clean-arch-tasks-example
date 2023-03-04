import { Task } from "../../domain/models/task";

export interface AddTaskRepository {
  save(task: Task): Task;
}
