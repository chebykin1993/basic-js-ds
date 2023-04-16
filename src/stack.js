const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.data = []
  }
  push(elem) {
    this.data.unshift(elem)
  }

  pop() {
    let curr = this.data[0]
    this.data.splice(0, 1)
    return curr
  }

  peek() {
    return this.data[0]
  }
}

module.exports = {
  Stack
};
