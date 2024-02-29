const archy = require('archy');

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

let tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));

let treeData = convertToArchyData(tree);

console.log(archy(treeData));

function convertToArchyData(node) {
    if (node === null) {
        return null;
    }

    return {
        label: String(node.val),
        nodes: [convertToArchyData(node.left), convertToArchyData(node.right)].filter(Boolean)
    };
}