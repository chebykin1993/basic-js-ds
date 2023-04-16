const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */



class Queue {

  constructor() {
    this.value = null;
    this.next = null;

}

  getUnderlyingList() {
    return this
    // remove line with error and write your code here
  }

  enqueue(val) {

    let obj = new Queue()
      if (this.value !== null) {
         if (this.next !== null) {
          this.next.enqueue(val)
         }
         else {this.next = obj; obj.value = val}
      }
      else {this.value = val}
  }

  dequeue() {
      let current = this.value
      this.value = this.next.value
      this.next = this.next.next
    return current
  }
}

module.exports = {
  Queue
};
