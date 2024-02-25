let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

let merge = function(nums1, m, nums2, n) {
    // create a temporary array to store the merged array
    let merged = [m+n];
    console.log(merged);

    // put m elements from nums1 to merged
    for (let i =0;i<m;i++){
        merged[i] = nums1[i];
    }
    console.log(merged);

    let i = 0
    let j = 0
    let k = m; // ?
    while(i<m && j<n){
        
        console.log(merged[i]);
        // 如果merged 中的nums1 element <= nums2 element, 就把 merged 中的nums1 element 複製到nums1 的尾段
        if(merged[i] <= nums2[j]){
            nums1[k++] = merged[i++];
        }else{
            // 否則將 nums2 element 複製到 nums1 的尾段
            nums1[k++] = nums2[j++]
        }



    }

    while(j<n){
        nums1[k++] = nums2[j++];
    }
}

merge(nums1, m, nums2, n) 
console.log(nums1);
console.log(nums2)