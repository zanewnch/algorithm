class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
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

let root = [1, null, 2, 3];
const rootNode = arrayToTreeNode(root);


const inOrderTraversal = (root)=>{
    let result = [];
    helper(root,result);
    return result;
}


const helper = (node,result)=>{
  if(node === null) return;
  helper(node.left,result);
  result.push(node.val);
  helper(node.right,result);
}

console.log(rootNode)
console.log(inOrderTraversal(rootNode));