function gradeConvert(grade){
    if(grade > 90){
        return 'A';
    }
    if (grade > 80) {
        return 'B';
    }
    if (grade > 70) {
        return 'C';
    }
    if (grade > 60) {
        return 'D';
    }
    else {
        return 'F';
    }

}

const Student = {
    firstName:"Ethan",
    lastName:"Klausmeyer",
    major:"Computer Science",
    cources:[
        {
            class:"Frount End Web Development",
            grade: 87
        },
        {
            class:"Assembly Language",
            grade: 77
        },
        {
            class:"American History",
            grade: 67
        },
        {
            class:"Tech in Society",
            grade: 37
        }
    ],
        print(){
            console.log(`${Student.firstName} ${Student.lastName} has a major of ${Student.major}`);
        },
        printGrades(){
            Student.print();
            console.log(`Grades:`);
            for(i=0;i<Student.cources.length;i++){
                let grade = gradeConvert(Student.cources[i].grade)
                console.log(`${Student.cources[i].class} has a grade of ${grade}`);
            }
        }
    }

    Student.printGrades();
