function maxSubArray(nums: number[]): number {
  let current:number = 0;
  // current 有可能是negative 所以不能用0
  let max:number = Number.NEGATIVE_INFINITY;
  
  for(let i =0;i<nums.length;i++){
    current = Math.max(nums[i],current+nums[i]);
    max = Math.max(current,max);
  }

  return max;
};