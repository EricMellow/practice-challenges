var a = 5;
var b = 5;
var c = a + b;
console.log(c);
var myVariable = 'This is a string';
var num = 5;
var myName = 'Eric';
var myBool = true;
// CLASS
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is a " + this.model);
    };
    return Car;
}());
var Prius = new Car('Tesla', 4, true);
Prius.displayMake();
var betterCar = {
    model: 'Roadster',
    make: 'Tesla',
    displaySound: function () { console.log('vroom'); }
};
