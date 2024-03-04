class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // 創建操作 - 插入一個新節點
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode; // 如果樹是空的，新節點成為根節點
        } else {
            this.insertNode(this.root, newNode); // 否則將新節點插入到適當的位置
        }
    }

    // 遞歸插入輔助方法
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode; // 如果左子樹為空，插入到左子樹
            } else {
                this.insertNode(node.left, newNode); // 否則繼續遞歸向左插入
            }
        } else {
            if (node.right === null) {
                node.right = newNode; // 如果右子樹為空，插入到右子樹
            } else {
                this.insertNode(node.right, newNode); // 否則繼續遞歸向右插入
            }
        }
    }

    // 讀取操作 - 查找特定值
    search(value) {
        return this.searchNode(this.root, value); // 從根節點開始查找
    }

    // 遞歸查找輔助方法
    searchNode(node, value) {
        if (node === null) {
            return false; // 如果節點為空，返回false
        }

        if (value < node.value) {
            return this.searchNode(node.left, value); // 如果值小於當前節點值，繼續向左查找
        } else if (value > node.value) {
            return this.searchNode(node.right, value); // 如果值大於當前節點值，繼續向右查找
        } else {
            return true; // 如果值等於當前節點值，返回true，表示找到了
        }
    }

    

    // 刪除操作 - 刪除特定值的節點
    delete(value) {
        this.root = this.deleteNode(this.root, value); // 從根節點開始刪除
    }

    // 遞歸刪除輔助方法
    deleteNode(node, value) {
        if (node === null) {
            return null; // 如果節點為空，返回null
        }

        if (value < node.value) {
            node.left = this.deleteNode(node.left, value); // 如果值小於當前節點值，繼續向左刪除
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value); // 如果值大於當前節點值，繼續向右刪除
        } else {
            // 如果找到要刪除的節點
            if (node.left === null && node.right === null) {
                // 情況1：如果要刪除的節點沒有子節點，直接刪除它
                node = null;
            } else if (node.left === null) {
                // 情況2：如果要刪除的節點只有右子節點，用右子節點取代它
                node = node.right;
            } else if (node.right === null) {
                // 情況3：如果要刪除的節點只有左子節點，用左子節點取代它
                node = node.left;
            } else {
                // 情況4：如果要刪除的節點有兩個子節點，找到右子樹的最小節點來替代它
                const minNode = this.findMinNode(node.right);
                node.value = minNode.value; // 將右子樹的最小節點值賦值給要刪除的節點
                node.right = this.deleteNode(node.right, minNode.value); // 再在右子樹中刪除右子樹的最小節點
            }
        }
        return node;
    }

    // 找到子樹中的最小節點
    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

// 使用示例
const bst = new BinarySearchTree();

// 創建操作
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// 讀取操作
console.log(bst.search(10)); // 輸出：true
console.log(bst.search(12)); // 輸出：false

// 更新操作
bst.update(10, 12);
console.log(bst.search(10)); // 輸出：false
console.log(bst.search(12)); // 輸出：true

// 刪除操作
bst.delete(12);
console.log(bst.search(12)); // 輸出：false
