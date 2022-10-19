//Class Task: represent the task
class Task{
    constructor(title, description, status){
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

//Class UI: Handles the UI(ADD TASK)
class UI{
    static displayTask(){
        const StoredTasks = [
            {
                title: "Task One",
                description: "Grocery Shopping",
                status: "incomplete"
            },
            {
                title: "Task Two",
                description: "Cleaning",
                status: "incomplete"
            }
        ];
        const tasks = StoredTasks;

        tasks.forEach((task) => UI.addTaskToList(task));

    }

    static addTaskToList(task){
        const list = document.querySelector("#task-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${task.title}</td>
        <td>${task.description}</td>
        <td>${task.status}</td>
        `;
        list.appendChild(row);
    }
}

//Event Display task
document.addEventListener("DOMContentLoaded", UI.displayTask());
//Event Add task
document.querySelector("#task-form").addEventListener("submit", (e) => {
    //get values
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const status = document.querySelector("#status").value;

    const task = new Task(title, description, status);

    UI.addTaskToList(task);

})
