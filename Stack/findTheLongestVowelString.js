const findTheLongestVowelString = (s) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let str = s.split("");
  let stack = [];
  let newStr = "";

  for (let char of str) {
    if (vowels.has(char)) {
      stack.push(char);
    } else if (!vowels.has(char) && stack.length) {
      console.log(stack);

      if (stack.length % 2 !== 0) {
        console.log("in here");

        newStr += char;
        stack = [];
      } else if (stack.length % 2 === 0) {
        console.log("i----e");

        newStr += `${[...stack] + char}`;
      }
    }
  }

  return newStr;
};

console.log(findTheLongestVowelString("eleetminicoworoep"));
