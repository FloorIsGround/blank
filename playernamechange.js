const para = document.querySelector('p');
        para.addEventListener('click', updateName);

        function updateName() {
            let name = prompt('Enter the user name');
            para.textContent = "Player 1: " + name
        }