function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (tree1, tree2) {
    return JSON.stringify(breathFirstSearch(tree1)) === JSON.stringify(breathFirstSearch(tree2))
};

const breathFirstSearch = (root) => {
  // return array
  let result = [];
  // using queue to solve breath first search
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode.val);
    // if (currentNode.left) {
    //   queue.push(currentNode.left);
    // }
    // if (currentNode.right) {
    //   queue.push(currentNode.right);
    // }
  }

  return result;
};

let p = new TreeNode(1, new TreeNode(2), null);
let q = new TreeNode(1, null, new TreeNode(2));

console.log(isSameTree(p,q));
