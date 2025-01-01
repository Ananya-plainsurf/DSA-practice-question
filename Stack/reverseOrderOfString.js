const reverseOrderOfString = (str) => {
  const stringArr = str.trim().split(" ");

  let newStr = "";
  for (let i = stringArr.length - 1; i >= 0; i--) {
    let curr = stringArr.pop();
    newStr += curr.length ? `${curr} ` : "";
  }
  return newStr;
};
console.log(reverseOrderOfString("the sky is blue"));
console.log(reverseOrderOfString(" Hello world "));
console.log(reverseOrderOfString("a good  example"));
