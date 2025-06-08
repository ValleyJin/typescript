console.log('typescript 테스트 입니다. ');
var BMW = /** @class */ (function () {
    function BMW(c) {
        this.wheel = 4;
        this.door = 4;
        this.color = c;
    }
    BMW.prototype.start = function () {
        console.log('BMW go...');
    };
    BMW.prototype.stop = function () {
        console.log('BMW stop...');
    };
    return BMW;
}());
var Benz = /** @class */ (function () {
    function Benz(c) {
        this.wheel = 4;
        this.door = 4;
        this.color = c;
    }
    Benz.prototype.start = function () {
        console.log('Benz starts...');
    };
    Benz.prototype.stop = function () {
        console.log('Benz stops...');
    };
    return Benz;
}());
var AcademyCar = /** @class */ (function () {
    function AcademyCar(c) {
        this.name = '부릉이';
        this.wheel = 4;
        this.price = 1000;
        this.color = c;
    }
    AcademyCar.prototype.start = function () {
        console.log(this.name + ' 출발합니다');
    };
    return AcademyCar;
}());
var myCar = new BMW('green');
var myCar2 = new Benz('white');
var myCar3 = new AcademyCar('black');
myCar.start();
myCar2.stop();
myCar3.start();
