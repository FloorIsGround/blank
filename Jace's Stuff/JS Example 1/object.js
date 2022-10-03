//object declaration
const person = {
    //properties of the object
firstname : "John Burg",
lastname : "Doe",
hobbies : ["reading", "writing", "eating"],
beverage : {
    morning: "coffee",
    evening: "tea"},
//methods of the object
    greeting(){
    console.log("Hello World!");
    },
    fullname(){
        //keyword this for accessing the current object
        console.log(this.firstname + " " + this.lastname)
    }

}

//two kinds of access notation bracket and dot

//dot notation
console.log(person.firstname, person.lastname, person.hobbies[2], person.beverage.morning);
person.greeting();

//bracket notation

console.log(person["firstname"], person["lastname"], person["hobbies"][2], person["beverage"]["morning"]);


let people = new Array("John", "Joe", "Jerry");
people.map(item => {
    item = new person;
})

console.log(people);