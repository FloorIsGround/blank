const Car = {
    doors: 4,
    color: "red",
    engine: "loud"
}

const ElectricCar = Object.create(Car);

ElectricCar.doors = 2;
ElectricCar.color = "green";
ElectricCar.engine = "silent";

for(let x in ElectricCar){
    console.log(x);
}

for(let [keys, vlaue] of Object.entries(ElectricCar)){
    console.log(`${keys} ${vlaue}`);
}