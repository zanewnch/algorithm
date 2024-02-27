class TreeNode{
    constructor(value,left=null,right=null){
        this.value = value
        this.left = left
        this.right = right
    }
}

class BinaryTreeTraverse{
    preOrder(treeNode){
        if(treeNode===null){
            return;
        }

        console.log(treeNode.value)
        this.preOrder(treeNode.left)
        this.preOrder(treeNode.right)
    }
}


let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.right = new TreeNode(3);
root.right.left=new TreeNode(5)
root.right.right = new TreeNode(6)

const binaryTreeTraverse  = new BinaryTreeTraverse();
binaryTreeTraverse.preOrder(root);