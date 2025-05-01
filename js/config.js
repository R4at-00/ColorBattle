const $saveGame = document.getElementById('save-game');

const $nUsuarios = document.getElementById('n-usuarios');

const $nicknameJugadorInput = document.getElementById('p1-nickname'); 
const $nicknameRivalInput = document.getElementById('p2-nickname'); 

const $fxSoundCheck = document.getElementById('fx-sound');
const $musicCheck = document.getElementById('music');

const $easyCheck = document.getElementById('easy-mode');
const $hardCheck = document.getElementById('hard-mode');

const $turnTime = document.getElementById('turn-time');

const $tableSize = document.getElementById('table-size');

let isCPU = true;
let hardmode = false;
let turnTime;

function startTurnTime(){
    clearInterval(turnTime);
    if(playing){
        startCountdown();
        turnTime = setInterval(() => {
            if(!isCPU){
                turnoRival = !turnoRival;
            }
            turnoTxt();
        }, $turnTime.value * 1000);
    }
}

function configEvents(){
    $nUsuarios.addEventListener('input', () => {
        isCPU = $nUsuarios.value == 2 ? false : true; 
        $comportamientoRival.innerText = isCPU ? "CPU" : "P2";
        if(isCPU && turnoRival){
            turnoRival = !turnoRival
        }
        setNUsuarios($nUsuarios.value);
    });
    
    
    $nicknameJugadorInput.addEventListener('input', () => {
        $nicknameJugador.innerText = $nicknameJugadorInput.value;
        setNicknameJugador($nicknameJugadorInput.value);
    });
    $nicknameRivalInput.addEventListener('input', () => {
        $nicknameRival.innerText = $nicknameRivalInput.value;
        setNicknameRival($nicknameRivalInput.value);
    });
    
    $fxSoundCheck.addEventListener('change', () => {
        $fxs.forEach(item => {
            item.muted = !$fxSoundCheck.checked ? true : false;
        })

        setFxSoundCheck($fxSoundCheck.checked);
    });
    
    $musicCheck.addEventListener('change', () => {
        if(!$musicCheck.checked){
            $mainTheme.pause();
        }else{
            $mainTheme.play();
        }

        setMusicCheck($musicCheck.checked);
    });
    
    $easyCheck.addEventListener('change', () => {
        hardmode = $easyCheck.checked ? false : true;
        setDificultad(hardmode);
    })
    
    $hardCheck.addEventListener('change', () => {
        hardmode = $hardCheck.checked ? true : false;
        setDificultad(hardmode);
    })
    
    $saveGame.addEventListener('change', function(){
        if($saveGame.checked){
            setSave(true);
            swapToLocal();
        }else{
            setSave(false);
            swapToSession();
        }
    });

    $turnTime.addEventListener('change', () =>{
        setTiempoTurno($turnTime.value);
    });
    
    $tableSize.addEventListener('change', () => {
        let valorTabla = Number($tableSize.value);
        let valorTablaMax = Number($tableSize.max);
        let valorTablaMin = Number($tableSize.min);
        if(valorTabla > valorTablaMax){
            alert("Valor no válido.");
            $tableSize.value = $tableSize.max;
        }else if(valorTabla < valorTablaMin){
            alert("Valor no válido.");
            $tableSize.value = $tableSize.min;
        }else{
            if(scoreJugador > 0 || scoreRival > 0){
                let warningCheck = confirm("La partida está empezada. ¿Estás seguro de que quieres crear el tablero de nuevo?");
                if(warningCheck){
                    construyeTabla($tableSize.value);
                }
            }else{
                construyeTabla($tableSize.value);
            }
        }

        setTamanoTablero($tableSize.value);
        
    });
}

function retrieveConfigData(){
    $nUsuarios.value = getNUsuarios();
    $nicknameJugadorInput.value = getNicknameJugador();
    $nicknameRivalInput.value = getNicknameRival();
    $fxSoundCheck.checked = getFxSoundCheck();
    $musicCheck.checked = getMusicCheck();
    hardmode = getDificultad();
    $easyCheck.checked = !hardmode ? true : false;
    $hardCheck.checked = hardmode ? true : false;
    $saveGame.checked = getSave();
    $turnTime.value = getTiempoTurno();
    $tableSize.value = getTamanoTablero(); 
}