let twoSum = (nums:number[],target:number):number[]|null=>{
    // using object data type to implement hash table
    let hashTable:{[key:number]:number} = {};
    
    for(let i:number = 0; i < nums.length;i++){
        if(hashTable.hasOwnProperty(nums[i])){
            return [hashTable[nums[i]],i];
        }else{
            hashTable[nums[i]] = i;
        }
    }e

    return null;
}