class TreeNode{
    constructor(val,left=null,right=null){
        this.val = val;
        this.right = left;
        this.left = right;
    }
}

const minDepth = (root)=>{
    if(root === null) return 0;
    if(root.left===null&&root.right===null) return 1;

    if(root.left===null){
        return minDepth(root.right) +1;
    }

    if(root.right===null){
        return minDepth(root.left)+1;
    }

    return Math.min(minDepth(root.left),minDepth(root.right)) +1;
}


const maxDepth = (root)=>{
    if(root===null)return 0;
    if(root.left===null&&root.right===null) return 1;

    if(root.left===null){
        return maxDepth(root.right)+1;
    }

    if(root.right===null){
        return maxDepth(root.left)+1;
    }

    return Math.max(maxDepth(root.left),maxDepth(root.right)) +1;
}

// Test data
let tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
let tree2 = new TreeNode(1, new TreeNode(2));

console.log(maxDepth(tree1)); // Output: 3
console.log(maxDepth(tree2)); // Output: 2