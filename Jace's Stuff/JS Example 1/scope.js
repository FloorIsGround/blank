//var, let, const
//let can overwrite initialized variables, cannot define more than once
//var can overwrite initailized variables, can define multiple times
var x = 5;
console.log(x);
var x = 6;
console.log(x);


 //static variables


 //global scope
let y = 6;
y = 7;
console.log(y);
 //local scope
 //code block specific variables
{
    const z = 10;
    console.log(z);
}
//console.log(z);
// console.log(z) causes error because outside of the variables scope locally
//local scope can be within functions and other local scopes

 //function scope

function myFunc(){
    let z = 11;

    console.log(z);

    {
        const z = 20;
        console.log(z);
    }
}

myFunc();




// NEW STUFF

console.log(" ");
console.log(" ");
console.log(" ");

var a = 5;
let b = 6;
const c = 7;
//grave accents allow you to use variables within a string
console.log(`global: ${a}`);
console.log(`global: ${b}`);
console.log(`global: ${c}`);

testFunc();
function testFunc(){
    var a = 8;
    let b = 9;
    const c = 10;
    console.log(`function scope: ${a}`);
    console.log(`function scope: ${b}`);
    console.log(`function scope: ${c}`);

    {
        var a = 11;
        let b = 12;
        const c = 13;
        console.log(`local scope: ${a}`);
        console.log(`local scope: ${b}`);
        console.log(`local scope: ${c}`);
    }
}