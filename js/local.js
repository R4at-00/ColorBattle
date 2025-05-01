function startVariables() {
    if (getSave() === null) {
        localStorage.setItem("save", "false");
    }
    if (getSave()) {
        if (getTablero() === null) {
            localStorage.setItem("tablero", "");
        }
        if (getNUsuarios() === null) {
            localStorage.setItem("NUsuarios", "1");
        }
        if (getPuntuacionJugador() === null){
            localStorage.setItem("puntuacionJugador", "0");
        }
        if (getPuntuacionRival() === null){
            localStorage.setItem("puntuacionRival", "0");
        }
        if (getColorJugador() === null){
            localStorage.setItem("colorJugador", "#89FDE6");
        }
        if (getColorRival() === null){
            localStorage.setItem("colorRival", "#C83232");
        }
        if (getNicknameJugador() === null){
            localStorage.setItem("nicknameJugador", "Paco");
        }
        if (getNicknameRival() === null){
            localStorage.setItem("nicknameRival", "Sulfuro33");
        }
        if (getFxSoundCheck() === null){
            localStorage.setItem("fxSoundCheck", "true");
        }
        if (getMusicCheck() === null){
            localStorage.setItem("musicCheck", "true");
        }
        if (getDificultad() === null){
            localStorage.setItem("hard", "false");
        }
        if (getTiempoTurno() === null){
            localStorage.setItem("tiempoTurno", "30");
        }
        if (getTamanoTablero() === null){
            localStorage.setItem("tamanoTablero", "7");
        }
    } else {
        if (getTablero() === null) {
            sessionStorage.setItem("tablero", "");
        }
        if (getNUsuarios() === null) {
            sessionStorage.setItem("NUsuarios", "1");
        }
        if (getPuntuacionJugador() === null){
            sessionStorage.setItem("puntuacionJugador", "0");
        }
        if (getPuntuacionRival() === null){
            sessionStorage.setItem("puntuacionRival", "0");
        }
        if (getColorJugador() === null){
            sessionStorage.setItem("colorJugador", "#89FDE6");
        }
        if (getColorRival() === null){
            sessionStorage.setItem("colorRival", "#C83232");
        }
        if (getNicknameJugador() === null){
            sessionStorage.setItem("nicknameJugador", "Paco");
        }
        if (getNicknameRival() === null){
            sessionStorage.setItem("nicknameRival", "Sulfuro33");
        }
        if (getFxSoundCheck() === null){
            sessionStorage.setItem("fxSoundCheck", "true");
        }
        if (getMusicCheck() === null){
            sessionStorage.setItem("musicCheck", "true");
        }
        if (getDificultad() === null){
            sessionStorage.setItem("hard", "false");
        }
        if (getTiempoTurno() === null){
            sessionStorage.setItem("tiempoTurno", "30");
        }
        if (getTamanoTablero() === null){
            sessionStorage.setItem("tamanoTablero", "7");
        }
    }
}

function swapToLocal() {
    localStorage.setItem("tablero", sessionStorage.getItem("tablero"));
    sessionStorage.removeItem("tablero");

    localStorage.setItem("NUsuarios", sessionStorage.getItem("NUsuarios"));
    sessionStorage.removeItem("NUsuarios");

    localStorage.setItem("puntuacionJugador", sessionStorage.getItem("puntuacionJugador"));
    sessionStorage.removeItem("puntuacionJugador");

    localStorage.setItem("puntuacionRival", sessionStorage.getItem("puntuacionRival"));
    sessionStorage.removeItem("puntuacionRival");

    localStorage.setItem("colorJugador", sessionStorage.getItem("colorJugador"));
    sessionStorage.removeItem("colorJugador");

    localStorage.setItem("colorRival", sessionStorage.getItem("colorRival"));
    sessionStorage.removeItem("colorRival");

    localStorage.setItem("nicknameJugador", sessionStorage.getItem("nicknameJugador"));
    sessionStorage.removeItem("nicknameJugador");

    localStorage.setItem("nicknameRival", sessionStorage.getItem("nicknameRival"));
    sessionStorage.removeItem("nicknameRival");

    localStorage.setItem("fxSoundCheck", sessionStorage.getItem("fxSoundCheck"));
    sessionStorage.removeItem("fxSoundCheck");

    localStorage.setItem("musicCheck", sessionStorage.getItem("musicCheck"));
    sessionStorage.removeItem("musicCheck");

    localStorage.setItem("hard", sessionStorage.getItem("hard"));
    sessionStorage.removeItem("hard");

    localStorage.setItem("tiempoTurno", sessionStorage.getItem("tiempoTurno"));
    sessionStorage.removeItem("tiempoTurno");

    localStorage.setItem("tamanoTablero", sessionStorage.getItem("tamanoTablero"));
    sessionStorage.removeItem("tamanoTablero");
}

function swapToSession() {
    sessionStorage.setItem("tablero", localStorage.getItem("tablero"));
    localStorage.removeItem("tablero");

    sessionStorage.setItem("NUsuarios", localStorage.getItem("NUsuarios"));
    localStorage.removeItem("NUsuarios");

    sessionStorage.setItem("puntuacionJugador", localStorage.getItem("puntuacionJugador"));
    localStorage.removeItem("puntuacionJugador");

    sessionStorage.setItem("puntuacionRival", localStorage.getItem("puntuacionRival"));
    localStorage.removeItem("puntuacionRival");

    sessionStorage.setItem("colorJugador", localStorage.getItem("colorJugador"));
    localStorage.removeItem("colorJugador");

    sessionStorage.setItem("colorRival", localStorage.getItem("colorRival"));
    localStorage.removeItem("colorRival");

    sessionStorage.setItem("nicknameJugador", localStorage.getItem("nicknameJugador"));
    localStorage.removeItem("nicknameJugador");

    sessionStorage.setItem("nicknameRival", localStorage.getItem("nicknameRival"));
    localStorage.removeItem("nicknameRival");

    sessionStorage.setItem("fxSoundCheck", localStorage.getItem("fxSoundCheck"));
    localStorage.removeItem("fxSoundCheck");

    sessionStorage.setItem("musicCheck", localStorage.getItem("musicCheck"));
    localStorage.removeItem("musicCheck");

    sessionStorage.setItem("hard", localStorage.getItem("hard"));
    localStorage.removeItem("hard");

    sessionStorage.setItem("tiempoTurno", localStorage.getItem("tiempoTurno"));
    localStorage.removeItem("tiempoTurno");

    sessionStorage.setItem("tamanoTablero", localStorage.getItem("tamanoTablero"));
    localStorage.removeItem("tamanoTablero");
}


function getSave() {
    return localStorage.getItem("save") === null ? null : localStorage.getItem("save") === 'true';
}
function setSave(value) {
    localStorage.setItem("save", value.toString());
}

function getTablero() {
    if (getSave()) {
        return localStorage.getItem("tablero") === null ? null : localStorage.getItem("tablero");
    } else {
        return sessionStorage.getItem("tablero") === null ? null : sessionStorage.getItem("tablero");
    }
}
function setTablero(value) {
    if (getSave()) {
        localStorage.setItem("tablero", value);
    } else {
        sessionStorage.setItem("tablero", value);
    }
}

function getNUsuarios() {
    if (getSave()) {
        return localStorage.getItem("NUsuarios") === null ? null : Number(localStorage.getItem("NUsuarios"));
    } else {
        return sessionStorage.getItem("NUsuarios") === null ? null : Number(sessionStorage.getItem("NUsuarios"));
    }
}
function setNUsuarios(value) {
    if (getSave()) {
        localStorage.setItem("NUsuarios", value.toString());
    } else {
        sessionStorage.setItem("NUsuarios", value.toString());
    }
}

function getPuntuacionJugador() {
    if (getSave()) {
        return localStorage.getItem("puntuacionJugador") === null ? null : Number(localStorage.getItem("puntuacionJugador"));
    } else {
        return sessionStorage.getItem("puntuacionJugador") === null ? null : Number(sessionStorage.getItem("puntuacionJugador"));
    }
}
function setPuntuacionJugador(value) {
    if (getSave()) {
        localStorage.setItem("puntuacionJugador", value.toString());
    } else {
        sessionStorage.setItem("puntuacionJugador", value.toString());
    }
}

function getPuntuacionRival() {
    if (getSave()) {
        return localStorage.getItem("puntuacionRival") === null ? null : Number(localStorage.getItem("puntuacionRival"));
    } else {
        return sessionStorage.getItem("puntuacionRival") === null ? null : Number(sessionStorage.getItem("puntuacionRival"));
    }
}
function setPuntuacionRival(value) {
    if (getSave()) {
        localStorage.setItem("puntuacionRival", value.toString());
    } else {
        sessionStorage.setItem("puntuacionRival", value.toString());
    }
}

function getColorJugador() {
    if (getSave()) {
        return localStorage.getItem("colorJugador") === null ? null : localStorage.getItem("colorJugador");
    } else {
        return sessionStorage.getItem("colorJugador") === null ? null : sessionStorage.getItem("colorJugador");
    }
}
function setColorJugador(value) {
    if (getSave()) {
        localStorage.setItem("colorJugador", value);
    } else {
        sessionStorage.setItem("colorJugador", value);
    }
}

function getColorRival() {
    if (getSave()) {
        return localStorage.getItem("colorRival") === null ? null : localStorage.getItem("colorRival");
    } else {
        return sessionStorage.getItem("colorRival") === null ? null : sessionStorage.getItem("colorRival");
    }
}
function setColorRival(value) {
    if (getSave()) {
        localStorage.setItem("colorRival", value);
    } else {
        sessionStorage.setItem("colorRival", value);
    }
}

function getNicknameJugador() {
    if (getSave()) {
        return localStorage.getItem("nicknameJugador") === null ? null : localStorage.getItem("nicknameJugador");
    } else {
        return sessionStorage.getItem("nicknameJugador") === null ? null : sessionStorage.getItem("nicknameJugador");
    }
}
function setNicknameJugador(value) {
    if (getSave()) {
        localStorage.setItem("nicknameJugador", value);
    } else {
        sessionStorage.setItem("nicknameJugador", value);
    }
}

function getNicknameRival() {
    if (getSave()) {
        return localStorage.getItem("nicknameRival") === null ? null : localStorage.getItem("nicknameRival");
    } else {
        return sessionStorage.getItem("nicknameRival") === null ? null : sessionStorage.getItem("nicknameRival");
    }
}
function setNicknameRival(value) {
    if (getSave()) {
        localStorage.setItem("nicknameRival", value);
    } else {
        sessionStorage.setItem("nicknameRival", value);
    }
}

function getFxSoundCheck() {
    if (getSave()) {
        return localStorage.getItem("fxSoundCheck") === null ? null : localStorage.getItem("fxSoundCheck") === 'true';
    } else {
        return sessionStorage.getItem("fxSoundCheck") === null ? null : sessionStorage.getItem("fxSoundCheck") === 'true';
    }
}
function setFxSoundCheck(value) {
    if (getSave()) {
        localStorage.setItem("fxSoundCheck", value.toString());
    } else {
        sessionStorage.setItem("fxSoundCheck", value.toString());
    }
}

function getMusicCheck() {
    if (getSave()) {
        return localStorage.getItem("musicCheck") === null ? null : localStorage.getItem("musicCheck") === 'true';
    } else {
        return sessionStorage.getItem("musicCheck") === null ? null : sessionStorage.getItem("musicCheck") === 'true';
    }
}
function setMusicCheck(value) {
    if (getSave()) {
        localStorage.setItem("musicCheck", value.toString());
    } else {
        sessionStorage.setItem("musicCheck", value.toString());
    }
}

function getDificultad() {
    if (getSave()) {
        return localStorage.getItem("hard") === null ? null : localStorage.getItem("hard") === 'true';
    } else {
        return sessionStorage.getItem("hard") === null ? null : sessionStorage.getItem("hard") === 'true';
    }
}
function setDificultad(value) {
    if (getSave()) {
        localStorage.setItem("hard", value.toString());
    } else {
        sessionStorage.setItem("hard", value.toString());
    }
}

function getTiempoTurno() {
    if (getSave()) {
        return localStorage.getItem("tiempoTurno") === null ? null : Number(localStorage.getItem("tiempoTurno"));
    } else {
        return sessionStorage.getItem("tiempoTurno") === null ? null : Number(sessionStorage.getItem("tiempoTurno"));
    }
}
function setTiempoTurno(value) {
    if (getSave()) {
        localStorage.setItem("tiempoTurno", value.toString());
    } else {
        sessionStorage.setItem("tiempoTurno", value.toString());
    }
}

function getTamanoTablero() {
    if (getSave()) {
        return localStorage.getItem("tamanoTablero") === null ? null : Number(localStorage.getItem("tamanoTablero"));
    } else {
        return sessionStorage.getItem("tamanoTablero") === null ? null : Number(sessionStorage.getItem("tamanoTablero"));
    }
}
function setTamanoTablero(value) {
    if (getSave()) {
        localStorage.setItem("tamanoTablero", value.toString());
    } else {
        sessionStorage.setItem("tamanoTablero", value.toString());
    }
}
