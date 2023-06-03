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
  contains(value) {
    let currentNode = this.head;
    while (
      currentNode !== null &&
      currentNode.value !== value
    ) {
      currentNode = currentNode.nextNode;
    }
    if (currentNode === null) {
      return false;
    }
    return true;
  }
  at(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of bounds");
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return currentNode;
  }
  find(value) {
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

  toString() {
    let currentNode = this.head;
    let result = "";
    while (currentNode !== null) {
      result += `(${currentNode.value}) --> `;
      currentNode = currentNode.nextNode;
    }
    return result + "NULL";
  }
  insertAt(value, index) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of bounds");
    }
    if (index === this.size()) {
      this.append(value);
      return;
    }
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;
    while (currentIndex !== index) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    newNode.nextNode = currentNode;
    prevNode.nextNode = newNode;
  }

  remove(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.head = this.head.nextNode;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;
    while (currentIndex !== index) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    prevNode.nextNode = currentNode.nextNode;
    if (prevNode.nextNode === null) {
      this.tail = prevNode;
    }
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
console.log(newList);
newList.append("third node");
// console.log(newList);
newList.append("fourth node");
// console.log(newList.head.nextNode);
newList.prepend("time");
console.log(newList.toString()); // "time --> First Node --> second node --> third node --> fourth node --> NULL"
console.log(newList.size()); // 5
console.log(newList.getHead().value); // "time"
console.log(newList.getTail().value); // "fourth node"
console.log(newList.contains("third node")); // true
console.log(newList.contains("fifth node")); // false
console.log(newList.at(2).value); // "second node"
console.log(newList.find("third node")); // 3
console.log(newList.find("fifth node")); // -1
newList.remove(2);
console.log(newList.toString()); // "time --> First Node --> third node --> fourth node --> NULL"
console.log(newList.size()); // 4
newList.insertAt("inserted node", 2);
console.log(newList.toString()); // "time --> First Node --> inserted node --> third node --> fourth node --> NULL"
console.log(newList.size()); // 5
