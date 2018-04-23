function bubbleSort(arr){
    let bubbleLimit = arr.length - 1;
    while(bubbleLimit > -1){
        for(let i = 0; i < bubbleLimit; i++){
            if(arr[i] > arr[i + 1]){
                arr = swap(arr, i);
            }
        }
        bubbleLimit--;
    }
    return arr;
}

function swap(arr, i){
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    return arr;
}
