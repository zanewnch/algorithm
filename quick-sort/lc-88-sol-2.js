// 這個做法用了兩個pointer 這才是傳統quick sort的用法 我有點看不太懂 pivot swap 的位置這部分
// 定義一個函數 quickSort，它接受一個數組和兩個索引值 left 和 right 作為參數
function quickSort(array, left = 0, right = array.length - 1) {
  // 如果 left 大於等於 right，表示範圍內的數組只有一個元素或者沒有元素，直接返回該數組
  if (left >= right) {
    return array;
  }

  // 調用 partition 函數，將數組劃分為兩部分
  // index 是pivot在排序完後的索引值
  let index = partition(array, left, right);
  // 遞歸調用 quickSort，對左半部分進行排序
  quickSort(array, left, index - 1);
  // 遞歸調用 quickSort，對右半部分進行排序
  quickSort(array, index + 1, right);

  // 返回排序後的數組
  return array;
}

// 定義一個函數 partition，用於在指定範圍內進行分區操作
function partition(array, left, right) {
  // 將右邊界的元素作為 pivot（基準值）
  let pivot = array[right];
  // !初始化一個索引 i，表示小於 pivot 的元素的最右位置
  // let i = left - 1;: 在分區過程中，i 是一個指標，指向的是小於 pivot 的元素的最右位置。初始化時，將 i 設置為 left - 1 是為了確保 i 能夠指向第一個元素的位置。
  let i = left - 1;

  // 遍歷從左邊界到右邊界之間的元素
  for (let j = left; j < right; j++) {
    // 如果當前元素小於 pivot，則將 i 往右移動一位，並交換當前元素與 array[i] 的位置
    if (array[j] < pivot) {
      // if (array[j] < pivot): 在迴圈中，如果當前元素小於 pivot，則 i 向右移動一位，表示小於 pivot 的元素多了一個。同時，交換當前元素和 array[i] 的位置，將當前元素放入左半部分。
      i++;
      // 在實際的分區過程中，我們使用兩個指針i和j，其中i指向小於pivot的元素的右邊，j則遍歷數組，尋找小於pivot的元素。每當找到一個小於pivot的元素時，我們就將其與i指向的元素進行交換，這樣可以確保i指向的位置之前的所有元素都是小於pivot的。
      swap(array, i, j);
    }
  }

  // !將 pivot 移動到最終的位置
  // swap(array, i + 1, right);: 當迴圈結束時，i 指向的是最後一個小於 pivot 的元素的位置。為了將 pivot 正確地放入它的最終位置，將 pivot 與 array[i + 1] 進行交換。
  swap(array, i + 1, right);

  // 返回 pivot 的最終位置
  // return i + 1;: 最後，返回 i + 1。這個值表示 pivot 在排序後的數組中的位置。pivot 左邊的元素都比 pivot 小，右邊的元素都比 pivot 大。
  return i + 1;
}

// 定義一個函數 swap，用於交換數組中兩個元素的位置
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// 測試數組
//   const arr = [1, 4, 2, 8, 345, 123, 55, 234, 92];
const arr = [3, 2, 10];
// 輸出排序後的結果
console.log(quickSort(arr));
