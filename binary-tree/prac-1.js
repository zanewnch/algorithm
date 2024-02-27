class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTreeTraverse {
  preOrder(node) {
    // 假設此時的node 剛好是leaf, 所以他的左右子葉都會是null
    // 所以當 this.preOrder(node.left); 其實就是把null 丟進function
    // 所以才會是檢驗node === null, 而不是node.value === null
    if (node === null) {
      return;
    }

    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrder(node){
    // left-root-right
    if (node === null){
        return;
    }

    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  postOrder(node){
    // left-right-root
    if(node===null){
        return;
    }
    this.postOrder(node.left)
    this.postOrder(node.right)
    console.log(node.value)
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

const binaryTreeTraverse = new BinaryTreeTraverse();
binaryTreeTraverse.preOrder(root);
