class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  // breath-first-search should use queue to solve
  // why using queue: because need to retrieve the first data of tree, so need to use queue.
  function bfs(root) {
    let queue = []; // initialize a queue
    let result = []; // array to store the result
  
    queue.push(root); // enqueue root
  
    while(queue.length > 0) {
      let currentNode = queue.shift(); // dequeue a node from the front of the queue
  
      result.push(currentNode.value); // add the value of the node to the result array
  
      // enqueue all children of the current node
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  
    return result; // return the result array
  }
  
  // create nodes
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  
  console.log(bfs(root)); // Output: [1, 2, 3, 4, 5]