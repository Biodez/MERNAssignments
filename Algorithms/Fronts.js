class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  // constructor, other methods, removed for brevity
  constructor() {
    this.head = null;
  }
  addFront(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  removeFront() {
    if (this.head === null) {
      return this.head;
    }

    var valToRemove = this.head;
    this.head = valToRemove.next;
    valToRemove.next = null;
    return this.head;
  }

  front() {
    return this.head === null ? null : this.head.value;
  }
}
