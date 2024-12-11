// const factorial = (n) => {
//   let sum = 1;
//   for (let i = 1; i <= n; i++) {
//     sum *= i;
//   }
//   return sum;
// };

// const factorial = (n) => {
//   let sum = 1;
//   let count = 1;
//   while (count <= n) {
//     sum *= count;
//     count++;
//   }
//   return sum;
// };

const factorial = (n) => {
  let uniqueFactList = [n];
  for (let i = 1; i <= Math.abs(n / 2); i++) {
    if (n % i === 0) {
      uniqueFactList.push(i);
    }
  }
  return uniqueFactList;
};
console.log(factorial(12));
console.log(factorial(10));
