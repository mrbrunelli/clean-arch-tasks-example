import { Task } from "../models/task";

export interface SaveTask {
  save(task: SaveTask.Params): Promise<SaveTask.Result>;
}

export namespace SaveTask {
  export type Params = {
    id?: string;
    text: string;
    isDone: boolean;
  };

  export type Result = Task;
}
