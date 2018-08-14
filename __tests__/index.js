const uniqueCharacters = require("../lib/uniqueCharacters");
describe("when word is dddeeefggghhh", () => {
  it("should return f", () => {
    const result = uniqueCharacters("dddeeefggghhh");
    expect(result).toEqual("f");
  });
});

describe("when word is terfg", () => {
  it("should return t", () => {
    const result = uniqueCharacters("terfg");
    expect(result).toEqual("t");
  });
});

describe("when word is frof", () => {
  it("should return r", () => {
    const result = uniqueCharacters("frof");
    expect(result).toEqual("r");
  });
});

describe("when word is ttttt", () => {
  it("should return undefined", () => {
    const result = uniqueCharacters("ttttt");
    expect(result).toEqual(false);
  });
});
