const containsDuplicate = require("./problem2");

describe("containsDuplicate function test", () => {
  test("should return true if there is duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test("should return false if there is no duplicate", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test("should return false if the array is empty", () => {
    expect(containsDuplicate([])).toBe(false);
  });
});
