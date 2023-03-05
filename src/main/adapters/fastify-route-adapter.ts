import { FastifyReply, FastifyRequest } from "fastify";
import { Controller } from "../../presentation/protocols/controller";

export const adaptRoute = (controller: Controller) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const httpRequest = {
      ...(request.body || {}),
    };
    const httpResponse = await controller.handle(httpRequest);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      reply.status(httpResponse.statusCode).send(httpResponse.body);
    } else {
      reply.status(httpResponse.statusCode).send({
        error: httpResponse.body,
      });
    }
  };
};
