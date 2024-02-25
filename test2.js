function mergeSort(nums1, m, nums2, n) {
    // 创建一个临时数组，用于存储合并后的结果
    let merged = new Array(m + n);

    // 将 nums1 的前 m 个元素复制到临时数组 merged 中
    for (let i = 0; i < m; i++) {
        merged[i] = nums1[i];
    }

    // 使用归并排序将 nums1 和 nums2 合并到 merged 数组中
    let i = 0, j = 0, k = m;
    while (i < m && j < n) {
        // 如果 merged 中 nums1 的元素小于等于 nums2 的元素，则将 merged 中的 nums1 元素复制到 nums1 的末尾
        if (merged[i] <= nums2[j]) {
            nums1[k++] = merged[i++];
        } else {
            // 否则将 nums2 中的元素复制到 nums1 的末尾
            nums1[k++] = nums2[j++];
        }
    }

    // 将 nums2 中剩余的元素复制到 nums1 的末尾
    while (j < n) {
        nums1[k++] = nums2[j++];
    }
}

// 示例用法
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

// 调用 mergeSort 函数进行合并操作
mergeSort(nums1, m, nums2, n);

// 输出合并后的结果数组 nums1
console.log(nums1); // [1, 2, 2, 3, 5, 6]
