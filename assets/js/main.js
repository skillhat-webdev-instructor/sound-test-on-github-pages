// sound effects
let sfxRight = new Audio('assets/sfx/correct.wav');


let playSndButton = document.getElementById('playSoundBtn');


playSndButton.addEventListener('click', function() {
    sfxRight.play().then(r => console.log('Sound played'));

});
