const missingNumber = require("./problem3");

describe("missing number function testing", () => {
  test("should return the missing number", () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
    expect(missingNumber([0, 1])).toBe(2);
    expect(missingNumber([1])).toBe(0);
    expect(missingNumber([2])).toBe(1);
    expect(missingNumber([1, 2])).toBe(0);
    expect(missingNumber([9, 6, 5, 2, 3, 4, 1, 0, 7])).toBe(8);
  });

  test("should return 0 if the array is empty", () => {
    expect(missingNumber([])).toBe(0);
  });

  test("should return nums[0]-1 is array has only 1 element", () => {
    expect(missingNumber([1])).toBe(0);
    expect(missingNumber([2])).toBe(1);
    expect(missingNumber([0])).toBe(1);
  });
});
