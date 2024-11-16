//  this beats 79.70%

// function fibonacci(n){
//   let arr = [0,1];
//   for(let i = 1; i< n;i++){
//     let sum = arr[i]+arr[i-1];
//     arr.push(sum)
//   }
//   return {
//     'list':arr,
//     'nthNumber':arr[n]
//   }
// }

// console.log(fibonacci(8))

// below beats 17.53%
const fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(8));
