// function totalHammingDist(nums) {
//   let newList = [];
//   let maxLength = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let decimal = nums[i].toString(2);
//     newList.push(decimal);
//     maxLength = decimal.length > maxLength ? decimal.length : maxLength;
//   }
//   for (let i = 0; i < newList.length; i++) {
//     let item = newList[i];
//     let remaining = maxLength - item.length;
//     if (remaining !== 0) {
//       for (let j = 0; j <= remaining - 1; j++) {
//         item = "0" + item;
//       }
//       newList[i] = item;
//     }
//   }
//   let sum = 0;
//   for (let i = 0; i <= newList.length - 2; i++) {
//     for (let j = i + 1; j < newList.length; j++) {
//       let left = newList[i];
//       let right = newList[j];
//       for (let k = 0; k < left.length; k++) {
//         if (left[k] !== right[k]) {
//           sum++;
//         }
//       }
//     }
//   }
//   return sum;
// }

// console.log(totalHammingDist([4, 14, 2])); //6
// console.log(totalHammingDist([4, 14, 4])); //4

// Example Usage
function totalHammingDist(nums) {
  let total = 0;
  const n = nums.length;

  // Iterate over each bit position (0 to 31 for 32-bit integers)
  for (let i = 0; i < 32; i++) {
    let countOnes = 0;

    // Count how many numbers have a 1 at bit position i
    for (let num of nums) {
      countOnes += (num >> i) & 1; // Check if the i-th bit is set
    }

    // Calculate contribution to the total Hamming distance
    total += countOnes * (n - countOnes);
  }

  return total;
}

// Example Usage
console.log(totalHammingDist([4, 14, 2])); // Output: 6
console.log(totalHammingDist([4, 14, 4])); // Output: 4
console.log(
  totalHammingDist([
    411914430, 351525660, 364254723, 700735511, 254391807, 716137650, 627125762,
    45921036, 641201357, 391245031, 853287481, 306898501,
  ])
);
console.log(
  totalHammingDist([411914430, 351525660, 364254723, 700735511, 254391807])
);
