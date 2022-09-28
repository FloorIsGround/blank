const student = {
    firstname : "",
    lastname : "",
    age: 0,
    grades: {
        english: 0,
        math: 0,
        science: 0,
        physed: 0,
        printGrades(){
            console.log("--- Grades ---");
            for( const [key, value] of Object.entries(this)){
                if(typeof value === 'function' ){
                    break;
                }
                console.log(key, value + "%");
                
            }
            return;
        }
    },

    //methods
    printInfo(){
        console.log("---------- Student Information ----------");
        console.log("Student's Name: " + this.firstname + " " + this.lastname);
        console.log("Age: " + this.age);
        //todo print grades
        this.grades.printGrades();

        this.displayStudentInfo();
        
    },
    displayStudentInfo() {
        const para = document.createElement('p');
        const head = document.createElement('h3');
        function newPara(key, value){
            para.textContent = key + ": " + value;
            document.body.appendChild(para);
        }
        for( const [key, value] of Object.entries(this)){
            if(typeof value === ('function' ||  'object')){
                break;
            }
            newPara(key, value);
            
        }

        
          console.log("New line created.");
      }

}

// student.printInfo();

//body html things









//random things 

function FillInfo(int){
    let objects = [];
    for(i = 0; i < int; i++){
        //creates new object in the array for a student
        objects.push(student)
        //generates a random first and last name using random characters
        objects[i].firstname = makeid();
        objects[i].lastname = makeid();
        objects[i].age = Math.floor(Math.random() * (18 - 15) + 15);
        //fill grades
        for(const property in objects[i].grades){
            if(typeof objects[i].grades[property] === 'function' ){
                break;
            }
            objects[i].grades[property] = randomPercent();
        }
        objects[i].printInfo();
    }
}

function randomPercent(){
    var num = Math.floor(Math.random() * 100)
    return num;
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }