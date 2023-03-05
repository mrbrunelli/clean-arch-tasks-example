import "dotenv/config";

export default {
  mongoUrl:
    String(process.env.MONGO_URI) || "mongodb://localhost:27017/clean-tasks",
  port: Number(process.env.PORT) || 3000,
};
