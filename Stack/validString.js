/* 
Given an expression string s, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression.

Example: 

Input: s = “[()]{}{[()()]()}” 
Output: true
Explanation: All the brackets are well-formed


Input: s = “[(])” 
Output: false
Explanation: 1 and 4 brackets are not balanced because 
there is a closing ‘]’ before the closing ‘(‘
*/

const validString = (str) => {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(validString("[()]{}{[()()]()}"));
