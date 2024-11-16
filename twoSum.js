// // tow sum
// Given an array of intergers nums and an integer EventTarget,
// return indices of the two numbers such that they add up to EventTarget.apply
// Input nums = [2,7,11,15], target = 9;
// output: [0,1] ( because nums[0] + nums[1] = 9, we return [0,1])
// Input: nums = [3,2,4], target = 6
// output: [1,2]

// const twoSum = function (nums, target) {
//   if (!Array.isArray(nums) || nums.length === 0) {
//     return;
//   }
//   let arr = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let sum = nums[i] + nums[j];
//       if (sum === target) return (arr = [i, j]);
//     }
//   }
//   return arr;
// };

// console.log(twoSum([1, 2, 3, 4], 6)); // Output: [0, 3]

// another solution is putting data into the object
// so

// let obj = {
//     "1":0, // 6-1 = 5  // not present i++,
//     "2":1 , // 6-2 = 4 // present
//     "3":2, // 6-3 = 3 // present but only once so cant count
//     "4":3 // 6-4 = 2 present [obj[sum],i]
// }

// 69% to 89%
const twoSum = function (nums, target) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return;
  }
  let obj = {};
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    if (obj[sum] >= 0) {
      return [obj[sum], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
console.log(twoSum([1, 2, 3, 4], 6));
