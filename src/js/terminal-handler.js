const cursorElement = document.querySelector('.cursor');
const textElement = document.getElementById('first-line');
const text = "Hello World! Questo è un portfolio fatto con HTML, CSS e Javascript. Per cambiare pagina, git checkout, per avere una mia breve descrizione git pull ";
let index = 0;

function typeText() {
    if (index < text.length) {
        textElement.insertBefore(document.createTextNode(text.charAt(index)), cursorElement);
        index++;

        if (index % 15 === 0) {
            setTimeout(typeText, 1000); // Wait for 1 second after every 15 characters
        } else {
            setTimeout(typeText, 100); // Continue typing with no delay
        }
    }
}


typeText(); // Start the animation;