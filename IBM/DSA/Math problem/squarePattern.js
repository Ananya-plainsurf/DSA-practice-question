// const squarePattern = (n) => {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//       row += `${j} `;
//     }
//     console.log(row);
//   }
// };
// squarePattern(5);
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// const squarePattern1 = (n) => {
//   let num = 1;
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//       row += `${num} `;
//       num++;
//     }
//     console.log(row);
//   }
// };
// squarePattern1(3);
// 1 2 3
// 4 5 6
// 7 8 9

// const squarePattern3 = (n) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//       row += `* `;
//     }
//     console.log(row);
//   }
// };
// squarePattern3(3);
// *
// * *
// * * *

// const squarePattern4 = (n) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = n - i; j > 0; j--) {
//       row += `* `;
//     }
//     console.log(row);
//   }
// };
// squarePattern4(3);
// * * *
// * *
// *

// const squarePattern4 = (n) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = n - i; j > 0; j--) {
//       row += `${j} `;
//     }
//     console.log(row);
//   }
// };
// squarePattern4(3);
// 3 2 1
// 2 1
// 1

// const squarePattern4 = (n) => {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i; j++) {
//       row += `  `;
//     }
//     for (let k = 0; k < n - i; k++) {
//       row += `${k} `;
//     }
//     console.log(row);
//   }
// };
// squarePattern4(3);
// 0 1 2
//   0 1
//     0

const squarePattern5 = (n) => {
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = 1; j < n - i - 1; j++) {
      row += `${j}  `;
    }
    //   for (let k = 0; k < n - i; k++) {
    //     row += `${k} `;
    //   }
    console.log(row);
  }
};
squarePattern5(3);
