class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}



const breathFirstSearch = (root) => {
  // output is an array, so need to create a temporary array to store the result element
  let result = [];
  // using queue to solve the problem
  let queue = [];

  // at the first, push root data to queue array
  queue.push(root);

  while (queue.length > 0) {
    // because it is queue, so use shift to remove the first element of the array
    let currentNode = queue.shift();
    result.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return result;
};

// create nodes
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(breathFirstSearch(root)); // Output: [1, 2, 3, 4, 5]
