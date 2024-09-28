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
}
