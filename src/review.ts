interface IListNode {
  value: number;
  next?: IListNode;
}

function createLinkList(array: number[]) {
  const length = array.length;
  if (length === 0) return

  let curNode: IListNode = {
    value: array[length-1]
  }

  for (let i = length -2; i >=0; i--) {
    curNode = {
      value: array[i],
      next: curNode
    }
  }

  return curNode
}

function reverseLinkList (linkList: IListNode) {
  let preNode: IListNode,
      curNode: IListNode,
      nextNode: IListNode = linkList;

  
  // 终止条件： nextNode = null
  while(nextNode) {
    if (curNode && !preNode) {
      delete curNode.next
    }

    if (curNode && preNode) {
      curNode.next = preNode
    }

    preNode = curNode;
    curNode = nextNode;
    nextNode = nextNode.next;
  }
  curNode.next = preNode
  return curNode
}

const res = createLinkList([100,200,300,400,500])
const reverseNode = reverseLinkList(res)
console.log('reverseNode: ', reverseNode);
export default {}