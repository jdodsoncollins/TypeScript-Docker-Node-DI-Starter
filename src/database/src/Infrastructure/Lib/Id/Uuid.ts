import uuid4 = require('uuid/v4');

export class Uuid {
  public static uuid4(): string {
    return uuid4();
  }
}
