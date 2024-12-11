/* unique element in array 
I?P: [1,2,3,4,3,2,1] => 4

*/

const uniqueElement = (a) => {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    if (obj[a[i]]) {
      obj[a[i]] += 1;
    } else {
      obj[a[i]] = 1;
    }
  }

  let unique = 0;
  Object.entries(obj).map((item) => {
    if (item[1] === 1) {
      unique = item[0];
    }
  });
  return unique;
};

console.log("uniqueElement", uniqueElement([1, 2, 3, 4, 3, 2, 1]));
