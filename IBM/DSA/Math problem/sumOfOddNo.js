const sumOfOddNo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(sumOfOddNo(7));
console.log(sumOfOddNo(50));
console.log(sumOfOddNo(100));
console.log(sumOfOddNo(35));
