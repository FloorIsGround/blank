function gradeScale(grade){
    if(grade < 60){
        return "F";
    }else if(grade < 70){
        return "D";
    }else if(grade < 80){
        return "C";
    }else if(grade < 90){
        return "B";
    }else{
        return "A";
    }
}

const student ={
    //Properties
    firstname: "Isaac",
    lastname: "Howard",
    id: 64638,
    grades: [89, 72, 95],
    //Methods
    getGrades(){
        for(i = 0; i < this.grades.length; i++){
            console.log("Class " + (i+1) + " Grade: " + gradeScale(this.grades[i]));
        }
    },
    getInfo(){
        console.log("First Name: " + this.firstname);
        console.log("Last Name: " + this.lastname);
        console.log("ID Number: " + this.id);
        console.log("Class Grades: " + this.grades);
    }
}

student.getInfo();
student.getGrades();