const containsDuplicate = (nums: number[]): boolean => {
  let temp = new Set<number>();
  for(let i =0;i<nums.length;i++){
    if(temp.has(nums[i])){
        return true;
    }else{
        temp.add(nums[i]);
    }
  }

  return false;
};
