class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function flipTree(root) {
    if (root === null) {
        return null;
    }

    // Swap the left and right subtrees
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively flip the subtrees
    flipTree(root.left);
    flipTree(root.right);

    return root;
}

// Test data
let tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
let flippedTree = flipTree(tree);