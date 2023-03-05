import { MongoHelper } from "../infra/db/mongodb/mongo-helper";
import { setupApp } from "./config/app";

MongoHelper.connect("mongodb://localhost:27017/clean-tasks")
  .then(async () => {
    const app = await setupApp();
    app.listen({
      port: 3000,
    });
  })
  .catch(console.error);
