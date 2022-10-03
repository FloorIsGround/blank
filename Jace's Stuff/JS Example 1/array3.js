let strings = ["Test", "MONThs", "TEST"];

strings.forEach((string) => {
    console.log(`${string.toLowerCase()}`);
})

let Mnumbers = [1,2,3,4,5,6,7,8,9];

Mnumbers.map((item) => {
    console.log(`The square of ${item} is ${item*item}`);
})

let multiples = [3,4,5];
function multiply(arg1, arg2, arg3) {
 console.log(arg1 * arg2 * arg3);
}

multiply(...multiples);

let arr1 = [1,2,3,4,5];
let arr2 = new Array(...arr1);
arr2.reverse();
arr1 = arr1.concat(arr2);
arr1.splice(4, 1)
console.log(arr1);

Mnumbers.forEach((item, index) => {
    console.log(`${item}'s index is ${index}`);
})

Mnumbers.reverse();
console.log(Mnumbers);

Mnumbers.sort((a, b) => a - b);
console.log(Mnumbers);