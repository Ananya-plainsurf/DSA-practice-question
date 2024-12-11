const digonalDiff = (d) => {
  let left = 0;
  let right = 0;
  for (let i = 0; i < d.length; i++) {
    left += d[i][i];
    right += d[i][d.length - 1 - i];
  }
  console.log({ left, right });

  return Math.abs(left - right);
};

console.log(
  "digonalDiff",
  digonalDiff([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
