class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

const breathFirstSearch = (root)=>{
    // return an array
    let result = []
    // use queue to solve
    let queue = []

    queue.push(root);
    while(queue.length>0){
        // queue extract first element
        let currentNode = queue.shift();
        result.push(currentNode.val);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
    }
}