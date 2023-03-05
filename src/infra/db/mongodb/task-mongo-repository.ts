import { SaveTaskRepository } from "../../../data/protocols/save-task-repository";
import { TaskModel } from "./task-mongo-model";

export class TaskMongoRepository implements SaveTaskRepository {
  async save(
    task: SaveTaskRepository.Params
  ): Promise<SaveTaskRepository.Result> {
    const doc = await TaskModel.findByIdAndUpdate(
      task.id,
      {
        isDone: task.isDone,
        text: task.text,
      },
      { upsert: true, new: true }
    ).lean();
    return {
      id: doc._id.toHexString(),
      isDone: doc.isDone,
      text: doc.text,
    };
  }
}
