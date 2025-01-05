const majorityElement = (nums) => {
  if (nums.length < 1) return nums[0] ?? 0;
  const obj = {};
  nums.map((item) => {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  });
  let max = { key: 0, value: 0 };
  Object.entries(obj).map((key, value) => {
    if (key[1] > max.value) {
      max = { key: key[0], value: key[1] };
    }
  });

  return Number(max.key);
};

module.exports = majorityElement;
console.log(majorityElement([3, 2, 3])); //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2

/* TC: O(n) / SC: O(n)
if all element in the array is unique -> k = n
there for O(n+k) = O(n)
The function you've written is not performing sorting; instead, it uses a frequency counting approach to find the majority element in the array. Sorting generally refers to rearranging elements in a specific order (e.g., ascending or descending), but here, you're counting the frequency of elements to determine the majority element.

Algo Type: HashMap - basic algo
*/
