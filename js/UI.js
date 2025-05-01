const $turno = document.getElementById('turnState');
const $startButton = document.getElementById('start');
const $restartButton = document.getElementById('restart');

const $popupContainer = document.querySelector('.popup-container');
const $instructions = document.getElementById('instructions');
const $config  = document.getElementById('config');
const $instructionsButton = document.getElementById('instructions-img');
const $configButton  = document.getElementById('config-img');
const $closeInstructions = document.getElementById('close-instructions');
const $closeConfig = document.getElementById('close-config');

const $comportamientoJugador = document.getElementById('p1-behavior');
const $comportamientoRival = document.getElementById('p2-behavior');

const $puntuacionJugador = document.getElementById('p1-score');
const $puntuacionRival = document.getElementById('p2-score');

const $colorJugador = document.getElementById('p1-color');
const $colorRival = document.getElementById('p2-color');

const $nicknameJugador = document.getElementById('p1-nickname-txt');
const $nicknameRival = document.getElementById('p2-nickname-txt');

const $countdownJugador = document.getElementById('p1-countdown');
const $countdownRival = document.getElementById('p2-countdown');

let playing = false;
let scoreJugador = 0;
let scoreRival = 0;
let countdown;
let countdownValue = 0;

function restart(){
    playing = true;
    restartScore();
    turnoTxt();
    startTurnTime();
    construyeTabla($tableSize.value);
}

function scoreJugadorPoints(value){
    $puntuacionJugador.innerText = `${value}`;
    setPuntuacionJugador(value);
}

function scoreRivalPoints(value){
    $puntuacionRival.innerText = `${value}`;
    setPuntuacionRival(value);
}

function restartScore(){
    scoreRival = 0;
    scoreJugador = 0;
    $puntuacionRival.innerText = `0`;
    $puntuacionJugador.innerText = `0`;
}

function hideCounters(){
    $countdownJugador.style.display = 'none';
    $countdownRival.style.display = 'none';
}

function finish(){
    if(scoreJugador > scoreRival){
        $turno.textContent = `¡Gana ${$nicknameJugador.innerText}!`;
        playSound($winSound);
    }else if(scoreJugador === scoreRival){
        $turno.textContent = '¡Empate!';
    }else{
        $turno.textContent = `¡Gana ${$nicknameRival.innerText}!`;
        playSound($defeatSound);
    }
    
    playing = false;
    startCountdown()
    startTurnTime();
}

function turnoTxt(){
    if(scoreJugador + scoreRival === Number($tableSize.value)**2){
       finish();
    }else{
        $turno.textContent = 'Turno de ' + (turnoRival ? `${$nicknameRival.innerText}` : `${$nicknameJugador.innerText}`);
    }
}

function startCountdown(){
    clearInterval(countdown);
    if(playing){
        countdownValue = Number($turnTime.value);
        countdown = setInterval(() => {
            if(countdownValue <= 0){
                countdownValue = Number($turnTime.value);
                if(isCPU){
                    pintarCelda();
                }
            }
            if(turnoRival){
                $countdownJugador.style.display = 'none';
                $countdownRival.style.display = 'block';
                $countdownRival.innerText = --countdownValue;
            }else{
                $countdownJugador.style.display = 'block';
                $countdownRival.style.display = 'none';
                $countdownJugador.innerText = --countdownValue;
            }
        }, 1000);
        
    }
}


function UIEvents(){
    $startButton.addEventListener('click', () => {
        playSound($startSound);
        playing = true;
        $startButton.style.display = 'none';
        $restartButton.style.display = 'block';
        startTurnTime();
        turnoTxt();
    });
    
    $restartButton.addEventListener('click', () => {
        playSound($startSound);
        restart();
    });
    
    $instructionsButton.addEventListener('click', () =>{
        playing = false;
        startTurnTime();
        $popupContainer.style.display = 'flex';
        $popupContainer.style.justifyContent = 'left';
        $instructions.style.display = 'flex';
    })
    
    $configButton.addEventListener('click', () =>{
        playing = false;
        startTurnTime();
        $popupContainer.style.display = 'flex';
        $popupContainer.style.justifyContent = 'right';
        $config.style.display = 'flex';
    })
    
    $closeInstructions.addEventListener('click', () =>{
        if($startButton.style.display == 'none'){
            playing = true;
        }
        startTurnTime();
        $popupContainer.style.display = 'none';
        $instructions.style.display = 'none';
    })
    
    $closeConfig.addEventListener('click', () =>{
        if($startButton.style.display == 'none'){
            playing = true;
        }
        startTurnTime();
        $popupContainer.style.display = 'none';
        $config.style.display = 'none';
    })
    
    $colorJugador.addEventListener('input', () => {
        $celdas.forEach(item => {
            if (item.classList.contains('celda-p1')){
                item.style.backgroundColor = $colorJugador.value;
            }
        });
        setColorJugador($colorJugador.value);
    });
    
    $colorRival.addEventListener('input', () => {
        $celdas.forEach(item => {
            if (item.classList.contains('celda-p2')){
                item.style.backgroundColor = $colorRival.value;
            }
        });
        setColorRival($colorRival.value);
    });
}

function retrieveUIData(){
    scoreJugador = getPuntuacionJugador();
    scoreRival = getPuntuacionRival();
    $puntuacionJugador.innerText = scoreJugador;
    $puntuacionRival.innerText = scoreRival;
    $colorJugador.value = getColorJugador();
    $colorRival.value = getColorRival();
    isCPU = getNUsuarios() === 1 ? true : false;
    $comportamientoRival.innerText = isCPU ? "CPU" : "P2";
    $nicknameJugador.innerText = getNicknameJugador();
    $nicknameRival.innerText = getNicknameRival();
}