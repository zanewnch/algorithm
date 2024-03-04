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

//   @ts-ignore
class BinarySearchTree {
  public root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  insert = (val: number): void => {
    if (this.root === null) {
      this.root = new TreeNode(val);
      return;
    }
    this.insertNode(this.root, val);
    return;
  };

  // 如果寫成higher-order-function
  // 那user 還是需要 type this.root to be param, 所以不要寫成higher-order-function
  insertNode = (root: TreeNode | null, val: number): TreeNode => {
    if (root === null) {
      return new TreeNode(val);
    }

    if (val > root.val) {
      root.right = this.insertNode(root.right, val);
    } else if (val < root.val) {
      root.left = this.insertNode(root.left, val);
    } else {
      // val === root.val
      return root;
    }

    return new TreeNode(val);
  };

  get = (val: number): TreeNode | null => {
    if (this.root === null) return null;
    return this.getNode(this.root, val);
  };

  getNode = (root: TreeNode | null, val: number): TreeNode | null => {
    if (root === null) {
      return null;
    } else {
      if (val > root.val) {
        return this.getNode(root.right, val);
      } else if (val < root.val) {
        return this.getNode(root.left, val);
      } else {
        // val === root.val
        return root;
      }
    }
  };

  public getMin = (root: TreeNode): TreeNode | null => {
    /*
    find min node
    keep recursion with left node
    */

    return this.getMinNode(root);
  };

  getMinNode(root: TreeNode | null): TreeNode | null {
    if (root === null) {
      return null;
    }

    let current: TreeNode | null = root;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  /*
  当 temp 为 null 时，您应该返回 null，而不是返回 result。因为此时没有找到要删除的节点，因此无需进行任何操作，直接返回 null 即可。

在处理要删除的节点时，您需要修改其父节点的指针，以正确地维护树的结构。当前的实现中，您只是修改了 temp 变量本身，但未修改其父节点的指针。

在找到替换节点 replaceNode 后，您应该将替换节点的值赋给要删除的节点，并递归删除替换节点，而不是将 temp 直接指向替换节点。
   */
  public remove = (val: number): TreeNode | null => {
    let temp: TreeNode | null = this.get(val);
    let result = temp;
    if (temp !== null) {
      if (temp.left === null && temp.right === null) {
        temp = null;
      } else if (temp.left === null) {
        temp = temp.right;
      } else if (temp.right === null) {
        temp = temp.left;
      } else if (temp.left !== null && temp.right !== null) {
        let replaceNode = this.getMin(temp.right);
        temp = replaceNode;
      }
    } else {
      return null;
    }

    return result;
  };
}
