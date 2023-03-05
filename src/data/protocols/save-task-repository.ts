import { Task } from "../../domain/models/task";

export interface SaveTaskRepository {
  save(task: SaveTaskRepository.Params): Promise<SaveTaskRepository.Result>;
}

export namespace SaveTaskRepository {
  export type Params = Task;

  export type Result = Task;
}
