function maxProduct(nums: number[]): number {
  // 不能使用0, 因為這題是相乘，任何數乘0 都會變成0, 所以這邊改成1
  let MaxCurrent: number = 1;
  let minCurrent: number = 1;
  let max: number = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    //問題在於，當我們遇到一個負數時，當前的最大乘積（current）可能會變成最小乘積，而當前的最小乘積可能會變成最大乘積。因此，我們需要同時追蹤當前的最大乘積和最小乘積。

    if (nums[i] < 0) {
      let temp = MaxCurrent;
      MaxCurrent = minCurrent;
      minCurrent = temp;
    }

    MaxCurrent = Math.max(nums[i], nums[i] * MaxCurrent);
    minCurrent = Math.min(nums[i], nums[i] * minCurrent);

    max = Math.max(max, MaxCurrent);
  }

  return max;
}
