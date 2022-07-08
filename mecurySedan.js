import  vehicle  from "./vehicle";

const VehicleModule = require('./vehicle').vehicle

class Car extends vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false
    }

    loadPassenger(num) {

    }

    startCar() {

    }

    scheduleService(mileage) {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
        return
    }
}
//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

Car()