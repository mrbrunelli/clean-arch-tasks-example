import { beforeEach, describe, expect, test } from "vitest";
import { DbAddTask } from "../../../src/data/usecases/db-add-task";
import { Task } from "../../../src/domain/models/task";
import { MockAddTaskRepository } from "../mocks/mock-add-task-repository";
import { MockIdGenerator } from "../mocks/mock-id-generator";

describe("DbAddTask", () => {
  let addTaskRepository: MockAddTaskRepository;
  let idGenerator: MockIdGenerator;
  let sut: DbAddTask;

  beforeEach(() => {
    addTaskRepository = new MockAddTaskRepository();
    idGenerator = new MockIdGenerator();
    sut = new DbAddTask(addTaskRepository, idGenerator);
  });

  test("should add new task", () => {
    const task = {
      text: "wash the car",
    } as Task;
    const result = sut.add(task);
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
    const result = sut.add(task);
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
    const result = sut.add(task);
    expect(result).toEqual({
      id: "id",
      isDone: false,
      text: "wash the car",
    });
  });
});
