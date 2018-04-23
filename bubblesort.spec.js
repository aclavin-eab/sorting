describe('Bubble Sort', function(){
    beforeAll(function(){
        spyOn(window, 'swap').and.callThrough();
    })
    it('handles an empty array', function(){
        expect( bubbleSort([] )).toEqual( [] );
    });

    it('handles a single element array', function(){
        expect( bubbleSort([9])).toEqual([9]);
    });

    it('sorts an array of numbers', function(){
        expect( bubbleSort([10, 100, 3, 17, 59, 49])).toEqual([3, 10, 17, 49, 59, 100]);
        expect(window.swap.calls.count()).toEqual(6);
    })
});
