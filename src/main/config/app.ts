import fastify, { FastifyInstance } from "fastify";
import { setupRoutes } from "./routes";

export const setupApp = async (): Promise<FastifyInstance> => {
  const app = fastify({ logger: true });
  setupRoutes(app);
  return app;
};
