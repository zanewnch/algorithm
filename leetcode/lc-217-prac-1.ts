function containsDuplicate(nums: number[]): boolean {
    // add value to new array, and detect by the way.
    let temp:number[] = [];

    for(let i = 0; i<nums.length;i++){
        if(temp.indexOf(nums[i])== -1){
            temp.push(nums[i]);
        }else{
            return true;
        }
    }
    return false;
};