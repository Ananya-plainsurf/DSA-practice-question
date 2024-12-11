/* 
find unique array elements  */

// this will have number of counts
// const uniqueElement = (arr) => {
//   const num = new Set();
//   let count = 0;
//   console.log({ num, count });
//   for (const char of arr) {
//     if (num.has(char)) {
//       num.delete(char);
//     } else {
//       count++;
//       num.add(char);
//     }
//   }
//   return count;
// };

// console.log(uniqueElement([1, 1, 2]));

/* unique array */

const uniqueElement = (arr) => {
  const num = {};
  for (const char of arr) {
    if (num[char]) {
      num[char] += 1;
    } else {
      num[char] = 1;
    }
  }

  return Object.keys(num).map((item) => Number(item));
};

console.log(uniqueElement([1, 1, 2]));
console.log(uniqueElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
