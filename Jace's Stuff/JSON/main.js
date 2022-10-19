//JSON.stringify()

//JSON.parse()


const jsonobj = {
    username: "zom",
    password : "test",
    value : 1,
    online : true
}
let sendobj = JSON.stringify(jsonobj);
console.log(sendobj);

let newobj = JSON.parse(sendobj);
newobj.username = "ZombGuy";
newobj.password = "1234";
console.log(newobj);
console.log(typeof sendobj);
console.log(typeof newobj);
localStorage.setItem("myObj", sendobj);

const users = fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    console.log(response);
    return response.json();
}).then((data)=> {
    data.forEach(element => {
        console.log(element);
    })
})