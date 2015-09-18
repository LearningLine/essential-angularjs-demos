/**
 * Created by maurice on 9/18/2015.
 */

function Calculator() {
    this.add = function (x, y) {
        return (+x) + (+y);
    }
}



describe('The calculator', function () {

    it('can add 1 + 1', function(){
        var calc = new Calculator();

        var result = calc.add(1,1);

        expect(result).toBe(2)
    });


    it('can add "1" + "1"', function(){
        var calc = new Calculator();

        var result = calc.add('1','1');

        expect(result).toBe(2)
    });

    it('floats work', function(){
        expect(0.1 + 0.2).toBeCloseTo(0.3, 15);
    })
});

