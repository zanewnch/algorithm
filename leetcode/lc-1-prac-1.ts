function twoSum(nums: number[], target: number): number[] {
    // return an array
    // array 可以把它看成就是 index-value 的hash table
    // 然後現在要做一個新的hash table 是 value-index, 因為result 要的是index value

    let hashTable:{[key:number]:number} = {};
    let result:number[] = [];

    for(let i=0;i<nums.length;i++){
        if(hashTable.hasOwnProperty(target-nums[i])){
            result.push(hashTable[target-nums[i]]);
            result.push(i);
            break;
        }else{
            hashTable[target-nums[i]] = i;
        }
    }

    return result;

    

    // target - nums[i]

    

    

};