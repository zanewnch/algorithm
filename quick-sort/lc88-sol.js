// 這個我能看懂 比較推薦
// https://www.youtube.com/watch?v=P6XGSKO2RzI
// 這個看得懂圖片,但看不懂code
// https://www.youtube.com/watch?v=AsQW27DT82I

// 這個作法好理解,但是因為創建了額外兩個array, 造成多的空間使用
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[array.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  //...leftArr   就是把leftArr 的每一個element 提取出來  而不是一個array with all element
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]; // [1,2,4,8,55,92,123,234,345]
  // return [quickSort(leftArr),pivot,quickSort(rightArr)] // [ [ [ 1 ], 2, [ 4 ], 8, 55 ], 92, [ [ 123 ], 234, [ 345 ] ] ]
}

const arr = [1, 4, 2, 8, 345, 123, 55, 234, 92];
console.log(quickSort(arr));
