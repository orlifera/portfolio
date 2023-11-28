document.addEventListener('DOMContentLoaded', function () {
    // Determina la root del sito (ad esempio, http://tuo-sito.com/)
    var siteRoot = window.location.origin + '/';

    // Ottieni l'URL corrente della pagina
    var currentPageUrl = window.location.href;

    // Imposta il percorso base per le immagini
    var imagePath;

    // Controlla se la pagina corrente è l'index o si trova in una sottocartella
    if (currentPageUrl === siteRoot) {
        // Sei nella root (index)
        imagePath = 'src/assets/images/';
    } else {
        // Sei in una sottocartella (ad esempio, src/pages)
        imagePath = '../assets/images/';
    }

    // Seleziona gli elementi immagine nella navbar e imposta il loro src
    var sunIcon = document.querySelector('#navbar .icons img[alt="sun"]');
    var moonIcon = document.querySelector('#navbar .icons img[alt="moon"]');

    sunIcon.id = 'sunIcon';
    moonIcon.id = 'moonIcon';
    sunIcon.className = 'icons';
    moonIcon.className = 'icons';

    if (sunIcon && moonIcon) {
        sunIcon.src = imagePath + 'sun.png';
        moonIcon.src = imagePath + 'moon.png';
    }

    // Crea il contenitore del pulsante
    var switchBtn = document.createElement('label');
    switchBtn.setAttribute('for', 'switch');
    switchBtn.innerHTML = `
        <div class="icons">
      <img src="${imagePath}moon.png" alt="moon" />
      <img src="${imagePath}sun.png" alt="sun" />
    </div>
  `;

    // Seleziona il li dove inserire il pulsante
    var switchLi = document.getElementById('switch');

    // Crea e inserisci il checkbox
    var switchCheckbox = document.createElement('input');
    switchCheckbox.type = 'checkbox';
    switchCheckbox.id = 'switch';
    switchLi.appendChild(switchCheckbox);

    // Inserisci il pulsante nel li
    switchLi.appendChild(switchBtn);

    // Qui puoi aggiungere la logica per gestire il cambio di tema
});
