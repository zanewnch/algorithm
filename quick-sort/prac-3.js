const swap = (array,i,j)=>{
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const partition = (array,left,right)=>{
    let pivot = array[right];
    // 比 pivot 小的最右邊那個值的index
    let i = left -1;

    // 比pivot小的, i and j 都會+1
    // 比pivot大的, 就只有j會+1, 所以i會停留在比pivot小的element上
    // 此時, i = 比pivot小的最右邊那個值, j = 第一個比pivot大的值
    // 就會進行交換: 把小的值往左擺,大的值往右擺
    // 會把小值跟大值都交換完
    // 大的值或小的值都不用先管他,只要管往左擺或往右擺, 最後會用recursion 來處理細節
    for(let j = left; j<right;j++){
        if(array[j] <pivot){
            i++;
            swap(array,i,j);
        }
    }
    // 因為i 是停留在比pivot小的值的最右邊, 所以i+1 就是剛好pivot的位置, 然後pivot右邊都是比pivot還大的值
    swap(array,i+1,right);
    // return pivot 的index位置, 為了進行之後的recursion
    return i+1;    
}

const quickSort = (array,left=0,right=array.length-1)=>{
    if(left>right){
        return array;
    }

    let index = partition(array,left,right);
    quickSort(array,left,index-1);
    quickSort(array,index+1,right);
    
    return array;
}



  const arr = [1, 4, 2, 8, 345, 123, 55, 234, 92];
// const arr = [3, 2, 10];
console.log(quickSort(arr));