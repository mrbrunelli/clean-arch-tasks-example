import { FastifyInstance } from "fastify";
import { setupHealthCheckRoutes } from "../routes/health-check-routes";
import { setupTaskRoutes } from "../routes/task-routes";

export const setupRoutes = (app: FastifyInstance): void => {
  setupHealthCheckRoutes(app);
  setupTaskRoutes(app);
};
