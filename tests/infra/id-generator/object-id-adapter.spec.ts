import { describe, expect, test } from "vitest";
import { ObjectIdAdapter } from "../../../src/infra/id-generator/object-id-adapter";

describe("ObjectIdAdapter", () => {
  let sut = new ObjectIdAdapter();

  describe("gen()", () => {
    test("should generate a ObjectId", () => {
      expect(sut.gen()).toHaveLength(24);
    });
  });
});
