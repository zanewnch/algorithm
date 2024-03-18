function maxSubArray(nums: number[]): number {
  // 更直覺的寫法
  // 只要想到 current and max

  // 有bug,  如果nums 裡面都是負數，那就會return 0, 因為我max initial value =  0
  let current: number = 0;
  let max: number = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(current, max);
  }

  return max;
}
