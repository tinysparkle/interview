/**
 * @param arr 数组 -> 链表
*/

interface ILinkListNode {
  value: number
  next?: ILinkListNode
}

function createLinkList (arr: number[]): ILinkListNode {
  const length = arr.length;

  // arr = [100, 200, 300, 400]
  // curNode = { value: 400 }
  // 倒数第二个 = { value: 300, next: curNode }
  let curNode: ILinkListNode = {
    value: arr[length - 1]
  }

  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }

  return curNode
}
const arr = [100, 200, 300, 400, 500]
console.log(createLinkList(arr));

export {}


