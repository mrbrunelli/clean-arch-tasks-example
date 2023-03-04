import { IdGenerator } from "../../../src/data/protocols/id-generator";

export class MockIdGenerator implements IdGenerator {
  gen(): string {
    return "new-id";
  }
}
