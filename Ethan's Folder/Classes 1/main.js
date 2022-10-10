function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

let jhon = new Person("Jhon Doe");
console.log(jhon.getName());

//Before ES6



// After ES6

class Rectangle{
    constructor(width, length){
        this.width = width;
        this.length = length;
    }


    calcArea() {
        return this.width * this.width;
    }
}

const square = new Rectangle(10, 10);
console.log(Rectangle.calcArea());


class Pizza{
    constructor(size, type, crust){
        this.size = size,
        this.type = type,
        this.crust = crust,
        this.toppings = []
    }

    getType(){
        return this.type;
    }

    setType(type){
        this.type = type;
    }

    getToppings(){
        return this.toppings;
    }

    setToppings(toppings){
        this.toppings = toppings
    }

    bake(){
        console.log(`Baking a ${this.size} ${this.type} pizza with ${this.crust} crust`);
    }
}
let myPizza = new Pizza( "Medium", "Original", "Cheese");
myPizza.bake();



class SpecialityPizza extends Pizza{
    constructor(pizzaSize, pizzaType){
        super(pizzaSize, pizzaType);
    }
}

let myPizza2 = new SpecialityPizza();
myPizza2.bake();

