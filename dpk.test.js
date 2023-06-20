const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("should return a trivial partition key when no event is passed", () => {
    expect(deterministicPartitionKey()).toEqual("0");
  });

  it("should use the provided partition key if present", () => {
    const event = { partitionKey: "partitionKey" };
    expect(deterministicPartitionKey(event)).toEqual("partitionKey");
  });

  it("should calculate a hash of the event object when no partition key is provided", () => {
    const event = { exampleField: "example" };
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    expect(deterministicPartitionKey(event)).toEqual(expectedHash);
  });

  it("should convert  partition keys to strings when needed", () => {
    const event = { partitionKey: 123456 };
    expect(deterministicPartitionKey(event)).toEqual("123456");
  });

  it("should hash the partition key if its length exceeds a maximum value", () => {
    const longKey = Array(260).fill("abc").join("");
    const expectedHash = crypto
      .createHash("sha3-512")
      .update(longKey)
      .digest("hex");
    expect(deterministicPartitionKey({ partitionKey: longKey })).toEqual(
      expectedHash
    );
  });
});
