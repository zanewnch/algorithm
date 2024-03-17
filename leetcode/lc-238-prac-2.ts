function productExceptSelf(nums: number[]): number[] {
  // 要用dp  所以要先創建array
  let n  = nums.length;
  let left = new Array(n).fill(0);// 放的是左邊所有element 的乘積
  let right = new Array(n).fill(0); // 放的是右邊所有element 的乘積
  
  left[0] = 1;
  // 因為第0 個element 沒有左邊的element, 所以從1開始
  for(let i = 1; i<n;i++){
    // left[i-i] 是左邊所有元素的乘積 nums[i-1]是i 的左邊第一個element
    left[i] = left[i-1] * nums[i-1];
  }

  right[right.length-1] = 1;
  // 因為最後一個element 並沒有右邊的element
  for(let i = n-2; i>=0;i--){
    right[i] = right[i+1] * nums[i+1];
  }

  let result = new Array(n).fill(null);
  for(let i = 0; i < n ; i++){
    result[i] = left[i] * right[i];
  }

  return result;

};