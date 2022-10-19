//private
//public
//static
//Classes vs Prototype

class Pizza{
    crust = "Cheese" //Public
    #sauce = "Traditional"; //Private
    constructor(pizzaSize, pizzaType){
        this.size = pizzaSize,
        this.type = pizzaType;
    }
    //Get
    get getCrust(){
        return this.crust + " crust";
    }
    //Set
    set setCrust(newcrust){
        this.crust = newcrust;
    }
    //Method
    order(){
        console.log(`Your order a ${this.size} ${this.type} with ${this.#sauce} sauce and ${this.getCrust}`);
    }
}

let pizza = new Pizza("Large", "Pepperoni");

pizza.setCrust = "Regular"; 
// pizza.order();

let personC = class{
    constructor(nm, id){
        this.name = nm;
        this.id = id;
    }

    get getDetails(){
        return `${this.name} ${this.id}`;
    }
}

let bob = new personC("Bob", 123);
// console.log(bob.getDetails);

let EmployeeC = class extends personC{
    constructor(nm, id, salary){
        super(nm, id);
        this.salary = salary;
    }
    get employeeInfo(){
        return `${this.name} ${this.id} salary: ${this.salary}`
    }
}

let sam = new EmployeeC("sam", 456, 30000);
// console.log(sam.employeeInfo);

let personP = function(nm, id){
    this.name = nm;
    this.id = id;
}

personP.prototype.getDetails = function(){
    return `${this.name} ${this.id}`;
}

let fred = new personP("fred", 789);
console.log(fred.getDetails());

let EmployeeP = function(nm, id, salary){
    personP.call(this, nm, id);
    this.salary = salary;
}

Object.setPrototypeOf(EmployeeP, personP.prototype);

EmployeeP.prototype.employeeInfo = function(){
    return `${this.name} ${this.id} ${this.salary}`;
}

let john = new EmployeeP("John", 432, 30000);
console.log(john.employeeInfo());