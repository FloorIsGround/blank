const user = {
    username: "",
    password: "",
    id: "",
    datecreated: 0,

    printUser(){
        console.log(this.username);
    },
    validateUser(){
        let username = prompt("Enter username");
        let password = prompt("Enter password")
        if(this.validator(username, password)){
            return true;
        }
        return false;
    },
    validator(string1, string2){
        let firstTest = string1.toLowerCase() == this.username.toLowerCase();
        let secondTest = string2 == this.password;
        if(firstTest && secondTest){
            return true;
        }
        return false;
    }
}

/// New project
const library = [
    {
        author: "Jon",
        book: "Harry Potter",
        readingStatus: true
    },
    {
        author: "Doe",
        book: "Harry Potter",
        readingStatus: false
    },
    {
        author: "Sam",
        book: "Harry Potter",
        readingStatus: true
    }
]

library.forEach(item => {
    console.log("Author: "+ item.author);
    console.log("book: "+ item.book);
    console.log("Has it been read: "+ item.readingStatus);
})
///