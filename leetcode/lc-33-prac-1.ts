function search(nums: number[], target: number): number {
  // 做出區間
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 左區間
    if (nums[mid] >= nums[left]) {
      /* 
        在這裡，target >= nums[left] 是用來確定目標值是否在當前的搜尋範圍內。如果 target 等於 nums[left]，那麼目標值就在當前的搜尋範圍內，我們需要繼續在這個範圍內搜尋。

        如果我們只使用 >，那麼當 target 等於 nums[left] 時，我們的程式會誤判為目標值不在當前的搜尋範圍內，這會導致我們錯過目標值。

        因此，我們使用 >= 而不是 >，以確保我們不會錯過 target 等於 nums[left] 的情況。
        */
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        // 換區間
        left = mid + 1;
      }
    } else {
      // mid < left
      // 右區間
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        //換區間
        right = mid - 1;
      }
    }
  }

  return -1;
}
