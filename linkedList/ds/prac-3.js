class ListNode{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = new ListNode(null);
        this.tail = new ListNode(null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    add(value){
        // the position that new node add is the end of linked list
        // three node need to modify:
        // 1. newNode
        // 2. newNode.prev
        // 3. newNode.next
        let newNode = new ListNode(value);
        newNode.next = this.tail;
        newNode.prev = this.tail.prev;
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
    }

    remove(value){
        // two node need to modify:
        // the current node need to be delete, so can ignore this 
        // 1. current node.prev
        // 2. current node.next

        // because the head is dummy node, so it is not need to traverse
        let currentNode = this.head.next;
        while(currentNode.next){
            if(currentNode.value === value){
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
            }
            currentNode = currentNode.next;
        }

        return -1;
    }
}