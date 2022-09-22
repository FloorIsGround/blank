//Declaring an array

//Syntax 1 let arrayName = [];
let fruits = [];

//Syntax 2 let arrayName = new Array ();


fruits = ["apple", "orange", "lemon"];
let colors = new Array("red", "blue", "yellow", fruits);
console.log(fruits);


//Mixed Values

const mix = ["Hello", 2, 3.4, true, fruits, colors];
console.log(mix);

let seaCreatures = [];

seaCreatures[0] = "shark";
seaCreatures[1] = "squid";
seaCreatures[2] = "shark";
seaCreatures[4] = "";
seaCreatures[5] = colors;
console.log(seaCreatures);


//Accessing values inside an array

console.log(seaCreatures[3]);
console.log(seaCreatures[5][3][1]);

//Adding values at the end of an array
seaCreatures.push("fish");
console.log(seaCreatures);
//
seaCreatures.pop("fish");

seaCreatures.unshift("fish");

seaCreatures.shift("fish");