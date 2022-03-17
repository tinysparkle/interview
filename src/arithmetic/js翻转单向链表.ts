interface ILinkListNode {
  value: number;
  next?: ILinkListNode;
}

/**
 * @description 数组创建链表
 * @parms arr 数组
*/
function createLinkList (arr: number[]): ILinkListNode {
  const length = arr.length;

  let curNode: ILinkListNode = {
    value: arr[length - 1]
  }

  if (length === 1) return curNode;

  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }

  return curNode;
}

/**
 * @description 翻转链表
 * @param linkListNode 链表对象
*/
function reverseLinkList (linkListNode: ILinkListNode): ILinkListNode {
  // 三个变量保证nextNode不丢失
  let preNode: ILinkListNode,
      curNode: ILinkListNode,
      nextNode: ILinkListNode = linkListNode;
      
  while(nextNode) {
    // 删除头元素的next
    if (curNode && !preNode) {
      delete curNode.next;
    }

    // 翻转指针
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

const linkList = createLinkList([100, 200, 300, 400, 500])
console.log('linkList: ', linkList);
const reverse_link_list = reverseLinkList(linkList)
console.log('reverse_link_list: ', reverse_link_list);
export default {}