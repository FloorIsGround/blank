//Object syntax
const person = {
    //Properties
    firstname: "John",
    lastname: "Doe",
    height: "6'2",
    weight: 180,
    //Nested Objects
    hobbies: ["eat", "code", "sleep"],
    beverage: {morning: "coffee", evening: "tea"},
    //Methods
    greeting(){
        let today = new Date;
        console.log(today.getHours());
        if(today.getHours() < 12){
            console.log(`Hello ${this.firstname}am. Good morning, its time for ${this.beverages.morning}`)
        }else{
            console.log(`Hello ${this.firstname}am. Good evening, its time for ${this.beverages.evening}`)
        }
    },
    myMethod: function(){
        console.log("Hello World!");
    }
};

//Two ways to retrieve an object property

//Dot Notation
console.log(person.firstname);
console.log(person["firstname"]);
console.log(person.hobbies[1]);
person.myMethod();
person.greeting();

console.log(this);

const library =[
    {
        author: "Jon",
        book: "Harry Potter",
        readingStatus: true
    },
    {
        author: "Doe",
        book: "Harry Potter",
        readingStatus: false
    },
    {
        author: "Sam",
        book: "Harry Potter",
        readingStatus: true
    }
]

for(i=0;i<library.length;i++){
    if(library[i].readingStatus){
        console.log("Already read the book");
    }else{
        console.log("Still needs reading");
    }
}