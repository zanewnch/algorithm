const swap = (array,i,j)=>{
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const partition = (array,left,right)=>{
    let pivot = array[right];
    let i = left -1;

    for(let j = left;j<right;j++){
        if(array[j]<pivot){
            i++;
            swap(array,i,j);
        }
    }

    swap(array,i+1,right);
    return i+1;
}

const quickSort = (array,left=0,right=array.length-1)=>{
    if(left > right){
        return array;
    }

    let index  =partition(array,left,right);
    quickSort(array,left,index-1);
    quickSort(array,index+1,right);

    return array;
}

let arr = [2,54,7,1231,542,9534,3]
console.log(quickSort(arr));