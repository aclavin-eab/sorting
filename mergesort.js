function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  const middleOfArr = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, middleOfArr);
  const secondHalf = wholeArray.slice(middleOfArr)
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf){
  let sortedArr = [];
  while (firstHalf[0] || secondHalf[0]){
      if ((!firstHalf[0] || firstHalf[0] > secondHalf[0]) && secondHalf[0]){
        sortedArr.push(secondHalf[0]);
        secondHalf.shift();
      } else {
        sortedArr.push(firstHalf[0]);
        firstHalf.shift();
      }
  }
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
