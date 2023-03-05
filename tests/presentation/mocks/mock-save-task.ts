import { SaveTask } from "../../../src/domain/usecases/save-task";

export class MockSaveTask implements SaveTask {
  async save(task: SaveTask.Params): Promise<SaveTask.Result> {
    return {
      id: task.id || "new-id",
      isDone: task.isDone,
      text: task.text,
    };
  }
}
