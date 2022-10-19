class Automobile{
    constructor(doors, engine, color, speed){
        this.type = "Automobile",
        this.doors = doors,
        this.engine = engine,
        this.color = color,
        this.speed = speed
    }

    getDoors(){return this.doors}
    setDoors(doors){this.doors=doors}
    getEngine(){return this.engine}
    setEngine(engine){this.engine = engine}
    getColor(){return this.color}
    setColor(color){this.color = color}
    getSpeed(){return this.speed}
    setSpeed(){this.speed = speed}

    printStats(){
        console.log(`This ${this.type} has ${this.doors} doors, has a color of ${this.color}, and is equiped with a ${this.engine} engine that can reache a top speed of ${this.speed}MPH.`);
    }
}

class ElectricCar extends Automobile{
    constructor(doors, engine, color, speed){
        super(doors, engine, color, speed),
        this.type = "Electric Car",
        this.gasUse = 0
    }

    printStats(){
        console.log(`This ${this.type} has ${this.doors} doors, has a color of ${this.color}, and is equiped with a ${this.engine} engine that can reache a top speed of ${this.speed}MPH and uses ${this.gasUse} gas.`);
    }
}

let myCar = new Automobile(4, "6 cylander", "White", 120);
myCar.printStats();
let myElectricCar = new ElectricCar(4, "Quiet", "White", 160)
myElectricCar.printStats();