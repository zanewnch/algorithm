function findMin(nums: number[]): number {
    let left:number = 0;
    let right:number = nums.length-1;
    

    while(left<right){
        let mid:number = Math.floor((left+right)/2);
        if(nums[mid]>nums[right]){
            left = mid+1;
        }else{
            // right 不能 = mid - 1; 因為無法確定 mid whether is min 所以不能跳過
            right = mid;
        }
        // else if(nums[mid] >left){
            // right = mid -1;
        // }else{
            // return nums[mid];
        // }
    }

    return nums[left];
};