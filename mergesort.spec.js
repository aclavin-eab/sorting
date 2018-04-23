describe('Split Array function', function() {
  it('handles non-empty array', function(){
    expect( split([1,4,5,3,7,6,2]) ).toEqual( [[1,4,5],[3,7,6,2]] );
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([[4],[9]]) ).toEqual( [4,9] );
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([[4,5,6],[9,10,11]]) ).toEqual( [4,5,6,9,10,11] );
  });
});
