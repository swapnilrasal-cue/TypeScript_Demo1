var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed;
    }
    Car.prototype.getSpeed = function () {
        console.log("Speed of Car is :" + this.speed);
    };
    Car.prototype.Accelerate = function () {
        var accelerate = 10;
        var newSpeed = this.speed + accelerate;
        accelerate++;
        console.log("Accelerate Speed of Car by 10 :" + newSpeed);
    };
    Car.prototype["break"] = function () {
        var breaks = 10;
        var newSpeed2 = this.speed - breaks;
        breaks--;
        console.log("Brake Applied:" + newSpeed2);
    };
    Car.numberOfwheels = function () {
        console.log("------------------------------------");
        console.log("-----------CAR ENGINE CC------------");
        console.log("--------------CAR NAME--------------");
        console.log("------------------------------------");
    };
    Car.CC = "1800cc";
    Car.carname = "THAR";
    return Car;
}());
var car = new Car(100);
console.log(car.getSpeed());
console.log(car.Accelerate());
console.log(car["break"]());
console.log(Car.numberOfwheels());
