const minmax = (arr) => {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i <= arr.length - 4; i++) {
    let sum = 0;
    for (let j = i; j < i + 4; j++) {
      sum += arr[j];
    }
    console.log("sum", sum);

    if (sum > max) {
      max = sum;
    }
    if (sum < min && sum > 0) {
      min = sum;
    }
  }
  return { min, max };
};

console.log("minmax", minmax([7, 69, 2, 221, 8974]));
