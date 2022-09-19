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

var Marc = ["Jerry", "Joe", "Jimmy" , "Jimbob", "Marco", "Malinakus", "Jack", "Jane"];
recursiveCall(Marc);