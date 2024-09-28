class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  // returns the total number of nodes in the list
  size() {
    let count = 0;
    let current = this.head;

    while (current !== null) {
      count += 1;
      current = current.nextNode;
    }

    return count;
  }

  // returns the first node in the list
  head() {
    return this.head;
  }

  // tail returns the last node in the list
  tail() {
    let current = this.head;

    if (current === null) {
      return null;
    }

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  // at(index) returns the node at the given index
  at(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    let current = this.head;
    let steps = 0;

    while (steps < index) {
      current = current.nextNode;
      steps++;
    }

    return current;
  }

  // pop removes the last element from the list
  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.head.nextNode === null) {
      const removedNode = this.head;
      this.head = null;
      return removedNode;
    }

    let current = this.head;

    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    const removedNode = current.nextNode;
    current.nextNode = null;
    return removedNode;
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  // find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let current = this.head;
    let steps = 0;

    while (current !== null) {
      if (current.value === value) {
        return steps;
      }
      steps++;
      current = current.nextNode;
    }

    return null;
  }

  /*
  toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
  The format should be: ( value ) -> ( value ) -> ( value ) -> null
  */

  toString() {
    let current = this.head;
    let result = "";

    while (current !== null) {
      result += `(${current.value})`;
      current = current.nextNode;
      if (current !== null) {
        result += " -> ";
      }
    }

    result += " -> null";
    return result;
  }

  // Extra credit

  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      return null;
    }

    let newNode = new Node(value);

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let current = this.head;
    let steps = 0;

    while (steps < index - 1) {
      current = current.nextNode;
      steps++;
    }

    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }

  // removeAt(index) that removes the node at the given index.
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.nextNode;
      return removedNode;
    }

    let current = this.head;
    let steps = 0;

    while (steps < index - 1) {
      current = current.nextNode;
      steps++;
    }

    const removedNode = current.nextNode;
    current.nextNode = removedNode.nextNode;

    return removedNode;
  }
}

// Testing
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
