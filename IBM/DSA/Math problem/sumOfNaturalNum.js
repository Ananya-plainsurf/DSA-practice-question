// const sumOfNaturalNumber = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log({ sum });
//   return sum;
// };

// const sumOfNaturalNumber = (n) => {
//   let count = 1;
//   let sum = 0;
//   while (count <= n) {
//     {
//       sum += count;
//       count++;
//     }
//   }
//   return count;
// };

// effective
const sumOfNaturalNumber = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(sumOfNaturalNumber(20));
