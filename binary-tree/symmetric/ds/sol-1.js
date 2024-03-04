class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function isMirror(tree1, tree2) {
    if (tree1 == null && tree2 == null) {
      return true;
    }
  
    if (tree1 == null || tree2 == null) {
      return false;
    }
  
    return (tree1.value == tree2.value)
      && isMirror(tree1.left, tree2.right)
      && isMirror(tree1.right, tree2.left);
  }
  
  function isSymmetric(root) {
    return isMirror(root, root);
  }
  
  // Test data
  let root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(3);
  
  console.log(isSymmetric(root)); // Output: true
  
  let root2 = new TreeNode(1);
  root2.left = new TreeNode(2);
  root2.right = new TreeNode(2);
  root2.left.right = new TreeNode(3);
  root2.right.right = new TreeNode(3);
  
  console.log(isSymmetric(root2)); // Output: false