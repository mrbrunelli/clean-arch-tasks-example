import { SaveTaskController } from "../../../presentation/controllers/save-task-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbSaveTask } from "../usecases/save-task-factory";

export const makeSaveTaskController = (): Controller => {
  return new SaveTaskController(makeDbSaveTask());
};
