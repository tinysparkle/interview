class Queue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  add (num: number) {
    this.stack1.push(num)
  }

  delete () {
    const stack1 = this.stack1;
    const stack2 = this.stack2;
    let res
    while(stack1.length) {
      const n = stack1.pop();
      if (n != null) {
        stack2.push(n)
      }
    }

    res = stack2.pop();

    while(stack2.length) {
      const n = stack2.pop();
      if (n != null) {
        stack1.push(n)
      }
    }

    return res
  }

  get length () {
    return this.stack1.length;
  }
}

const q = new Queue();

q.add(100)
q.add(200)
q.add(300)

console.log(q.length);
console.log(q.delete());
console.log(q.length);

