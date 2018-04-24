function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const middleOfArr = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, middleOfArr);
  const secondHalf = wholeArray.slice(middleOfArr)
  return [firstHalf, secondHalf];
}

function merge(left, right){
  let sortedArr = [], leftIdx = 0, rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length){
      if(left[leftIdx] < right[rightIdx]) {
          sortedArr.push(left[leftIdx]);
          leftIdx++;
      } else {
          sortedArr.push(right[rightIdx]);
          rightIdx++;
      }
  }
  for(; leftIdx < left.length; leftIdx++) sortedArr.push(left[leftIdx]);
  for(; rightIdx < right.length; rightIdx++) sortedArr.push(right[rightIdx]);
  return sortedArr;
}

function mergeSort(array){
    //check if we are down to 1 value it our array and return it if we are
    if(array.length <= 1) return array;
    //if we aren't down to a single element area, split it up bmore
    array = split(array);
    //take the array we split up and recurse it to keey splitting it
    array = [mergeSort(array[0]), mergeSort(array[1])];
    return merge(array[0], array[1]);
}
