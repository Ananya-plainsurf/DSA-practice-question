const majorityElement = require("./problem1");
// import majorityElement from "./problem1";

test("get maximum value", () => {
  expect(majorityElement([3, 2, 3])).toBe(3);
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  expect(majorityElement([2, 2, 1, 1, 1, 1, 1, 2, 2])).toBe(1);
});

test("get maximum value is only 1 element", () => {
  expect(majorityElement([1])).toBe(1);
});
test("get maximum value is only 2 element", () => {
  expect(majorityElement([1, 2])).toBe(1);
});

test("get maximum value if nums is empty", () => {
  expect(majorityElement([])).toBe(0);
});

// import { expect } from "@jest/globals";

// describe("majorityElement", () => {
//   test("returns the majority element for [3, 2, 3]", () => {
//     expect(majorityElement([3, 2, 3])).toBe("3"); // '3' as the function converts keys to strings
//   });

//   test("returns the majority element for [2, 2, 1, 1, 1, 2, 2]", () => {
//     expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe("2");
//   });

//   test("returns 0 for an empty array", () => {
//     expect(majorityElement([])).toBe(0);
//   });

//   test("returns the only element for a single-element array", () => {
//     expect(majorityElement([1])).toBe(1);
//   });

//   test("handles arrays with no majority element", () => {
//     expect(majorityElement([1, 2, 3, 4])).toBe(undefined); // This is based on your current implementation
//   });
// });
