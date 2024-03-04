class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function preorderTraversal(node) {
  if (node == null) {
    return;
  }

  console.log(node.value); // Visit the root node
  preorderTraversal(node.left); // Then traverse the left subtree
  preorderTraversal(node.right); // Finally, traverse the right subtree
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

preorderTraversal(root);
