import { SaveTask } from "../../domain/usecases/save-task";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class SaveTaskController implements Controller {
  constructor(private readonly saveTask: SaveTask) {}

  async handle(request: SaveTaskController.Request): Promise<HttpResponse> {
    if (!request.text) {
      return {
        statusCode: 400,
        body: "text must be required",
      };
    }
    if (request.isDone === undefined) {
      return {
        statusCode: 400,
        body: "isDone must be required",
      };
    }
    const task = await this.saveTask.save(request);
    return {
      statusCode: 200,
      body: task,
    };
  }
}

export namespace SaveTaskController {
  export type Request = {
    id?: string;
    text: string;
    isDone: boolean;
  };
}
