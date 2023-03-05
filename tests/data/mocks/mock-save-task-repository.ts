import { SaveTaskRepository } from "../../../src/data/protocols/save-task-repository";
import { Task } from "../../../src/domain/models/task";

export class MockSaveTaskRepository implements SaveTaskRepository {
  async save(task: Task): Promise<Task> {
    task.id = task.id ? task.id : "new-id";
    return task;
  }
}
