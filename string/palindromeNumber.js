/* 
palindrom number

I/p: x= 121 => o/p = true
I/p: x= 10 => O/p = false
*/

const palindrom = (x) => {
  const newStr = x.toString();
  let left = 0;
  let right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(palindrom(121));
console.log(palindrom(10));
