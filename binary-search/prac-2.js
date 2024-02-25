const binarySearch = (array,target)=>{
    let left = 0;
    let right = array.length-1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);

        if(array[mid]==target){
            return mid;
        }

        if(array[mid]>target){
            right = mid -1;
        }

        if(array[mid]<target){
            left=mid+1;
        }
    }

    return -1;
}

const arr = [32,435,12,456,4532];
const target = 32;

console.log(binarySearch(arr,target));