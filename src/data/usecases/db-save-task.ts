import { Task } from "../../domain/models/task";
import { SaveTask } from "../../domain/usecases/save-task";
import { IdGenerator } from "../protocols/id-generator";
import { SaveTaskRepository } from "../protocols/save-task-repository";

export class DbSaveTask implements SaveTask {
  constructor(
    private readonly saveTaskRepository: SaveTaskRepository,
    private readonly idGenerator: IdGenerator
  ) {}

  async save(taskData: SaveTask.Params): Promise<SaveTask.Result> {
    if (!taskData.id) {
      taskData.id = this.idGenerator.gen();
      taskData.isDone = false;
    }
    const task = {
      id: taskData.id,
      isDone: taskData.isDone,
      text: taskData.text,
    } satisfies Task;
    return this.saveTaskRepository.save(task);
  }
}
