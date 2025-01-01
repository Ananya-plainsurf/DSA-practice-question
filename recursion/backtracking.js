const subsetsRecursion = (nums) => {
  const result = [];
  const generateSubsets = (index, current) => {
    if (index === nums.length) {
      result.push([...current]); // Base case: add the subset to the result
      return;
    }

    // Exclude nums[index]
    generateSubsets(index + 1, current);
    // Include nums[index]
    // console.log("--------------for pop", { index, INC: index + 1, current });

    current.push(nums[index]);
    generateSubsets(index + 1, current);
    current.pop(); // Remove nums[index] to backtrack
  };
  generateSubsets(0, []);
  return result;
};

console.log(subsetsRecursion([1, 2, 3]));
console.log("-------------------");

function subsets(nums, i = 0, current = [], result = []) {
  if (i === nums.length) {
    return result.push([...current]);
  }

  subsets(nums, i + 1, current, result);

  current.push(nums[i]);
  subsets(nums, i + 1, current, result);

  //   backtrack
  current.pop();
  return result;
}

console.log(subsets([1, 2, 3]));
