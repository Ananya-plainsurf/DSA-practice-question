const removeElement = (arr, val) => {
  let k = 0; // 1st pointer
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[k] = arr[i];
      k++;
    }
  }
  return k;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

console.log(removeElement(nums, val));
console.log({ nums });
