class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // insert 操作 input 應該是一個value
  insert(value) {
    // 先創建一個 new node with input value
    // 看root whether is null
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    // newNode could > = < root
    if (newNode.value > root.value) {
      // 要insert 之前 還要確認root.right whether is null
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
    if ((newNode.value = root.value)) return;

    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    }
  }

  // 查找特定值是否在tree當中
  // 需要這個function 因為traversal 是從root開始run,
  // 如果沒有這個function, user 還要自己type root to be param
  search(value) {
    if (this.root === null) {
      return null;
    }

    return this.searchNode(this.root, value);
  }

  searchNode(root, value) {
    if (root === null) {
      return;
    }
    if (root.value === value) {
      return root;
    }

    if (value > root.value) {
      // 代表沒有比該node更大的node
      if (root.right === null) {
        return null;
      } else {
        this.searchNode(root.right, value);
      }
    }

    if (value < root.value) {
      if (root.left === null) {
        return null;
      } else {
        this.searchNode(root.left, value);
      }
    }
  }

  remove(value){
    return removeNode(this.root,value);
  }

  removeNode(root,value){
    //1. traversal to find node
    let temp = this.searchNode(root,value);
    let result = temp;
    if(temp.left===null&&temp.right===null){
        temp = null;
    }
    if(temp.left===null){
        temp = temp.right;
    }else if(temp.right===null){
        temp = temp.left;
    }

    // temp.left and temp.right are not null
    temp = this.getMin(temp.right);

    return result;
  }

  getMin(root) {
    if (this.root === null) return null;

    return this.getMinNode(this.root);
  }

  getMinNode(root) {
    // 應該一直recursion left node 就好

    while (root.left !== null) {
      this.getMinNode(root.left);
    }

    return root;
  }

  getMax() {
    if (this.root === null) return null;

    return this.getMaxNode(this.root);
  }

  getMaxNode(root) {
    while (root.right !== null) {
      this.getMaxNode(root.right);
    }

    return root;
  }
}


// 使用示例
const bst = new BinarySearchTree();

// 創建操作
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

bst.delete(7);
