function productExceptSelf(nums: number[]): number[] {
    // 如何判斷一個題目是dp
    // 1. 可以define one state, and through some manipulation to anther state
    // 2. 可以拆成子問題
    // 3. 問題optimize 可以從子問題獲得

    let left:number[] = new Array(nums.length).fill(0);
    let right:number[] = new Array(nums.length).fill(0);
    let result:number[] = new Array(nums.length).fill(null);

    // left mean i  左邊的乘積值
    left[0] = 1;
    for(let i  = 1; i<nums.length;i ++){
        left[i] = left[i -1] * nums[i-1];
    }

    // right mean i 右邊的乘積值
    right[right.length -1] = 1;
    for(let i = nums.length -2; i>=0;i--){
        right[i] = right[i+1]*nums[i+1];
    }

    for(let i = 0; i<nums.length;i++){
        result[i] = left[i]*right[i];
    }

    return result;


};