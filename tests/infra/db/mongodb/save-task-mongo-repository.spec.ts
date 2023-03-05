import { ObjectId } from "mongodb";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";
import { setup, teardown } from "vitest-mongodb";
import { MongoHelper } from "../../../../src/infra/db/mongodb/mongo-helper";
import { TaskModel } from "../../../../src/infra/db/mongodb/task-mongo-model";
import { TaskMongoRepository } from "../../../../src/infra/db/mongodb/task-mongo-repository";

describe("SaveTaskMongoRepository", () => {
  let sut: TaskMongoRepository;

  beforeAll(async () => {
    await setup();
    await MongoHelper.connect(MongoHelper.getMongoURI());
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
    await teardown();
  });

  beforeEach(async () => {
    sut = new TaskMongoRepository();
    await TaskModel.deleteMany({});
  });

  describe("save()", () => {
    test("should save a new task", async () => {
      const id = new ObjectId().toHexString();
      const doc = await sut.save({
        id,
        isDone: false,
        text: "wash the car",
      });
      expect(doc).toEqual({
        id,
        isDone: false,
        text: "wash the car",
      });
    });

    test("should update a task", async () => {
      const id = new ObjectId().toHexString();
      const task = await sut.save({
        id,
        isDone: false,
        text: "wash the car",
      });
      const updatedTask = await sut.save({
        id,
        isDone: true,
        text: "wash the car at twelve o clock",
      });
      expect(updatedTask.id).toBe(task.id);
      expect(updatedTask).toEqual({
        id,
        isDone: true,
        text: "wash the car at twelve o clock",
      });
    });
  });
});
