function maxSubArray(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let current_sum = nums[0];
  let max_sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    /* 
        這行程式碼是在計算以 nums[i] 結尾的子陣列的最大和。

        Math.max(nums[i], current_sum + nums[i]) 這個表達式的意思是，我們正在比較兩種情況：

        nums[i]：這表示我們開始一個新的子陣列，並且這個子陣列只包含當前的元素 nums[i]。這種情況可能會發生當 current_sum（到目前為止的子陣列和）為負數時，因為在這種情況下，我們可以通過開始一個新的子陣列來獲得更大的和。

        current_sum + nums[i]：這表示我們將當前的元素 nums[i] 加入到當前的子陣列中。這種情況可能會發生當 current_sum 為正數時，因為在這種情況下，我們可以通過將 nums[i] 加入到當前的子陣列中來獲得更大的和。

        然後，我們將這兩種情況中的最大值賦值給 current_sum，這樣 current_sum 就會儲存以 nums[i] 結尾的子陣列的最大和。

        這是一種動態規劃的技巧，我們將一個大問題（找到整個陣列的最大子陣列和）分解為一個個小問題（找到以每個位置結尾的最大子陣列和），並利用小問題的解來解決大問題。
        */
    current_sum = Math.max(nums[i], current_sum + nums[i]);
    max_sum = Math.max(max_sum, current_sum);
  }

  return max_sum;
}

let test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(test));
