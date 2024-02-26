class Node{
    constructor(value,next){
        this.value = value;
        this.next = next;
    }
}
// 要先把所有condition 都列出來
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(value){
        // 先區分有沒有element, 方式為判斷head是否為null
        if(this.head){
            // 在tail.next add new node
            this.tail.next = new Node(value,null);
            this.tail = this.tail.next;
        }else{
            // head is null
            // assign new Node to head
            // this.tail 的initial value is null, represent tail.next 已經是null
            this.head = new Node(value,this.tail);
            this.tail = this.head;
            
        }
    }

    remove(value){
        // 先判斷 whether is empty
        if(!this.head){
            console.log("The linked list is empty");
        }

        // 如果head 就是要找的data
        if(this.head.value == value){
            // 如果只有一個element
            if(!this.head.next){
                this.head = null;
                this.tail = null;
            }

            this.head = this.head.next;
            return;
        }

        // head 不是要找的data
        let current = this.head;
        // 因為當run到tail的時候, tail.next is null, it would return false, 就會break loop
        while(current.next){
            if(current.next.value == value){
                // 如果要刪除的element 是在tail
                if(!current.next.next){
                    this.tail = current;
                    return; 
                }else{
                    // 要刪除的element 不在tail
                    current.next = current.next.next;
                    return;
                }
                
            }

            current = current.next;
            

            
        }

        console.log("The value is not found in this linked list.")


    }
}