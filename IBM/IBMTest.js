/* min no of flip to secure password change 1s to 0s / 0s to 1s */
// const minFlip = (pwd) => {
//   let count = 0;
//   for (let i = 0; i < pwd.length - 1; i += 2) {
//     if (pwd[i] !== pwd[i + 1]) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log("minflip", minFlip("100110"));

/* minimal number of moves to reduce string 

I/p: s= 'baabacaa';
o/p: 3
*/

// const minimalMoves = (str) => {
//   let obj = {};
//   let moves = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]] += 1;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   Object.values(obj).map((item) => (moves += Math.floor(item / 2)));
//   return moves;
// };

// console.log("minimalMoves", minimalMoves("baabacaa"));
// console.log("minimalMoves", minimalMoves("adabacaea"));
// TC: O(n) SC: O(K) //O(26) <<-- small letters

// const minMoves = (str) => {
//   let charSet = new Set();
//   let moves = 0;
//   for (const char of str) {
//     if (charSet.has(char)) {
//       moves++;
//       charSet.delete(char);
//     } else {
//       charSet.add(char);
//     }
//   }
//   return moves;
// };

// // Test cases
// console.log("minMoves", minMoves("baabacaa")); // Output: 3
// console.log("minMoves", minMoves("adabacaea")); // Output: 4

// TC: O(n) SC:O(k) => O(1)

/* count divisible triplets */
// const countDivisibleTriplets = (arr, d) => {
//   let count = 0;
//   const length = arr.length;
//   for (let i = 0; i < length - 2; i++) {
//     for (let j = i + 1; j < length - 1; j++) {
//       for (let k = j + 1; k < length; k++) {
//         if ((arr[i] + arr[j] + arr[k]) % d === 0) {
//           count++;
//         }
//       }
//     }
//   }
//   return count;
// };

// console.log(
//   "countDivisibleTriplets",
//   countDivisibleTriplets([3, 3, 4, 7, 8], 5)
// );

/* fizzBuzz if divided by 3%5 -> fizzBuzz
divided by 3 NOT 5 -> Fizz
divided  by 5 NOT 3 -> Buzz
else i */

// const fizzBuzz = (n, i = 1) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0 && i % 5 !== 0) {
//       console.log("Fizz");
//     } else if (i % 3 !== 0 && i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };
// fizzBuzz(15);
// recursion approach below
// const fizzBuzz = (n, i = 1) => {
//   if (i > n) {
//     return;
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("Fizz");
//   } else if (i % 3 !== 0 && i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
//   return fizzBuzz(n, ++i);
// };
// fizzBuzz(15);

/* transform array 
if odd add +3 if even -3 and this should happen n number of times */

// const transformArray = (arr, n) => {
//   //   let newArray = [...arr];
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       let isEven = Boolean(arr[j] % 2 === 0);
//       if (isEven) {
//         arr[j] -= 3;
//       } else {
//         arr[j] += 3;
//       }
//     }
//   }
//   return arr;
// };
// console.log("transformArray", transformArray([3, 4, 9], 3));

/* triangle type -

if 2 short side added together to be greater in length that the longest
side unit is a valid triangle
if 2 part are equal -> isosceles
if all parts are equal -> equilateral
if non are equal -> None of these
I/P: ['221','333','345','113']
O/p: ['isosceles','equilateral','none of these','none of these']
*/

// const triangleType = (arr) => {
//   const newTriangle = arr.map((item) => {
//     const triangle = item
//       .split("")
//       .map(Number)
//       .sort((a, b) => a - b);
//     if (triangle[0] + triangle[1] <= triangle[2]) {
//       return "None of these";
//     }
//     if (triangle[0] === triangle[1] && triangle[1] === triangle[2]) {
//       return "equilateral";
//     } else if (triangle[0] === triangle[1] || triangle[1] === triangle[2]) {
//       return "isosceles";
//     } else {
//       return "None of these";
//     }
//   });
//   return newTriangle;
// };
// console.log("triangleType", triangleType(["221", "333", "346", "113"]));
//  TC: O(n.log m) ->log m due to sorting SC: O(n)

// optimized solution
// const triangleType = (arr) => {
//   return arr.map((item) => {
//     const [a, b, c] = item.split("").map(Number);
//     if (a + b <= c || b + c <= a || c + a <= b) {
//       return "None of these";
//     }

//     if (a === b && b === c) {
//       return "equilateral";
//     } else if (a === b || b === c || c === a) {
//       return "isosceles";
//     } else {
//       return "None of these";
//     }
//   });
// };
// console.log("triangleType", triangleType(["221", "333", "346", "113"]));
// TC: O(n) SC: O(n)

/* 
given n request ids as an array of string, requests and an integer K
2. find the kth most resent request
3. report in the order of the most recent to least recent

eg: n-5; request=['item1','item2','item3','item1','item3'] k = 3;
O/P: ['item3','item1','item2']

*/

// const findRecentRequest = (arr, k) => {
//   const uniqueRequests = [];
//   const seen = new Set();

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!seen.has(arr[i])) {
//       seen.add(arr[i]);
//       uniqueRequests.push(arr[i]);
//     }
//   }
//   console.log({ uniqueRequests, seen });
//   return uniqueRequests.slice(0, k);
// };
// console.log(
//   "findRecentRequest",
//   findRecentRequest(["item1", "item2", "item3", "item1", "item3"], 3)
// );
// TC: O(n) SC: O(n)

// simple way but worse case

// const findRecentRequest = (arr, k) => {
//   const uniqueRequest = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!uniqueRequest.includes(arr[i])) {
//       // or  if (!uniqueRequest.includes(arr[i]) && uniqueRequest.length < k)
//       uniqueRequest.push(arr[i]);
//     }
//   }
//   return uniqueRequest.splice(0, k); // or uniqueRequest
// };
// console.log(
//   "findRecentRequest",
//   findRecentRequest(["item1", "item2", "item3", "item1", "item3"], 3)
// );
// console.log(
//   "findRecentRequest",
//   findRecentRequest(["item1", "item2", "item3", "item1", "item3"], 2)
// );

// TC: O(n^2) worse SC: O(u)

// const findRecentRequest = (arr, k) => {
//   const uniqueRequest = [];
//   const obj = {};
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (!obj[arr[i]] && uniqueRequest.length < k) {
//       obj[arr[i]] = obj[arr[i]];
//       // or  if (!uniqueRequest.includes(arr[i]) && uniqueRequest.length < k)
//       uniqueRequest.push(arr[i]);
//     }
//   }
//   return uniqueRequest; // or uniqueRequest
// };
// console.log(
//   "findRecentRequest",
//   findRecentRequest(["item1", "item2", "item3", "item1", "item3"], 3)
// );
// console.log(
//   "findRecentRequest",
//   findRecentRequest(["item1", "item2", "item3", "item1", "item3"], 2)
// );
//  TC: O(n) good SC: O(u+k) not good not bad

/* 
1. difference between two json 
2. given 2 json find the list of keys for which the value are different
3. if key is present in only 1 json it is not considered
eg: json1: {
'hello':'word',
'hi':'hello',
'you':'me'
}

json 2:{
'hello':'word',
'hi':'helloo',
'you':'me'
}
O?P: ['hi']
*/

// const jsonDiff = (json1, json2) => {
//   const diff = [];
//   Object.entries(json1).map((item) => {
//     const [key, value] = item;
//     // console.log({ key, value });
//     if (Boolean(json2[key]) && json2[key] !== value) {
//       diff.push(key);
//     }
//   });
//   return diff;
// };
// console.log(
//   "jsonDiff",
//   jsonDiff(
//     {
//       hello: "word",
//       hi: "hello",
//       you: "me",
//     },
//     {
//       hello: "word",
//       hi: "helloo",
//       you: "me",
//     }
//   )
// );
// console.log(
//   "jsonDiff",
//   jsonDiff(
//     {
//       hello: "word",
//       hi: "hello",
//       you: "me",
//     },
//     {
//       hello: "word",
//       hi: "helloo",
//       you: "meew",
//     }
//   )
// );

/* 

1. given a list of items and their correct price, compare the price to those entered
when each item was sold.
2. determine the number of errors in selling price

eg:
products = ['eggs','milk','cheese'];
productP = [2.89,3.29,5.79];
------------------------------------
soldProduct = ['eggs','eggs',"cheese","milk"];
soldPrice = [2.89,2.99,5.97,3.29];
*/

// const sellingError = (p, pp, ps, sp) => {
//   const actualProduct = {};
//   let count = 0;
//   for (let i = 0; i < p.length; i++) {
//     actualProduct[p[i]] = pp[i];
//   }
//   //   console.log({ actualProduct });

//   for (let i = 0; i < ps.length; i++) {
//     if (actualProduct[ps[i]] !== sp[i]) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(
//   "sellingError",
//   sellingError(
//     ["eggs", "milk", "cheese"],
//     [2.89, 3.29, 5.79],
//     ["eggs", "eggs", "cheese", "milk"],
//     [2.89, 2.99, 5.97, 3.29]
//   )
// );
// console.log(
//   "sellingError",
//   sellingError(
//     ["eggs", "milk", "cheese"],
//     [2.89, 3.29, 5.79],
//     ["eggs", "eggs", "cheese", "milk"],
//     [2.89, 2.99, 5.97, 3.19]
//   )
// );

/* 
1. for each element in array counter is set to 0, The element is compared to each element
to its left.
2. if element to its left is greater absolute difference is (-) from the counter
3. if the element to the left is less, the absolute difference is (+) to the counter
4. these values should be stored in an array and returned.

eg: 
n=3 arr = [2,4,3] 
o/p: [0,2,0]


*/

const diffCounter = (a) => {
  const diffList = [];
  for (let i = 0; i < a.length; i++) {
    let count = 0;

    for (let j = i - 1; j >= 0; j--) {
      if (a[j] > a[i]) {
        count -= Math.abs(a[i] - a[j]);
      } else if (a[j] < a[i]) {
        count += Math.abs(a[i] - a[j]);
      }
    }
    diffList.push(count);
  }
  return diffList;
};
console.log("diffCounter", diffCounter([2, 4, 3]));
