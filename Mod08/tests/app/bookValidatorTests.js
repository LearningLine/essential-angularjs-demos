/**
 * Created by maurice on 9/18/2015.
 */

describe('The bookValidator service', function(){
    var _bookValidator;

    beforeEach(module('theApp'));

    beforeEach(inject(function(bookValidator){
        _bookValidator = bookValidator;
    }));

    it('pass a valid book', function(){
        var result = _bookValidator.validate({title:'a', author:'a'});

        expect(result).toEqual([]);
    });


    it('pass a valid book', function(){
        var result = _bookValidator.validate({});

        expect(result).toEqual(['A book needs a title.', 'A book needs an author.']);
    });
});
