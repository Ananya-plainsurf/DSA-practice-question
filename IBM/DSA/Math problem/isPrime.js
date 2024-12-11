const isPrime = (n) => {
  if (n === 2) return "is Prime";
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "not a Prime";
    } else {
      return "is Prime";
    }
  }
};

// const isPrime = (n) => {
//   if (n === 2) return "is Prime";
//   let count = 2;
//   while (count < n) {
//     if (n % count === 0) {
//       return "not a prime";
//     } else {
//       return "is a prime";
//     }
//   }
// };

console.log(isPrime(2)); // is prime
console.log(isPrime(53)); // is prime
console.log(isPrime(54)); // not Prime
