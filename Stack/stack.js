/* 
what is stack? 
-> stack is Last in first out 
|  |
|19|-> this was last in so first out 
|10|
|20|

write a problem on stack 
were it should leverage the functionality like 
1. push
2. pop
3. peek -> can check the latest value in stack
4. size -> should get the length of stack
5. isEmpty -> is the stack empty
*/

class Stack {
  constructor() {
    this.Stack = [];
  }

  push(element) {
    return this.Stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.Stack.pop();
  }

  isEmpty() {
    return Boolean(this.size() === 0);
  }

  size() {
    return this.Stack.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.Stack[this.Stack.length - 1];
  }

  mapStack() {
    return this.Stack;
  }
}

const stack = new Stack();

console.log(stack.push(20));
console.log(stack.push(19));
console.log(stack.push(15));
console.log(stack.push(200));
console.log(stack.peek());
console.log(stack.mapStack());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.peek());
