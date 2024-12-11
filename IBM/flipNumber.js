/* 
a password string pwd, consists of binary characters (0s and 1s), A cyber
security expert is trying to determine the minimum number of changes required to make
the password secure. to do so it must be divided into substrings of non-overlapping, even length substrings. Each substring can only contain 1s or 0s, 
not a min. this helps to ensure that the password is strong and less vulnerable to 
hacking attacks.


FInd the minimum number of characters that must be flipped in the password string.
i.e changed from 0 to 1 or 1 to 0 allow the string to be divided as described.
*/

/* we need to flip the alternate number

In: 101011
o/p: 2  ---> [010111]

Ip: [100110]
o/p: 3  ---> [011001]

*/

const flipCount = (pwd) => {
  let count = 0;
  for (let i = 0; i < pwd.length - 1; i += 2) {
    if (pwd[i] !== pwd[i + 1]) {
      count++;
    }
  }
  return count;
};

console.log("flipcount", flipCount("10011101111101"));
