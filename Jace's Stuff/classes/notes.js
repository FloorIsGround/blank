//Classes

/*
    templates for creating objects
    classes are built on prototypes
    but also have
*/

//Class Constructor
//Getters and Setters
//Inheritance
//Private and Public Properties


//Before ES6
//prototype based usage of a class
function Person(name) {
    this.name = name
}

Person.prototype.getName = function(){
    return this.name;
}

let jhon = new Person("Jhon Doe");
console.log(jhon);

//After ES6
/* 
class
extends
constructor
super
getter /get
setter /set
*/

class Rectangle {
    constructor(width, length){
        if(length === undefined){
            this.length = 20;
        }else{
            this.length = length;
        }
        this.width = width;
        
    }
    calcArea(){
        return this.width * this.length;
    }
}

let square = new Rectangle(4,4);
let square2 = new Rectangle(18);
// console.log(square);
// console.log(square.calcArea());
// console.log(square2);
// console.log(square2.calcArea());

class Pizza{
    constructor(pizzaSize, pizzaType){
        this.size = pizzaSize,
        this.type = pizzaType,
        this.crust = "Cheese",
        this.toppings = [];
    }
    
    //Getter will give access to the property
    get pizzaType(){
        return this.type;
    }

    get getTop(){
        return this.toppings;
    }

    //Setter wil set the values to the property
    set pizzaType(pizzaType){
        this.type = pizzaType;
    }
    set addtopping(top){
        this.toppings.push(top);
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.type} pizza with ${this.crust} crust with toppings of ${this.toppings}.`)
    }
}

let myPizza = new Pizza("Large", "Pepperoni");
myPizza.addtopping = "Pepperoni";
myPizza.addtopping = "Extra Cheese";
myPizza.bake();

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize, pizzaType){
        super(pizzaSize, pizzaType);

    }
    slice(){
        console.log(` Our ${this.size} ${this.pizzaType} pizza has 8 slices`);
    }
}

let myPizza2 = new SpecialtyPizza("Medium", "Anchovy");
myPizza2.bake();
myPizza2.slice();
