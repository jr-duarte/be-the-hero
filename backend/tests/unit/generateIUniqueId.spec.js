const generateIUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate Unique ID", () => {
  it("should generate an unique ID", () => {
    const id = generateIUniqueId();
    expect(id).toHaveLength(8);
  });
});
