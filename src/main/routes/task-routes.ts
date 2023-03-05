import { FastifyInstance } from "fastify";
import { adaptRoute } from "../adapters/fastify-route-adapter";
import { makeSaveTaskController } from "../factories/controllers/save-task-controller-factory";

export const setupTaskRoutes = (app: FastifyInstance): void => {
  app.post("/tasks", adaptRoute(makeSaveTaskController()));
};
