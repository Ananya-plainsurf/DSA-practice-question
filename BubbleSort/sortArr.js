const sortArr = (arr) => {
  //   let n = arr.length;

  //   // Bubble sort: traverse the entire array n-1 times
  //   for (let i = 0; i < n - 1; i++) {
  //     // Inner loop for comparing adjacent elements
  //     for (let j = 0; j < n - 1 - i; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements
  //       }
  //     }
  //   }

  //   return arr;

  // selection sort
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minId = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minId]) {
        minId = j;
      }
    }
    if (minId !== i) {
      [arr[i], arr[minId]] = [arr[minId], arr[i]];
    }
  }
  return arr;
};

console.log(sortArr([29, 10, 14, 37, 14])); // Output: [10, 14, 14, 29, 37]
console.log(sortArr([5, 2, 3, 1])); // Output: [1, 2, 3, 5]
console.log(sortArr([5, 1, 1, 2, 0, 0])); // Output: [0, 0, 1, 1, 2, 5]
