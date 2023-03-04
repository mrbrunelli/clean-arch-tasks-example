import { AddTaskRepository } from "../../../src/data/protocols/add-task-repo";
import { Task } from "../../../src/domain/models/task";

export class MockAddTaskRepository implements AddTaskRepository {
  save(task: Task): Task {
    task.id = task.id ? task.id : "new-id";
    return task;
  }
}
