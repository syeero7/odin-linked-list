class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

export default class LinkedList {
  #list;

  constructor() {
    this.#list = null;
  }

  append(value) {
    const node = new Node();
    node.value = value;

    if (!this.#list) {
      this.#list = node;
      return;
    }

    let currentNode = this.#list;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = node;
  }

  prepend(value) {
    const node = new Node();

    node.value = value;
    node.nextNode = this.#list;
    this.#list = node;
  }

  get size() {
    let count = 0;
    let currentNode = this.#list;

    while (currentNode) {
      currentNode = currentNode.nextNode;
      count++;
    }

    return count;
  }

  get head() {
    return this.#list;
  }

  get tail() {
    let currentNode = this.#list;

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    let currentNode = this.#list;
    let count = 0;

    while (currentNode.nextNode) {
      if (count === index) break;

      currentNode = currentNode.nextNode;
      count++;
    }

    return currentNode;
  }

  pop() {
    if (this.#list && !this.#list.nextNode) {
      this.#list = null;
      return;
    }

    let previousNode = null;
    let currentNode = this.#list;

    while (currentNode) {
      if (!currentNode.nextNode) {
        previousNode.nextNode = null;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
  }

  contains(value) {
    let currentNode = this.#list;
    if (!currentNode) return false;

    do {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    } while (currentNode);

    return false;
  }

  find(value) {
    let count = 0;
    let currentNode = this.#list;
    if (!currentNode) return null;

    do {
      if (currentNode.value === value) return count;
      currentNode = currentNode.nextNode;
      count++;
    } while (currentNode);

    return null;
  }

  toString() {
    let string = "";
    let currentNode = this.#list;

    do {
      if (currentNode) {
        string += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }

      if (!currentNode) string += "null";
    } while (currentNode);

    return string;
  }

  insertAt(value, index) {
    if (index === 0) return this.prepend(value);

    let count = 0;
    let previousNode = null;
    let currentNode = this.#list;

    while (currentNode) {
      if (count === index) {
        const node = new Node();

        node.value = value;
        node.nextNode = currentNode;
        previousNode.nextNode = node;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }
  }

  removeAt(index) {
    if (index === 0 && this.#list) {
      this.#list = this.#list.nextNode;
      return;
    }

    let count = 0;
    let previousNode = null;
    let currentNode = this.#list;

    while (currentNode) {
      if (count === index) {
        previousNode.nextNode = currentNode.nextNode;
        return;
      }

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      count++;
    }
  }
}
