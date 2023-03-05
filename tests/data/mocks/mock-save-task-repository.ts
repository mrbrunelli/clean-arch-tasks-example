import { SaveTaskRepository } from "../../../src/data/protocols/save-task-repository";

export class MockSaveTaskRepository implements SaveTaskRepository {
  async save(
    task: SaveTaskRepository.Params
  ): Promise<SaveTaskRepository.Result> {
    task.id = task.id ? task.id : "new-id";
    return task;
  }
}
