const myObj = {
    firstname: "Sam",
    email: "sam@gmail.com",
    hobbies: ["eat", "sleep", "code"]
}

console.log(myObj);
console.log(typeof myObj);

//convert the obj to string
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

localStorage.setItem("myObj", sendJSON)


const reciveJSON = JSON.parse(sendJSON);

console.log(reciveJSON);


const users = fetch("https://jsonplaceholder.typicode.com/users").then((responce) => {
    console.log(resonse);
    return responce.json()
}).then((data) => {
    data.forEach(data =>{
        console.log(data);
    })
})