const kadanesAlgo = (nums) => {
  let sum = 0;
  let maxSum = nums[0];
  const subStr = {
    start: 0,
    end: 0,
    temp: 0,
  };

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      subStr.start = subStr.temp;
      subStr.end = i;
      maxSum = sum;
    } else if (sum < 0) {
      subStr.temp = i + 1;
      sum = 0;
    }
  }
  console.log({ subStr });

  return { maxSum, subArry: nums.slice(subStr.start, subStr.end + 1) };
};
console.log(kadanesAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(kadanesAlgo([-2, -4]));
