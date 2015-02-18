/**
 * Created by Student on 18/02/2015.
 */

describe('The calculator', function () {
    var calc;

    beforeEach(module('demoApp'));

    beforeEach(inject(function (calculator) {
        calc = calculator;
    }));

    it('can add 1 + 1', function () {

        var result = calc.add(1, 1);

        expect(result).toBe(2);
    })

    it('can add 1 + 1', function () {

        var result = calc.add('1', '1');

        expect(result).toBe(2);
    })

});
