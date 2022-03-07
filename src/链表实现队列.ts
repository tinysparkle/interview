interface IListNode {
  value: number;
  next: IListNode | null
}

/**
 * @description 从tail入，head出
*/
class MyQueue {
  private head: IListNode = null;
  private tail: IListNode = null;
  private len: number = 0;

  add (num: number) {
    const newNode: IListNode = {
      value: num,
      next: null
    }

    // 头指向第一个
    if (this.head === null) {
      this.head = newNode
    }

    if (this.tail) {
      const tailNode = this.tail;
      tailNode.next = newNode;
    }

    // 尾部始终指向最后一个
    this.tail = newNode
    this.len++
  }

  delete (): number | null {
    if (this.head === null) return null;
    if (this.len === 0) return null;

    const headNode = this.head

    const value = headNode.value;

    this.head = headNode.next;
    headNode.next = null;
    this.len--
    return value
  }

  get length (): number {
    return this.len
  }
}

const q = new MyQueue()

q.add(100)
q.add(200)
q.add(300)
console.log('q.delete(): ', q.delete());
console.log('q.delete(): ', q.delete());
console.log('q.delete(): ', q.delete());


export default {}