/* 
the students are provided with a string word that consists of lowercase.
English letters. in one move they can choose any index i, and let the chracter at tha index be c. 
then the first occurance of c to the left of i and thefirst occurance of c to the right of i are deleted 


IP: "baabacaa" -> o/p = 'baacaa' 
*/

const minMove = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  //   console.log(obj);
  let moves = 0;
  Object.values(obj).map((item) => (moves += Math.floor(item / 2)));
  return moves;
};

console.log("minMove", minMove("baabacaa")); // Output: 3
console.log("minMove", minMove("abcabcabc")); // Output: 3
console.log("minMove", minMove("aaa")); // Output: 1
console.log("minMove", minMove("abcd")); // Output: 0
