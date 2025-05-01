const $activeAudioSources = document.querySelectorAll('audio'); 
const $fxs = document.querySelectorAll('.fx')
const $mainTheme = document.getElementById('mainTheme');
const $startSound = document.getElementById('start-sound');
const $winSound = document.getElementById('win-sound');
const $defeatSound = document.getElementById('defeat-sound');

function playSound(sound){
    if($musicCheck.checked || sound.className.includes('fx')){
        sound.play();
    }
}
