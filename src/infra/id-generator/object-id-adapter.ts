import { ObjectId } from "mongodb";
import { IdGenerator } from "../../data/protocols/id-generator";

export class ObjectIdAdapter implements IdGenerator {
  gen(): string {
    return new ObjectId().toHexString();
  }
}
