/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    /* 
    首先，我們定義一個函數 isSubtree(s, t) 來檢查 t 是否是 s 的子樹。如果 s 是空的，那麼 t 顯然不能是 s 的子樹，所以我們返回 false。如果 s 和 t 是相同的樹，那麼 t 顯然是 s 的子樹，所以我們返回 true。否則，我們遞歸地檢查 t 是否是 s 的左子樹或右子樹的子樹。

然後，我們定義一個輔助函數 isSameTree(s, t) 來檢查 s 和 t 是否是相同的樹。如果 s 和 t 都是空的，那麼它們是相同的樹，所以我們返回 true。如果 s 和 t 的值不相同，那麼它們不可能是相同的樹，所以我們返回 false。否則，我們遞歸地檢查 s 和 t 的左子樹和右子樹是否相同。
    */
   // s === null
    if (s === null) return false;
    if (isSameTree(s, t)) return true;
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};

var isSameTree = function(s, t) {
    /// s=== null and t===null
    if (s === null || t === null) {
        return s === t;
    }
    if (s.val !== t.val) return false;
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
};