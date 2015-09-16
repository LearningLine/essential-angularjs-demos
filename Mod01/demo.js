/**
 * Created by maurice on 9/16/2015.
 */
(function () {
    'use strict';
    var x;
    console.log(typeof x);
    x = 1;
    console.log(typeof x);
    x = null;
    console.log(typeof x);
    x = function () {
    };
    console.log(typeof x);
    console.log(typeof x);
    x = new Date();
    console.log(typeof x);
    x = {};
    console.log(typeof x);

    x = [];
    console.log(typeof x);

    console.log(0.1 + 0.2);
    console.log(0.2 + 0.2);


    console.log(typeof null);
    console.log(typeof undefined);
    var undefined = 1;
    console.log(typeof undefined);


    function test1() {
        console.log(typeof undefined);
        var undefined = 1;
        console.log(typeof undefined);
    }

    test1();


    var data = [1, 2];
    console.log(data);
    data[20] = 'Twenty';
    console.log(data, data.length);

    var o = {x: 1, name: 'Maurice'};
    console.log(o);


//o.cla ss = 'foo';
    o['cla ss'] = 'foo';
    console.log(o);

    function scopeIt() {
        'use strict';
        var scoped = 1;
        var notScoped = 2;
        console.log(scoped, notScoped);
    }

    scopeIt();


    function getData() {
        return {
            data: true
        };
    };

    var data = getData();
    console.log(data);

//
//getData()
//[1,2,3].map(function(){});


    if (!!data) {

    }


    console.log("0 == '0'", 0 == '0')
    console.log("0 == ''", 0 == '')
    console.log("false == 'false'", false == 'false')
    console.log(false)
    console.log(+false)
    console.log('false')
    console.log(+'false')


    window.getData = getData;

    function Mamal() {

    }

    Mamal.prototype.move = function () {
        console.log('Moving');
    }


    function Person(name) {
        this.name = name;
    }

    Person.prototype = new Mamal();

    Person.prototype.sayHello = function () {
        console.log("Hello", this.name);
    };


    var maurice = new Person('Maurice');
    maurice.sayHello();
    maurice.move();
}());