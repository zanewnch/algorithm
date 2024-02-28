/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function(root) {
    return detector(root,root);
};

const detector = (node1,node2)=>{
    if(node1===null&&node2===null) return true;
    if(node1===null||node2===null) return false;
    
    return node1.val === node2.val &&
    detector(node1.left,node2.right)&&
    detector(node1.right,node2.left);
}

