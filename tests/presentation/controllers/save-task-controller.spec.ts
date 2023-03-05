import { beforeEach, describe, expect, test } from "vitest";
import { SaveTaskController } from "../../../src/presentation/controllers/save-task-controller";
import { MockSaveTask } from "../mocks/mock-save-task";

describe("SaveTaskController", () => {
  let saveTask: MockSaveTask;
  let sut: SaveTaskController;

  beforeEach(() => {
    saveTask = new MockSaveTask();
    sut = new SaveTaskController(saveTask);
  });

  test("should return 200 if a provided new task is valid", async () => {
    const httpRequest: SaveTaskController.Request = {
      text: "wash the car",
      isDone: false,
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual({
      statusCode: 200,
      body: {
        id: "new-id",
        isDone: false,
        text: "wash the car",
      },
    });
  });

  test("should return 200 if a provided completed task is valid", async () => {
    const httpRequest: SaveTaskController.Request = {
      id: "valid-id",
      text: "wash the car",
      isDone: true,
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual({
      statusCode: 200,
      body: {
        id: "valid-id",
        isDone: true,
        text: "wash the car",
      },
    });
  });

  test("should return 400 if the text field is not provided", async () => {
    const httpRequest: SaveTaskController.Request = {
      id: "valid-id",
      isDone: true,
    } as SaveTaskController.Request;
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual({
      statusCode: 400,
      body: "text must be required",
    });
  });

  test("should return 400 if the isDone field is not provided", async () => {
    const httpRequest: SaveTaskController.Request = {
      id: "valid-id",
      text: "wash the car",
    } as SaveTaskController.Request;
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual({
      statusCode: 400,
      body: "isDone must be required",
    });
  });
});
