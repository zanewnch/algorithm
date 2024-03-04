// @ts-ignore
class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(val: number, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// @ts-ignore
class BinarySearchTree {
  public root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  public insert = (val: number): TreeNode | null => {
    if (this.root === null) {
      this.root = new TreeNode(val);
      return this.root;
    } else {
      return this.insertNode(this.root, val);
    }
  };

  // insert 有改data , 所以要用node.left or node.right, then if condition true, return the new Node;
  private insertNode = (node: TreeNode | null, val): TreeNode | null => {
    if (node === null) {
      return new TreeNode(val);
    } else {
      if (val > node.val) {
        node.right = this.insertNode(node.right, val);
      } else if (val < node.val) {
        node.left = this.insertNode(node.left, val);
      } else {
        return null;
      }
    }
    return node;
  };

  public get = (val: number): TreeNode | null => {
    return this.getNode(this.root, val);
  };

  // get 要直接return
  private getNode = (node: TreeNode | null, val: number): TreeNode | null => {
    if (node === null) {
      return null;
    } else {
      if (val > node.val) {
        return this.getNode(node.right, val);
      } else if (val < node.val) {
        return this.getNode(node.left, val);
      } else {
        return node;
      }
    }
  };

  public getMin = (node: TreeNode): TreeNode => {
    return this.getMinNode(node);
  };

  // correct! use little test data to run
  private getMinNode = (node: TreeNode) => {
    if (node.left !== null) {
      return this.getMinNode(node.left);
    } else {
      return node;
    }
  };

  public remove = (val: number): TreeNode | null => {
    return this.removeNode(this.root, val);
  };

  private removeNode = (
    node: TreeNode | null,
    val: number
  ): TreeNode | null => {
    if (node === null) {
      return null;
    }
    // 現在需要modify node
    // 所以應該用 node.left or node.right
    if (val < node.val) {
      node.left = this.removeNode(node.left, val);
    } else if (val > node.val) {
      node.right = this.removeNode(node.right, val);
    } else {
      // val === node.val
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null && node.right !== null) {
        node = node.right;
        return node;
      } else if (node.right === null && node.left !== null) {
        node = node.left;
        return node;
      } else if (node.left !== null && node.right !== null) {
        // the most difficult part
        let tempNode = this.getMin(node.right);
        if (tempNode !== null) {
          node.val = tempNode.val;
          node.right = this.removeNode(node.right, tempNode.val);
        }
      }
    }

    return node;
  };
}
