/* multiply all numbers */

// const multiply = (numArr) => {
//   let sum = 1;
//   for (let i = 0; i < numArr.length; i++) {
//     sum *= numArr[i];
//   }
//   return sum;
// };
// console.log(multiply([1, 2, 3, 4]));

/* this is Recursion: 
Recursion function is a function that calls itself again
and again until the base condition is met or it terminates
*/
const multiply = (nums) => {
  if (nums.length <= 0) {
    return 1;
  }
  return nums[nums.length - 1] * multiply(nums.splice(0, nums.length - 1));
};

console.log(multiply([1, 2, 3, 4]));
