class ListNode{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = new ListNode(null);
        this.tail = new ListNode(null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    add(value){
        /* 
        總共有三個node 需要更改
        tail.prev
        newNode
        tail
        */
        let newNode = new ListNode(value);
        // 改newNode
        newNode.prev = this.tail.prev;
        newNode.next = this.tail;
        // this.tail.prev 是指向最後一個實際節點
        // 最後一個實際節點的next 應該指向newNode
        // 在這行程式碼執行後，最後一個實際節點的 next 參考將指向新節點，但尾部哨兵節點的 prev 參考仍然指向原來的最後一個實際節點。
        // 改 tail.prev
        this.tail.prev.next = newNode;
        // 在這行程式碼執行後，尾部哨兵節點的 prev 參考將指向新節點，這意味著新節點現在是鏈表中的最後一個實際節點。
        // 改 tail
        this.tail.prev = newNode; 

    }

    delete(value){
        // !如果一開始沒有任何實際節點,會指向tail dummy node
        // 要改的node有, 
        // 1. current.prev
        // 2. current.next
        // 應該currentNode 就是要刪除的,所以不需要更改
        let currentNode = this.head.next;
        while(currentNode.next){
            if(currentNode.value == value){
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                return;
            }
            currentNode = currentNode.next;
        }

        return -1;
    }
}