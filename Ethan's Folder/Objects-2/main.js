const Professor = {
    firstName: "Harry",
    email: "harry@gmail.com",
    location: "Hammond Hall",
    cources: [
        {title: "front-end 1", students: 30},
        {title: "back-end 1", students: 30},
        {title: "mobile 1", students: 30},
    ]
}

let keys = Object.keys(Professor)

keys.forEach(key => {
    console.log(key);
})

for(let keys in professor){
    console.log(keys);
}

// const vehicle = new Object();
// vehicle.doors = 4;
// vehicle.color = "red";
// vehicle.engine = function(){
//     console.log("Vroom");
// };


// console.log(vheicle);

const vehicle = {
    doors: 4,
    color: "red",
    engine(){
        console.log(`No of doors ${this.door} and the color is ${this.color}`)
    }
}

const car = Object.create(vehicle);
car.color = "blue";
car.engine = function(){
    console.log("The engine says vroom")
}

car.engine();


const truck = Object.create(vehicle);
truck.color = "green";
delete truck.doors;
truck.engine = function(){
    console.log("The engine is silent")
}
delete truck.doors;
console.log(truck.doors);

