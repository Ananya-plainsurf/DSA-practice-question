const reverseAnArray = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
  return nums;
};
console.log(reverseAnArray([1, 2, 3, 4, 5, 6]));
