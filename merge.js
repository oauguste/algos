class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.nextNode = newNode;
    this.tail = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }
  size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      size++;
      currentNode = currentNode.nextNode;
    }
    return size;
  }
  getHead() {
    return this.head ? this.head : null;
  }
  getTail() {
    return this.tail ? this.tail : null;
  }
  getIndex(value) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      index++;
      currentNode = currentNode.nextNode;
    }
    return -1;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = this.tail = null;
      return value;
    }

    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.nextNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    const value = currentNode.value;
    prevNode.nextNode = null;
    this.tail = prevNode;
    return value;
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
const newList = new LinkedList();

newList.append("First Node");

// console.log(newList);
newList.append("second node");
// console.log(newList);
newList.append("third node");
// console.log(newList);
newList.append("fourth node");
// console.log(newList.head.nextNode);
newList.prepend("time");
console.log(newList);
console.log(newList.size());
console.log(newList.getHead());
console.log(newList.getIndex("da node"));
