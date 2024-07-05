const inOrderTraversal = (root)=>{
    // inOrder:left-root-right

    // output an array, so need to create the temp array to store the result element

    let result = []
    helper(root,result);
    return result;


}

const helper = (node,resultArray)=>{
    if(node===null) return;

    helper(node.left,resultArray);
    resultArray.push(node.val);
    helper(node.right,resultArray);
}