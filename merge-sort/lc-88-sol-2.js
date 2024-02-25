// m and n 是num1 and num2 的 element 數量
// 如果element = 0, 則不算數

// 定義一個名為 merge 的函數，接受四個參數：兩個數組 a 和 b，以及它們的長度 m 和 n
let merge = function (a, m, b, n) {
    // 初始化三個指針 i、j 和 k，分別指向數組 a、數組 b 和合併結果的末尾
    let i = m - 1; // num1 的末尾
    let j = n - 1; // num2 的末尾
    let k = m + n - 1; // 會把num2 合併到num1, 這是num1 合併完的末尾
  
    // 開始一個 while 循環，只要 a 和 b 還有元素，就持續進行合併操作
    while (i >= 0 && j >= 0) {
        // 如果 a 中的元素大於 b 中的元素，則將 a 中的元素放入合併結果中
        if (a[i] > b[j]) {
            a[k--] = a[i--];
        } else {
            // 否則將 b 中的元素放入合併結果中
            a[k--] = b[j--];
        }
    }
  
    // 如果 b 中還有剩餘的元素，則將它們依次放入合併結果的開頭
    while (j >= 0) {
        a[k--] = b[j--];
    }
  };