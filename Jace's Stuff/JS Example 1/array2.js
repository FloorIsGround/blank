let months = ["jan", "mar", "apr" , "may"];
console.log(months);

months.splice(1, 0, "feb");
console.log(months);

// months[2] = 2;
// console.log(months);
// months.splice(1, 1);
// console.log(months);
let sliceMonths = months.slice(1,2);
console.log(sliceMonths);

let reverseMonths = months.reverse();
console.log(reverseMonths);

let indexOfMonths = months.indexOf("apr");
console.log(indexOfMonths);

let lIndexofMonths = months.lastIndexOf("apr");
console.log(lIndexofMonths);

let number2 = [123, 453, 73, 8, 10];

number2.forEach((item, index, array) => {
    console.log(`${item} index of is ${index} in ${array}`);
})

number2.map((item) => {
    console.log(`${item} is multiplied by 3 and the result is ${item*3}`);
})