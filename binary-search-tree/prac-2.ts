// @ts-ignore
class TreeNode {
  public val: number;
  public right: TreeNode | null;
  public left: TreeNode | null;
  constructor(
    val: number,
    right: TreeNode | null = null,
    left: TreeNode | null = null
  ) {
    this.val = val;
    this.right = right;
    this.left = left;
  }
}

// @ts-ignore
class BinarySearchTree {
  public root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  public insert = (val): void => {
    if (this.root === null) {
      this.root = new TreeNode(val);
      return;
    }

    this.insertNode(this.root, val);
  };

  public insertNode = (root: TreeNode | null, val: number): TreeNode => {
    if (root === null) {
      //   root = new TreeNode(val);
      //   return root;
      return new TreeNode(val);
    }

    // !當recursion 到root = null 的時候 會直接 return new TreeNode(val)
    // ! 所以應該用root.right 來接收new TreeNode, 這樣也剛好把樹的連結做起來
    if (val > root.val) {
      root.right = this.insertNode(root.right, val);
    }

    if (val < root.val) {
      root.left = this.insertNode(root.left, val);
    }

    return root;
  };
}
