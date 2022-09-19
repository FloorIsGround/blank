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