const containsDuplicate = (nums) => {
  const obj = new Set();
  let result = false;

  nums.map((item) => {
    if (obj.has(item)) {
      return (result = true);
    } else {
      obj.add(item);
    }
  });
  return result;
};

console.log(containsDuplicate([1, 2, 3, 1])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
module.exports = containsDuplicate;

/* TC: O(n) SC:O(n) */
