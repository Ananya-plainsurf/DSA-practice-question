// const arithmeticProgression = (a, d, n) => {
//   const list = [];
//   for (let i = 0; i < n; i++) {
//     if (i < 1) {
//       list.push(a);
//     } else {
//       list.push(a + i * d);
//     }
//   }
//   console.log({ list });
//   return list[n - 1];
// };

// effective approach
const arithmeticProgression = (a, b, n) => {
  return a + (n - 1) * b;
};
console.log(arithmeticProgression(5, 2, 10));
