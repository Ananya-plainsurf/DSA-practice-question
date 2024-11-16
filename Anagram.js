// const anangram = function (s, t) {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
//   console.log(s, t);
//   return Boolean(s === t);
// };

// console.log(anangram("rat", "cat"));

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sObject = {};
  let tObject = {};

  for (let i = 0; i < s.length; i++) {
    sObject[s[i]] = (sObject[s[i]] || 0) + 1;
    tObject[t[i]] = (tObject[t[i]] || 0) + 1;
  }
  console.log({ sObject, tObject });
  for (const key in sObject) {
    if (sObject[key] !== tObject[key]) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
