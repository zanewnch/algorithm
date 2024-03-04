// @ts-ignore
class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;
    constructor(val: number, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }


// @ts-ignore
class BinarySearchTree {
    public root: TreeNode | null;
    constructor() {
      this.root = null;
    }

    public getMin = (node: TreeNode): TreeNode => {
        return this.getMinNode(node);
      };
    
      // correct! use little test data to run
      private getMinNode = (node: TreeNode) => {
        if (node.left !== null) {
          return this.getMinNode(node.left);
        } else {
          return node;
        }
      };


    public remove = (val:number)=>{
        return this.removeNode(this.root,val);
    }

    private removeNode = (node:TreeNode|null,val:number)=>{
        if(node===null){
            return null;
        }

        if(val > node.val){
            node.right = this.removeNode(node.right,val);
        }else if(val < node.val){
            node.left = this.removeNode(node.left,val);
        }else{
            // val === node.val
            if(node.left===null&&node.right===null){
                node = null;
                return node;
            }else if (node.left === null && node.right !== null) {
                node = node.right;
                return node;
              } else if (node.right === null && node.left !== null) {
                node = node.left;
                return node;
              }else if(node.left !== null && node.right !== null){
                // core part
                let temp = this.getMin(node.right);

                if(temp !== null){
                    node.val = temp.val;
                    node.right = this.removeNode(node.right,temp.val);
                }
              }
        }
        return node;
    }
}