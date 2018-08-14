const uniqueCharacters = require("../lib/uniqueCharacters");
describe("when word has one unique character", () => {
  it("should return f", () => {
    const result = uniqueCharacters("dddeeefggghhh");
    expect(result).toEqual("f");
  });
});

describe("has all unique characters", () => {
  it("should return t", () => {
    const result = uniqueCharacters("terfg");
    expect(result).toEqual("t");
  });
});

describe("has two unique characters", () => {
  it("should return r", () => {
    const result = uniqueCharacters("frof");
    expect(result).toEqual("r");
  });
});

describe("when string has no unique characters", () => {
  it("should return 0", () => {
    const result = uniqueCharacters("ttttt");
    expect(result).toBeUndefined();
  });
});
