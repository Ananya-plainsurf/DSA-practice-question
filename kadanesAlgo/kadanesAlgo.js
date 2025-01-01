/* 
find maximum number 
I/P: [-2,1,-3,4,-1,2,1,-5,4]
O/p: 6

*/

const kadanesAlgo = (arr) => {
  let sum = 0;
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
};
console.log(kadanesAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(kadanesAlgo([5, 4, -1, 7, 8]));
