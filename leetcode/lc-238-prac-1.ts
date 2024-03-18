function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = [];
    
    // Initialize the arrays to store the product of numbers to the left and right of each element
    const leftProducts: number[] = new Array(n).fill(null);
    const rightProducts: number[] = new Array(n).fill(null);
    
    // Calculate the product of numbers to the left of each element
    leftProducts[0] = 1;
    for (let i = 1; i < n; i++) {
        /* 
        這行程式碼的目的是計算 nums 陣列中索引 i 左側所有元素的乘積，並將結果存儲在 leftProducts[i] 中。

        leftProducts[i - 1] 是 nums 陣列中索引 i - 1 左側所有元素的乘積，而 nums[i - 1] 則是索引 i 左側的最後一個元素。

        所以，leftProducts[i - 1] * nums[i - 1] 就是 nums 陣列中索引 i 左側所有元素的乘積。這個結果就被賦值給 leftProducts[i]。

        簡單來說，這行程式碼就是在計算 nums 陣列中每個元素左側所有元素的乘積。
        */
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    
    // Calculate the product of numbers to the right of each element
    rightProducts[rightProducts.length-1] = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }
    
    // Calculate the final result by multiplying the left and right products for each element
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }
    
    return result;
}


/* 
function productExceptSelf(nums: number[]): number[] {
    let length = nums.length;

    let L = new Array(length);
    let R = new Array(length);

    let answer = new Array(length);

    L[0] = 1;
    for (let i = 1; i < length; i++) {
        L[i] = nums[i - 1] * L[i - 1];
    }

    R[length - 1] = 1;
    for (let i = length - 2; i >= 0; i--) {
        R[i] = nums[i + 1] * R[i + 1];
    }

    for (let i = 0; i < length; i++) {
        answer[i] = L[i] * R[i];
    }

    return answer;
}

*/