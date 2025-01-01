const fibonaccii = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonaccii(n - 1) + fibonaccii(n - 2);
};

console.log(fibonaccii(9));

const fib = (n, sum = 2, i = 1) => {
  console.log({ i, sum });

  if (i === n) {
    return sum;
  }
  return fib(n, (sum += i), (i += 1));
};
console.log(fib(9));
