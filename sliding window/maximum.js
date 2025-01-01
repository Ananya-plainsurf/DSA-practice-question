/* 

I/p: [1,3,-1,-3,5,3,6,7] k=3
o/p: [3,3,5,5,6,7]
*/

// const maximum = (num, k) => {
//   const result = [];
//   const n = num.length;

//   for (let i = 0; i <= n - k; i++) {
//     // O(n)
//     let max = 0;
//     for (let j = 0; j < k; j++) {
//       if (max < num[i + j]) {
//         max = num[i + j];
//       }
//     }
//     result.push(max);
//   }
//   return result;
// };

const maximum = (num, k) => {
  const result = [];
  const deque = [];

  left = 0;

  for (let i = 0; i < num.length; i++) {
    while (deque.length && num[deque[deque.length - 1]] < num[i]) {
      deque.pop();
    }

    deque.push(i);

    if (deque[0] < left) {
      deque.shift();
    }

    if (i + 1 >= k) {
      result.push(num[deque[0]]);
      left++;
    }
  }

  return result;
};

// O(n)
console.log(maximum([1, 3, -1, -3, 5, 3, 6, 7], 3));
