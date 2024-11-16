const maxSubArray = function (params) {
  let currentSum = params[0];
  let maxSum = params[0];

  for (let i = 1; i < params.length; i++) {
    currentSum = Math.max(params[i], currentSum + params[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
