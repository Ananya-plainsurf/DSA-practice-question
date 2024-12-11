/* 
MOST ASKED INTERVIEW QUESTIONS

1. factorial of n
eg: 5! = 5*4*3*2*1

divide problem 
1. solution : (n-1)*(n-2)*(n-3).....
2. terminate till: n === 1

*/
function recursionFactorial(n) {
  if (n === 1) {
    return 1;
  }
  console.log("what is n", n);
  return n * recursionFactorial(n - 1);
}

console.log(recursionFactorial(5));
