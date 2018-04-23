describe('Split Array function', function() {
  it('handles non-empty array', function(){
    expect( split([1,4,5,3,7,6,2]) ).toEqual( [[1,4,5],[3,7,6,2]] );
    expect( split([1,2]) ).toEqual( [[1],[2]] );
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([4],[9]) ).toEqual( [4,9] );
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([4,5,6],[9,10,11]) ).toEqual( [4,5,6,9,10,11] );
  });
});

describe('Merge sort function', function() {
  it('organizes an array', function(){
    expect( mergeSort([1, 4, 5, 3, 7, 6, 2]) ).toEqual( [1, 2, 3, 4, 5, 6, 7] );
    expect( mergeSort([]) ).toEqual( [] );
    expect( mergeSort([1]) ).toEqual([1]);
    expect( mergeSort([100, 1, 4, 5, 3, 7, 6, 2]) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 100] );
  });
});
