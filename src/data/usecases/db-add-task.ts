import { Task } from "../../domain/models/task";
import { AddTask } from "../../domain/usecases/add-task";
import { AddTaskRepository } from "../protocols/add-task-repo";
import { IdGenerator } from "../protocols/id-generator";

export class DbAddTask implements AddTask {
  constructor(
    private readonly addTaskRepository: AddTaskRepository,
    private readonly idGenerator: IdGenerator
  ) {}

  add(task: Task): Task {
    if (!task.id) {
      task.id = this.idGenerator.gen();
      task.isDone = false;
    }
    return this.addTaskRepository.save(task);
  }
}
