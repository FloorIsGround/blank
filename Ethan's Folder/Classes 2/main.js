// class Pizza{

// crust = "cheese" //Public
// #sauce = "traditional" //Private

//     constructor(pizzaSize, pizzaType){
//         this.size = pizzaSize,
//         this.type = pizzaType
//     }

//     getCrust(){
//         return this.crust
//     }
//     setCrust(crust){
//         this.crust = crust
//     }

//     order(){
//         console.log(`Your order ${this.type} with ${this.#sauce} sauce ${this.crust}`);
//     }
// }

// let myPizza = new Pizza("Large", "Original")
// myPizza.order();

let PersonC = class{
    constructor(nm, id){
        this.name = nm,
        this.id = id
    }

    getDetails() {
        return `${this.name} ${this.id}`
    }
}

let bob = new PersonC("Bob", 123)
bob.getDetails()

let EmployeeC = class extends PersonC{
    constructor(nm, id, salery){
        super(nm, id),
        this.salery = salery
    }

    employeeInfo(){
        console.log(`${this.name} ${this.id} ${this.salery}`);
    }
}

let sam = new EmployeeC("Sam", 123, 30000)
sam.employeeInfo();

let PersonP = function(nm, id){
    this.name = nm,
    this.id = id
}

PersonP.prototype.getDetails = function(){
    return `${this.name} ${this.id}`
}

let fred = new PersonP("Fred", 789)
console.log(fred.getDetails());

let EmployeeB = function(nm, id, salery){
    PersonP.call(this, nm, id)
    this.salery = salery
}

Object.setPrototypeOf(EmployeeB, PersonP.prototype)

EmployeeB.prototype.employeeInfo = function(){
    return `${this.name} ${this.id} ${this.salery}`
}

let john = new EmployeeB("Jhon", 123, 40000)