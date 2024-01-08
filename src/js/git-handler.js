document.getElementById('git-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleCommand(this.value);
        this.value = ''; // Clear input field
    }
});

function handleCommand(command) {
    const outputDiv = document.getElementById('output');
    const commandParts = command.split(' ');

    // Basic switch to handle different commands
    switch (commandParts[0]) {
        case 'git':
            if (commandParts[1] === 'pull') {
                outputDiv.textContent = "Orlando - Studente presso l'università di Padova e appassionato di web Development"; // Your brief description
            } else if (commandParts[1] === 'checkout') {
                if (commandParts[2] === 'about') {
                    window.location.href = 'src/pages/about.html';
                }
                else if (commandParts[2] === 'skills') {
                    window.location.href = 'src/pages/skills.html';
                }
                else if (commandParts[2] === 'progetti') {
                    window.location.href = 'src/pages/portfolio.html';
                }
                else if (commandParts[2] === 'contatti') {
                    window.location.href = 'src/pages/contacts.html';
                }
                else {
                    outputDiv.textContent = 'Command not recognized.';
                }

                // if (commandParts[2]) {
                //     window.location.href = 'src/pages/' + commandParts[2] + '.html'; // Switches to the page specified after 'git checkout'
                // }
            }
            break;
        default:
            outputDiv.textContent = 'Command not recognized.';
            break;
    }
}