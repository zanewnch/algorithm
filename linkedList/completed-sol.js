/* 
this edition is doubly linked list with two sentinel nodes (dummy nodes), making it the most comprehensive edition.
*/
// Define the ListNode class to represent each node in the doubly linked list
class ListNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev || null;
    this.next = next || null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new ListNode(null); // sentinel node at the start
    this.tail = new ListNode(null); // sentinel node at the end
    this.head.next = this.tail; // start sentinel node points to end sentinel node
    this.tail.prev = this.head; // end sentinel node points to start sentinel node
  }

  insert(data) {
    let newNode = new ListNode(data);
    newNode.prev = this.tail.prev;
    newNode.next = this.tail;
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }

  delete(data) {
    let current = this.head.next;
    while (current.next) {
      if (current.data === data) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        return; // data found and deleted, exit the function
      }
      current = current.next;
    }
    console.log('Data not found'); // data not found in the list
  }

  display() {
    let current = this.head.next;
    while (current.next) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let dll = new DoublyLinkedList();
dll.insert(1);
dll.insert(2);
dll.insert(3);
dll.display(); // Outputs: 1, 2, 3
dll.delete(2);
dll.display(); // Outputs: 1, 3