import { Task } from "../../domain/models/task";

export interface SaveTaskRepository {
  save(task: Task): Promise<Task>;
}
