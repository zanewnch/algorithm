/*
soldier 最主要的用途就是解決linked list 每次都要先檢查whether is empty 的問題 
 */
class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = new ListNode(null); // Soldier node (dummy head)
      this.tail = this.head; // Initialize tail to point to the head initially
    }
  
    // Add a new node to the end of the list (tail)
    addTail(val) {
      let newNode = new ListNode(val);
      this.tail.next = newNode; // Link the new node after the current tail
      this.tail = newNode; // Update the tail to the new node
    }
  
    // Delete a node with the given value
    delete(val) {
      let current = this.head;
      while (current.next !== null && current.next.val !== val) {
        current = current.next;
      }
      if (current.next !== null) {
        current.next = current.next.next;
      }
    }
  
    // Search for a node with the given value
    search(val) {
      let current = this.head.next; // Skip the soldier node
      while (current !== null) {
        if (current.val === val) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }
  
  // Example usage:
  
  let linkedList = new LinkedList();
  
  linkedList.addTail(1);
  linkedList.addTail(2);
  linkedList.addTail(3);
  
  console.log("Search for value 2:", linkedList.search(2)); // Output: true
  
  linkedList.delete(2);
  
  console.log("Search for value 2 after deletion:", linkedList.search(2)); // Output: false
  