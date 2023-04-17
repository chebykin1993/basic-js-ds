const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
 constructor() {
   this.data = null
   this.left = null
   this.right = null
 }
  root() {
     if (this.data != null) {return this}
    return this.data
  }

  add(data) {

    if (this.data == null) {
      this.data = data
    }
     else if (data < this.data) {
        if (this.left == null) {
          this.left = new BinarySearchTree()
            this.left.data = data
        }
        else {
          this.left.add(data)
        }
      }
      else if (data > this.data) {
        if (this.right == null) {
          this.right = new BinarySearchTree()
            this.right.data = data
        }
        else {
            this.right.add(data)
        }
      }
  }
  has(data) {

  }

  find(data) {
    if (this.data === data) {return this}

        if (this.right != null) {
            if (this.right.data === data) {
        return this.right
    } else {
                this.right.find(data)
        }
    }


        if (this.left != null) {
            if (this.left.data === data) {
                return this.left
            } else {
                this.left.find(data)
            }
        }
    return null
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
