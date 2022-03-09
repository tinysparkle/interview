import { ITreeNode, TREE } from './二叉搜索树三种遍历'

/**
 * @description 中序遍历
*/
const arr: number[] = []
function inOrderTraverse (node: ITreeNode) {
  if (node == null) return
  inOrderTraverse(node.left)
  // console.log(node.value)
  arr.push(node.value)
  inOrderTraverse(node.right)
}

function findKvalue (bst: ITreeNode, k: number) {
  inOrderTraverse(bst);
  return arr[k - 1]
}

console.log(findKvalue(TREE, 3))