export interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

export const TREE: ITreeNode = {
  value:5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}

/**
 * @description 前序遍历
*/
function preOrderTraverse (node: ITreeNode) {
  if (node == null) return
  console.log(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}

/**
 * @description 中序遍历
*/
function inOrderTraverse (node: ITreeNode) {
  if (node == null) return
  inOrderTraverse(node.left)
  console.log(node.value)
  inOrderTraverse(node.right)
}

/**
 * @description 后序遍历
*/
function postOrderTraverse (node: ITreeNode) {
  if (node == null) return
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  console.log(node.value)
}

// postOrderTraverse(TREE)
