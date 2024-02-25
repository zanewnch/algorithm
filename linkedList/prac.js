class Node{
    constructor(value,node){
        this.value = value;
        this.node = node;
    }
}

class LinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(value){

        // condition:
        // 1. empty list - not empty list
        if(!this.head){
            this.head = new Node(value,this.tail);
            this.tail = this.head;
        }else{
            this.tail.next = new Node(value,null);
            this.tail = this.tail.next;
        }

        
        
    }

    remove(value){
        // condition:
        // 1. empty list - not empty list
        // 2. the delete data in head - not in head
        // 3. the delete data in tail - not in tail

        if(!this.head){
            console.log("There is no element.");
            return;
        }

        if(this.head.value == value){
            this.head = this.head.next;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.value == value){
                if(!currentNode.next.next){
                    this.tail = currentNode;
                    return;
                }
                currentNode.next = currentNode.next.next;
                return;
            }

            currentNode = currentNode.next;
        }
    }
}