import { beforeEach, describe, expect, test } from "vitest";
import { DbSaveTask } from "../../../src/data/usecases/db-save-task";
import { Task } from "../../../src/domain/models/task";
import { MockIdGenerator } from "../mocks/mock-id-generator";
import { MockSaveTaskRepository } from "../mocks/mock-save-task-repository";

describe("DbAddTask", () => {
  let saveTaskRepository: MockSaveTaskRepository;
  let idGenerator: MockIdGenerator;
  let sut: DbSaveTask;

  beforeEach(() => {
    saveTaskRepository = new MockSaveTaskRepository();
    idGenerator = new MockIdGenerator();
    sut = new DbSaveTask(saveTaskRepository, idGenerator);
  });

  test("should save new task", () => {
    const task = {
      text: "wash the car",
    } as Task;
    const result = sut.save(task);
    expect(result).toEqual({
      id: "new-id",
      isDone: false,
      text: "wash the car",
    });
  });

  test("should complete a task", () => {
    const task = {
      id: "id",
      text: "wash the car",
      isDone: true,
    } as Task;
    const result = sut.save(task);
    expect(result).toEqual({
      id: "id",
      isDone: true,
      text: "wash the car",
    });
  });

  test("should undo a complete task", () => {
    const task = {
      id: "id",
      text: "wash the car",
      isDone: false,
    } as Task;
    const result = sut.save(task);
    expect(result).toEqual({
      id: "id",
      isDone: false,
      text: "wash the car",
    });
  });
});
