class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const flipTree = (root)=>{
    if(root===null) return null;

    let temp  = root.left;
    root.left = root.right;
    root.right = temp;

    flipTree(root.left);
    flipTree(root.right);

    return root;

}

let tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log(tree);
let flippedTree = flipTree(tree);
console.log(flippedTree);