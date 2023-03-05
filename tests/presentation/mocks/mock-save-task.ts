import { Task } from "../../../src/domain/models/task";
import { SaveTask } from "../../../src/domain/usecases/save-task";

export class MockSaveTask implements SaveTask {
  async save(task: SaveTask.Params): Promise<Task> {
    return {
      id: task.id || "new-id",
      isDone: task.isDone,
      text: task.text,
    };
  }
}
