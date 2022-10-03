//Create object for the student

const users = {

    student:
    [
        {
            firstName: "sam",
            lastName: "smith",
            courses: ["front-end 1", "back-end 1", "mobile 1"],
            grades: ["A", "B", "A"]
        },
        {
            firstName: "John",
            lastName: "Doe",
            courses: ["front-end 1", "back-end 1", "mobile 1"],
            grades: ["B", "B", "A"]
        },
        {
            firstName: "Bill",
            lastName: "Cody",
            courses: ["front-end 1", "back-end 1", "mobile 1"],
            grades: ["A", "B", "A"]
        }
    ],
    //method to print the student info
    studentInfo(){
        this.student.forEach(val => {
            console.log(val);
        })
    }
}

users.studentInfo();

//create a function to print the grades

const grades =()=>{
    users.student.forEach(val => {
        console.log(`Student ${val.firstName} from the course ${val.courses} has grades ${val.grades}`)
    })
}

grades();

const professor ={
    firstName: "Harry",
    email: "harry@gmail.com",
    location: "Hammond Hall",
    courses: [
        {title: "front-end 1", students: 30},
        {title: "back-end 1", students: 30},
        {title: "Mobile 1", students: 30},
    ]
}
let keys = Object.keys(professor);
keys.forEach(key => {
    console.log(key);
})

//for in loop

for(let keys in professor){
    console.log(keys);
}

//for of loop

for(let [keys, values] of Object.entries(professor)){
    console.log(`${keys} ${values}`)
}

//Creating an object
// const vehicle = new Object();
// vehicle.doors = 4;
// vehicle.color = "red";
// vehicle.engine= function(){
//     console.log("Vroom");
// }

// console.log(vehicle);

const vehicle ={
    doors: 4,
    color: "red",
    engine(){
        console.log("Vroom");
    }
}
 const car = Object.create(vehicle);
//  car.color = "Blue";
 console.log(car);
 car.engine();

 const truck = Object.create(vehicle);
 truck.color = "Green";
 delete truck.doors;
 delete truck.__proto__.doors;
 truck.engine = function(){
    console.log("The engine stays silent.");
 }

 truck.engine();
 console.log(truck.doors);

 //destructuring
 const person ={
    firstName: "Sam",
    id: 4567
 }

 let {lastName: firstName, otherId: id} = person;

 console.log(lastName + otherId);