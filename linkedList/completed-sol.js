/* 
this edition is boubly linked list with two soldier(dummy node), is the most completed edition */
// Define the Node class to represent each node in the doubly linked list
class Node {
    constructor(val) {
      this.val = val;          // Initialize the value of the node
      this.prev = null;        // Initialize the reference to the previous node as null
      this.next = null;        // Initialize the reference to the next node as null
    }
  }
  
  // Define the DoublyLinkedList class to implement a doubly linked list
  class DoublyLinkedList {
    constructor() {
      // Initialize the dummy head and tail nodes
      this.head = new Node(null);   // Create a dummy head node with null value
      this.tail = new Node(null);   // Create a dummy tail node with null value
      this.head.next = this.tail;   // Link the dummy head node to the dummy tail node
      this.tail.prev = this.head;   // Link the dummy tail node to the dummy head node
    }
  
    // Add a new node to the end of the list (tail)
    addTail(val) {
      // Create a new node with the given value
      let newNode = new Node(val);
      // Link the new node to the current last node and the dummy tail node
      newNode.prev = this.tail.prev; // Set the previous reference of the new node to the current last node
      newNode.next = this.tail;      // Set the next reference of the new node to the dummy tail node
      // Update the references of the current last node and the dummy tail node
      this.tail.prev.next = newNode; // Update the next reference of the current last node to the new node
      this.tail.prev = newNode;      // Update the previous reference of the dummy tail node to the new node
    }
  
    // Remove a node with the given value
    remove(val) {
      let current = this.head.next;  // Start from the first real node after the dummy head node
      while (current !== this.tail) { // Iterate until reaching the dummy tail node
        if (current.val === val) {   // Check if the current node's value matches the target value
          // Link the previous and next nodes, skipping the current node
          current.prev.next = current.next;
          current.next.prev = current.prev;
          return; // Found and removed, exit the method
        }
        current = current.next; // Move to the next node
      }
    }
  
    // Search for a node with the given value
    search(val) {
      let current = this.head.next; // Start from the first real node after the dummy head node
      while (current !== this.tail) { // Iterate until reaching the dummy tail node
        if (current.val === val) { // Check if the current node's value matches the target value
          return true; // Found, return true
        }
        current = current.next; // Move to the next node
      }
      return false; // Not found, return false
    }
  }
  
  // Example usage:
  
  let linkedList = new DoublyLinkedList();
  
  // Add nodes to the doubly linked list
  linkedList.addTail(1);
  linkedList.addTail(2);
  linkedList.addTail(3);
  
  // Search for a value in the doubly linked list
  console.log("Search for value 2:", linkedList.search(2)); // Output: true
  
  // Remove a node with the specified value from the doubly linked list
  linkedList.remove(2);
  
  // Search for the removed value again
  console.log("Search for value 2 after removal:", linkedList.search(2)); // Output: false
  