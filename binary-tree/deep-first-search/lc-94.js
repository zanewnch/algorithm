class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var inorderTraversal = function (root) {
  // left-root-right
  let result = [];
  helper(root, result);
  return result;
};

/* helper function: This function performs the actual inorder traversal. It takes a node and the result array as parameters. If the node is not null, it recursively calls itself on the left child of the node, adds the value of the node to the result array, and then recursively calls itself on the right child of the node. This is the essence of inorder traversal: "left node - root node - right node". */
function helper(node, result) {
  if (node !== null) {
    if (node.left !== null) {
      helper(node.left, result);
    }
    result.push(node.val);
    if (node.right !== null) {
      helper(node.right, result);
    }
  }
}

function arrayToTreeNode(arr) {
  if (arr.length === 0) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }

    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }

    i++;
  }

  return root;
}



let root = [1,null,2,3];
const rootNode = arrayToTreeNode(root);
console.log(inorderTraversal(rootNode));
