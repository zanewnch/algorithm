function maxSubArray(nums: number[]): number {
    // 要想到 current and max
    // 要想到 initial value is nums[0]
    // 要想到for loop 是從 index = 1 開始
    let current:number = nums[0];
    let max:number = nums[0];
    
    for(let i = 1; i<nums.length;i++){
        current = Math.max(nums[i],current+nums[i]);
        max = Math.max(current,max);
    }

    return max;
};