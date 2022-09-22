function pet(name){
    //outer function
    function getName(){
        //inner function
        //accessing the value within the function
        return name;
    }
    return getName();
}

let myPet = pet('coco');
console.log(myPet);



function Pawn(pawn){
    function getPawn(){
        return pawn;
    }
    return getPawn();
}

function recursiveCall(arg){
    const length = arg.length - 1;
    console.log(arg.length);
    return recursiveCallz(arg, length);
}

function recursiveCallz(arg, length){
    if(length >= 0){
        console.log(Pawn(arg[length]))
        return recursiveCallz(arg, length - 1);
    }else{
        console.log("Thats all!");

    }
}

var Namelist = [];
recursiveCall(Namelist);
var s = 0;
function addName(){
    let string = prompt("Name to be added:");
    console.log(string);
    Namelist.push(string);
    const para = document.createElement('p');
        para.textContent = string;
        document.body.appendChild(para).setAttribute("id", s);
        s++;
        
}
function removeName(){
    Namelist.pop();
    updateName();
}

const para = document.getElementById("nameList");
const addButton = document.getElementById("addName");
const removeButton = document.getElementById("removeName");     
addButton.addEventListener('click', addName()); 
          
            for (const button of addButton) {
              addButton.addEventListener('click', createParagraph);
            }

para.addEventListener('click', updateName());        
        function updateName() {
            para.textContent = Namelist[0];
        }