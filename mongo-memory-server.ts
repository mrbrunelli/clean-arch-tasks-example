import { MongoMemoryServer } from "mongodb-memory-server";

(async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  process.env.MONGO_URI = uri;
})();
