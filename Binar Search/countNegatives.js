var countNegatives = function (grid) {
  let count = 0;

  // Iterate through each row in the grid
  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    let start = 0;
    let end = row.length - 1;

    // Perform binary search for the first negative number
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (row[mid] < 0) {
        // If the middle element is negative, check the start part
        end = mid - 1;
      } else {
        // If the middle element is non-negative, check the end part
        start = mid + 1;
      }
    }

    // If start is the index of the first negative number
    count += row.length - start;
    console.log({ count });
  }

  return count;
};

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
); // O/p: 8
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
); // O/p:0
console.log(
  countNegatives([
    [3, -1, -3, -3, -3],
    [2, -2, -3, -3, -3],
    [1, -2, -3, -3, -3],
    [0, -3, -3, -3, -3],
  ])
);
