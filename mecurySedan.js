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
        if (this.passanger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " If you didn't fit in you gotta walk or call an Uber! ")
            }
            // else {
            //     console.log(this.model + " " + this.make + " is full");
            // }
        }
    }

    startCar() {

    }

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
        return
    }
}
//this shows how to call from this module...
let myCar = new Car ("Hyundai", "Sonata", "2021", "color", "mileage");


myCar.start()
myCar.loadPassenger()
myCar.stop()
myCar.checkService()

console.log(myCar)