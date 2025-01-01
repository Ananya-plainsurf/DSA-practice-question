const findTarget = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
};
console.log(findTarget([-1, 0, 3, 4, 5, 6, 9, 12], 9));
console.log(findTarget([-1, 0, 3, 4, 5, 6, 9, 12], 4));
