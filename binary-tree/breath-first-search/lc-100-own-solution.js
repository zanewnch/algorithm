/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (tree1, tree2) {
    return JSON.stringify(breathFirstSearch(tree1)) === JSON.stringify(breathFirstSearch(tree2));

};

const breathFirstSearch = (root) => {
    // return array
    let result = [];
    // using queue to solve breath first search
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        if(currentNode === null){
            // 因為queue 裡面會有null value, 所以需要檢查whether is null
            // when is null, 直接加currentNode(null) 進去result
            result.push(currentNode)
        }else{
            result.push(currentNode.val);
            // 根據test example, left 不管怎樣都要加進去
            queue.push(currentNode.left);
            // right 則是not null 才加
            if (currentNode.right) {
            queue.push(currentNode.right);
        }
        }
    }

    return result;
}