function countDown(number){
    console.log(number);
    const newNumber = number - 1;
    //base condition
    if(newNumber > 0){
        countDown(newNumber);
    }
}

//countDown();