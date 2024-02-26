class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop element from the stack and return it
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Return the top element from the stack without removing it
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  
    // Print the stack elements
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str.trim();
    }
  }
  
  // Example usage:
  
  let stack = new Stack();
  
  console.log("Is the stack empty? " + stack.isEmpty()); // true
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Stack elements: " + stack.printStack()); // Output: 10 20 30
  
  console.log("Top element: " + stack.peek()); // Output: Top element: 30
  
  console.log("Popped element: " + stack.pop()); // Output: Popped element: 30
  
  console.log("Stack elements after popping: " + stack.printStack()); // Output: 10 20
  
  console.log("Stack size: " + stack.size()); // Output: Stack size: 2
  
  stack.clear();
  
  console.log("Is the stack empty after clearing? " + stack.isEmpty()); // true
  