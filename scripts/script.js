// Script pour changer le text après avoir cliquer sur le boutton suivant ou précédent

document.addEventListener('DOMContentLoaded', () => {
    const dialogue1 = document.querySelector('.dialogue1');
    const dialogue2 = document.querySelector('.dialogue2');
    const precedentBtn = document.getElementById('precedent');
    const suivantBtn = document.getElementById('suivant');

    suivantBtn.addEventListener('click', () => {
        dialogue1.style.display = 'none';
        dialogue2.style.display = 'block';
    });

    precedentBtn.addEventListener('click', () => {
        dialogue1.style.display = 'block';
        dialogue2.style.display = 'none';
    });
});


// Script pour changer le text après avoir cliquer sur le boutton suivant ou précédent

document.addEventListener('DOMContentLoaded', () => {
    const avatar1 = document.querySelector('.avatar1');
    const avatar2 = document.querySelector('.avatar2');
    const precedentBtn = document.getElementById('precedent');
    const suivantBtn = document.getElementById('suivant');

    suivantBtn.addEventListener('click', () => {
        avatar1.style.display = 'none';
        avatar2.style.display = 'block';
    });

    precedentBtn.addEventListener('click', () => {
        avatar1.style.display = 'block';
        avatar2.style.display = 'none';
    });
});

// Script pour changer la video

document.addEventListener('DOMContentLoaded', () => {
    const vid1 = document.getElementById('vid1');
    const vid2 = document.getElementById('vid2');
    const precedentBtn = document.getElementById('precedent');
    const suivantBtn = document.getElementById('suivant');

    suivantBtn.addEventListener('click', () => {
        vid1.style.display = 'none';
        vid2.style.display = 'block';
        vid2.currentTime = 0;
        vid2.play();
    });

    precedentBtn.addEventListener('click', () => {
        vid2.style.display = 'none';
        vid1.style.display = 'block';
        vid1.currentTime = 0; 
        vid1.play();
    });
});



// Script pour ajouter l'effet d'ecriture et changer le texte

document.addEventListener('DOMContentLoaded', () => {
    const dialogue1 = document.querySelector('.dialogue1');
    const dialogue2 = document.querySelector('.dialogue2');
    const precedentBtn = document.getElementById('precedent');
    const suivantBtn = document.getElementById('suivant');

    
    function typeWriterEffect(element, text, speed = 50) {
        element.textContent = ''; 
        let i = 0;
        function writeCharacter() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(writeCharacter, speed);
            }
        }
        writeCharacter();
    }


    typeWriterEffect(dialogue1, dialogue1.textContent);

    suivantBtn.addEventListener('click', () => {
        dialogue1.style.display = 'none';
        dialogue2.style.display = 'block';
        typeWriterEffect(dialogue2, dialogue2.textContent); 
    });

    precedentBtn.addEventListener('click', () => {
        dialogue1.style.display = 'block';
        dialogue2.style.display = 'none';
        typeWriterEffect(dialogue1, dialogue1.textContent);
    });
});