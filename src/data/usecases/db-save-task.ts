import { Task } from "../../domain/models/task";
import { SaveTask } from "../../domain/usecases/save-task";
import { IdGenerator } from "../protocols/id-generator";
import { SaveTaskRepository } from "../protocols/save-task-repository";

export class DbSaveTask implements SaveTask {
  constructor(
    private readonly saveTaskRepository: SaveTaskRepository,
    private readonly idGenerator: IdGenerator
  ) {}

  save(task: Task): Task {
    if (!task.id) {
      task.id = this.idGenerator.gen();
      task.isDone = false;
    }
    return this.saveTaskRepository.save(task);
  }
}
