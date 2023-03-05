import { MongoHelper } from "../infra/db/mongodb/mongo-helper";
import { setupApp } from "./config/app";
import env from "./config/env";

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = await setupApp();
    app.listen({
      port: env.port,
    });
  })
  .catch(console.error);
