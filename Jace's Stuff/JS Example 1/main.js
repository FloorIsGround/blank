document.addEventListener('DOMContentLoaded', () => {
    function createParagraph() {
      const para = document.createElement('p');
      para.textContent = 'You clicked the button!';
      document.body.appendChild(para);
        console.log("New line created.");
    }
  })