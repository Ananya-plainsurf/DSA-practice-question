// const sumSquare = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i * i;
//   }
//   return sum;
// };

//  effective approach
// function sumSquare(n) {
//   return (n * (n + 1) * (2 * n + 1)) / 6;
// }

// Recursion (not a good practice)
const sumSquare = (n, i = 1, sum = 0) => {
  if (i > n) return sum;
  return sumSquare(n, i + 1, sum + i * i);
};
console.log(sumSquare(5));
