(function () {
    //'use strict';
    var obj = {
        x: 1,
        name: 'Maurice',
        o2: {
            y: true
        }
    };

    console.log(obj.o2.y);

    obj['some key'] = 'value';
    console.log(obj);

    console.log(0.1 + 0.2);
    console.log(0.1 + 0.2 == 0.1 + 0.2);
    console.log(0.1 + 0.2 == 0.3);
    console.log(1 + 2);


    console.log(new Date());
    console.log(new Date(2015, 2, 16));
    console.log(new Date(2015, 12, -31));


    var anonymous = function () {
        console.log('Anonymous function');
    }

    function named() {
        console.log('Named function')
    }


    named();
    anonymous();

    obj = [1];

    if (obj.length) {
        console.log('obj is thruthy');
    } else {
        console.log('obj is falsy');
    }

    console.log(1 == '1');
    console.log(false == 'false');
    console.log(+false);
    console.log(+'false');

    console.log(1 === '1');
    console.log(false === 'false');


    function getData() {
        return {
            x: 42
        };
    }

    console.log(getData());


    var data = [1, 2];
    data[10] = 10;

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }

    console.table(data);


    function printName() {
        var myname = 'Maurice'
        console.log(myname);
    }

    console.log(window.myname);
    printName();
    console.log(window.myname);


    function doIt() {
        console.log(baz)

        var baz = 12;

        console.log(baz)
    }

    doIt();

    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.eat = function () {
        console.log(this.name + ' is eating');
    }

    function Dog(name) {
        Animal.call(this, name);
        this.dogname = name;
    }

    Dog.prototype = new Animal();

    Dog.prototype.bark = function () {
        console.log(this.dogname + ' is barking');
    }

    var pluto = new Dog('pluto');
    pluto.bark();
    pluto.eat();

    pluto.eat = function () {
        console.log('Not hungry')
    }
    pluto.eat();

    delete pluto.eat;
    pluto.eat();
    delete     Dog.prototype.prototype.eat;
    pluto.eat();

    console.log(Dog.name);
    console.log(Dog.length);
})();
