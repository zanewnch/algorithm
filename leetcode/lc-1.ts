function twoSum(nums: number[], target: number): number[] | null {
    // 在js 可以用object 來實現hash table
    const hashTable: { [key: number]: number } = {};

    // for loop run each element in nums
    for (let i = 0; i < nums.length; i++) {
        // complement mean each element 與 target 的差值
        const complement = target - nums[i];
        if (hashTable.hasOwnProperty(complement)) {
            return [hashTable[complement], i];
        }
        hashTable[nums[i]] = i;
    }

    return null; // No solution found
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1] (Indices of numbers that sum up to 9)
