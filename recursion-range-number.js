/* 
MOST ASKED INTERVIEW QUESTION -2 
Find the range of number 
eg: (0,5) -->> O/p: [0,1,2,3,4,5]
*/

function recursionRange(start, end) {
  if (start === end) {
    return [end];
  }
  //   let num = [];
  const number = recursionRange(start + 1, end);
  console.log("what is number", number);
  //   number.push(start + 1);
  return [start, ...number];
}

console.log(recursionRange(-11, 5));
