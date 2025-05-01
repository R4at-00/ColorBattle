const $tableContainer = document.getElementById('table-container');
let $celdas;
let table;
let turnoRival = false;

function retrieveTabla(){
    $tableContainer.innerHTML = '';
    hideCounters();
    restartScore();

    table = JSON.parse(getTablero());
    const tabla = document.createElement('table');
    for (let i = 0; i < table[0].length; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < table[0].length; j++) {
            const celda = document.createElement('td');
            celda.id = `${i},${j}`;

            if(table[i][j] === '1'){
                celda.style.backgroundColor = $colorJugador.value;
                celda.classList.add('celda-p1');
            }else if(table[i][j] === '2'){
                celda.style.backgroundColor = $colorRival.value;
                celda.classList.add('celda-p2');
            }
            celda.addEventListener('click', event => {
                let posicion = posicionCelda(celda.id);
                if(table[posicion[0]][posicion[1]] == '0' && playing){
                    if(!isCPU){
                        if(turnoRival ){
                            cambiarColor(posicion, '2');
                            comprobarAlineaciones('2', posicion);
                        }else{
                            cambiarColor(posicion, '1');
                            comprobarAlineaciones('1', posicion);
                        }
                        turnoRival = !turnoRival;
                        startTurnTime();
                        setTablero(JSON.stringify(table));
                        celdasScored();
                        turnoTxt();
                    }else{
                        cambiarColor(posicion, '1');
                        comprobarAlineaciones('1', posicion);
                        pintarCelda();
                        startTurnTime();
                        setTablero(JSON.stringify(table));
                        turnoTxt();
                    }
                }
                
            });
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    $tableContainer.appendChild(tabla);
    $celdas = document.querySelectorAll('#table-container td');
}

function finishedTable(){
    return table.forEach(element => {
        if(element === '0'){
            return true;
        }
    }) ? true : false;
}

function celdasScored(){
    let pointsForRival = 0;
    let pointsForJugador = 0;
    table.forEach(fila => {
        fila.forEach(celda => {
            if(celda === '1'){
                pointsForJugador++;
            }else if(celda === '2'){
                pointsForRival++;
            }
        });
    });
    scoreJugador = pointsForJugador;
    scoreRival = pointsForRival
    scoreJugadorPoints(scoreJugador);
    scoreRivalPoints(scoreRival);
}

function construyeTabla(n) {
    if (n <= 0)
        return null;

    $tableContainer.innerHTML = '';
    setTablero('');
    hideCounters();
    restartScore();
    const tabla = document.createElement('table');
    table = [];
    for (let i = 0; i < n; i++) {
        table[i] = [];
        const fila = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            const celda = document.createElement('td');
            celda.id = `${i},${j}`;
            table[i][j] = '0';
            celda.addEventListener('click', event => {
                let posicion = posicionCelda(celda.id);
                if(table[posicion[0]][posicion[1]] == '0' && playing){
                    if(!isCPU){
                        if(turnoRival ){
                            cambiarColor(posicion, '2');
                            comprobarAlineaciones('2', posicion);
                        }else{
                            cambiarColor(posicion, '1');
                            comprobarAlineaciones('1', posicion);
                        }
                        turnoRival = !turnoRival;
                        startTurnTime();
                        setTablero(JSON.stringify(table));
                        celdasScored();
                        turnoTxt();
                    }else{
                        cambiarColor(posicion, '1');
                        comprobarAlineaciones('1', posicion);
                        pintarCelda();
                        celdasScored();
                        startTurnTime();
                        setTablero(JSON.stringify(table));
                        turnoTxt();
                    }
                }
                
            });
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    $tableContainer.appendChild(tabla);
    $celdas = document.querySelectorAll('#table-container td');
}

function getOppositeChar(caracter){
    return caracter === '1' ? '2' : '1';
}

function posicionCelda(id){
    let arrayPosicionXY = id.split(',');
    return arrayPosicionXY.map(item => Number(item));
}

function cambiarColor(posicion, caracter){
    table[posicion[0]][posicion[1]] = caracter;
    let celdaAfectada = document.getElementById(`${posicion[0]},${posicion[1]}`);
    if(caracter == '1'){
        celdaAfectada.style.backgroundColor = $colorJugador.value;
        celdaAfectada.classList.add('celda-p1');
    }else if(caracter == '2'){
        celdaAfectada.style.backgroundColor = $colorRival.value;
        celdaAfectada.classList.add('celda-p2');
    }else{
        return;
    }
}