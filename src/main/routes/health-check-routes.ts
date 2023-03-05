import { FastifyInstance } from "fastify";

export const setupHealthCheckRoutes = (app: FastifyInstance): void => {
  app.get("/health", (request, reply) => {
    reply.send("ok");
  });
};
