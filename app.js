class PersonAccount {
    constructor(firstName, lastName, income, expenses) {
        this.firstName = firstName
        this.lastName = lastName
        this.income = income
        this.expenses = expenses
    }

    // Methods
    totalIncome() {
        console.log(`Total income : ${this.income}`);
    }

    totalExpenses() {
        console.log(`Total epense : ${this.expenses}`);
    }

    addIncome() {
        console.log(`Add income here function`);
    }

    accountBalance() {
        console.log(`Account balance method`);
    }
}
const P = new PersonAccount("Shoaib", "Muhammad", 10000, 9000);
console.log(P);
P.totalIncome();
P.totalExpenses();
P.addIncome();
P.accountBalance();


class Automobile {
    constructor(name, model, color, type) {
        this.name = name
        this.model = model
        this.color = color
        this.type = type
    }
    // methods
    start() {
        console.log("Press 1 to start the car.");
    }
    openDoor() {
        console.log("Press 1 to open the door.");
        console.log("Press 0 to close the door.");
    }
}
const AutomobileObj = new Automobile("Toyota", 2020, "Black", "Petrol");
console.log(AutomobileObj);


class Car extends Automobile {
    super(maxspeed, maxPersonCapacity, fuelType, fuelCapacity, wheels) {
        this.maxspeed = maxspeed
        this.maxPersonCapacity = maxPersonCapacity
        this.fuelType = fuelType
        this.fuelCapacity = fuelCapacity
        this.wheels = wheels
    }
}
const C = new Car("240km/h", 4, "Petrol", "48L", 4);
console.log(C);


class Truck extends Automobile {
    super(maxspeed, fuelType, maxFuelCapacity, wheels) {
        this.maxspeed = maxspeed
        this.fuelType = fuelType
        this.maxFuelCapacity = maxFuelCapacity
        this.wheels = wheels
    }
}
const T = new Truck("180km/h")
console.log(T);


class Bus extends Automobile {
    super(maxSpeed, personCapacity, wheels, fuelType, fuelCapacity) {
        this.maxSpeed = maxSpeed
        this.personCapacity = personCapacity
        this.wheels = wheels
        this.fuelType = fuelType
        this.fuelCapacity = fuelCapacity
    }
}
const B = new Bus("220km/h", 52, 4, "Petrol", "72L");
console.log(B);
