//  question for Array - second largest numbers
// given an array Arr of size N, print second largedt
// distinct element from an array

// Input: [12,35,1,10,34,1] ->> o/p: 34
// Input: [10,5,10] ->> o/p: 5

const secondLargestNo = (numbers) => {
  const uniqueArr = Array.from(new Set(numbers)); // O(n)
  if (uniqueArr.length < 1) {
    return;
  }
  const newListOfArray = numbers.sort((a, b) => a - b); // O(nlogn)

  return newListOfArray[newListOfArray.length - 2];
};

// console.log(secondLargestNo([11, 2, 51, 65, 51, 61]));
// this algo has O(logn) time complexity
// [11, 2, 51, 65, 51, 61]
// how it works
// i = 0 -> 11
// larg = 11>-1 -> 11
// secondLargest = -1
// --------------------
// i=1 -> 2
// larg= 2>11 -> 11 will go in else
// secondLargest = 2 !== 11 && 2> secondLargest(-1) -> 2
// --------------------
// i=2 ->51
// largest = 51 > 11 -> 51
// secondLargest= 2
// ----------------------
// i=3 -> 65
// largest = 65 >51 = 65
// secondLargest = 2
// -----------------------
// i=4 -> 51
// largest = 51 > 65 -> 65
// secondLargest = 51 !== 65 && 51 >2 -> 51
// -----------------------------------
// i=5 -> 61
// largest = 61 > 65 -> 65
// secondLargest = 61 !== 65 && 51> 51 -> 61

const secondLargest = (numbers) => {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] !== largest && numbers[i] > secondLargest) {
      secondLargest = numbers[i];
    }
  }
  return secondLargest;
};
console.log(secondLargest([10, 5, 10, 11, 34, 52, 52, 65, 13]));
// time complexity O(n) space complexity O(1)
