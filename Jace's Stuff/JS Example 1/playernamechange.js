const para = document.querySelector('p');
        para.addEventListener('click', updateName);
        let debug = true;
        function updateName() {
            let name = prompt('Enter the user name');
            if(debug == true){
                console.log("User prompted for name change.");
                console.log("User changed name to " + name + ".");
            }
            para.textContent = "Player 1: " + name

        }