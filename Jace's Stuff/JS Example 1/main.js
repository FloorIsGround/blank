document.addEventListener('DOMContentLoaded', () => {
    let debug = true;
    function createParagraph() {
      const para = document.createElement('p');
      para.textContent = 'You clicked the button!';
      document.body.appendChild(para);
      if(debug == true){
        console.log("New line created.");
      }
    }
  
    const buttons = document.querySelectorAll('button');
  
    for (const button of buttons) {
      button.addEventListener('click', createParagraph);
    }
  });