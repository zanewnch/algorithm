class TreeNode {
  constructor(left, value, right) {
    this.left = left;
    this.value = value;
    this.right = right;
  }
}

class BinaryTree {
  constructor(value) {
    this.root = new TreeNode(null, value, null);
  }
 // !有bug 沒有順利run出來 需要改
  preOrder(treeNode) {
    // root-left-right

    if (treeNode === null) {
      return;
    }
    console.log(treeNode.value);
    this.preOrder(treeNode.left);
    this.preOrder(treeNode.right);
  }

  inOrder(treeNode) {
    // left-root-right
    if (treeNode.value === null) {
      return;
    }

    this.inOrder(treeNode.left);
    console.log(treeNode.value);
    this.inOrder(treeNode.right);
  }

  postOrder(treeNode) {
    // left-right-root

    if (treeNode.value === null) {
      return;
    }

    this.postOrder(treeNode.left);
    this.postOrder(treeNode.right);
    console.log(treeNode.value);
  }
}

const result = new BinaryTree(
    new TreeNode(new TreeNode(null,4,null),2,null),
     1,
     new TreeNode(new TreeNode(null,5,null),3,new TreeNode(null,6,null)));
result.preOrder(result.root);
