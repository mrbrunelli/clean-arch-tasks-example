import { DbSaveTask } from "../../../data/usecases/db-save-task";
import { SaveTask } from "../../../domain/usecases/save-task";
import { TaskMongoRepository } from "../../../infra/db/mongodb/task-mongo-repository";
import { ObjectIdAdapter } from "../../../infra/id-generator/object-id-adapter";

export const makeDbSaveTask = (): SaveTask => {
  return new DbSaveTask(new TaskMongoRepository(), new ObjectIdAdapter());
};
