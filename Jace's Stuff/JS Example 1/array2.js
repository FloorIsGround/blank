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