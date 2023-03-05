import mongoose from "mongoose";

export class MongoHelper {
  static getMongoURI(): string {
    return String(process.env.MONGO_URI);
  }

  static async connect(uri: string) {
    await mongoose.connect(uri);
  }

  static async disconnect() {
    await mongoose.disconnect();
  }
}
