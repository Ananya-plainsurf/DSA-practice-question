class linkList {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }

  append(value) {
    const node = { value, key: null };

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return;
    }

    let popValue = this.tail;

    let curr = this.head;
    while (curr.next !== this.tail) {
      curr = curr.next;
    }

    curr.next = undefined;
    this.tail = curr;
    this.length--;
    return popValue.value;
  }

  prepend(value) {
    const node = { value, key: null };

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      let curr = this.head;

      node.next = curr;
      this.head = node;
      this.length++;
    }
  }

  reverse() {
    if (this.length === 0) {
      return;
    }

    let prev = null;
    let curr = this.head;
    let next = null;

    while (curr) {
      next = curr.next;
      console.log({ next });

      curr.next = prev;
      console.log({ curr });

      prev = curr;
      console.log({ prev });

      curr = next;
      console.log({ curr });
    }

    this.tail = this.head;
    this.head = prev;
  }

  toArray() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const list = new linkList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.reverse();

console.log("List as Array:", list.toArray()); // [1, 2, 3, 4, 5]
console.log("List Length:", list.length); // 5
console.log("Head:", list.head.value); // 1
console.log("Tail:", list.tail.value); // 5
