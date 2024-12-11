const rotateArray = (nums, k) => {
  const size = nums.length - 1;
  reverseAnArray(nums, 0, size);
  if (k > size) {
    k %= 2;
  }
  reverseAnArray(nums, k, size);
  return nums;
};

const reverseAnArray = (nums, left, right) => {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
  return nums;
};
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
