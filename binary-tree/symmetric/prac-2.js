class TreeNode{
    constructor(value,left=null,right=null){
        this.value=value
        this.right=right
        this.left=left
    }
}

const isMirror = (node1,node2)=>{
    if(node1===null&&node2===null) return true;
    if(node1===null||node2===null) return false;

    return (node1.value===node2.value) && isMirror(node1.left,node2.right) && isMirror(node1.right,node2.left);
}

const isSymmetric = (root)=>{
    return isMirror(root,root);
}

// Test data
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root)); // Output: true

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(2);
root2.left.right = new TreeNode(3);
root2.right.right = new TreeNode(3);

console.log(isSymmetric(root2)); // Output: false