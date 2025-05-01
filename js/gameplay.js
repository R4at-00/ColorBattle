const direccionesDificil = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1] ,         [0, 1],
    [1, -1], [1,0] , [1, 1] 
];
const direccionesFacil = [
             [-1,0], 
    [0,-1] ,         [0, 1],
             [1,0]   
];
function comprobarAlineaciones(caracter, posicion){
    if(hardmode){
        direccionesDificil.forEach(vector => {
            comprobarAlineacion(vector, caracter, posicion);
        });
    }else{
        direccionesFacil.forEach(vector => {
            comprobarAlineacion(vector, caracter, posicion);
        });
    }
}
function comprobarAlineacion(vector, caracter, posicion){
    let nuevaPosicion = [posicion[0]+vector[0], posicion[1]+vector[1]];
    if(
        nuevaPosicion[0] >= table.length || nuevaPosicion[1] >= table.length
        || nuevaPosicion[0] < 0 || nuevaPosicion[1] < 0 
        || table[nuevaPosicion[0]][nuevaPosicion[1]] === '0'
    ){
        return;
    }
    if(table[nuevaPosicion[0]][nuevaPosicion[1]] === getOppositeChar(caracter)){
        comprobarAlineacion(vector, caracter, nuevaPosicion);
    }
    if(table[nuevaPosicion[0]][nuevaPosicion[1]] === caracter){
        table[posicion[0]][posicion[1]] = caracter;
        let celdaAfectada = document.getElementById(`${posicion[0]},${posicion[1]}`); 
        if(caracter === '1'){
            celdaAfectada.style.backgroundColor = $colorJugador.value;
            celdaAfectada.classList.remove('celda-p2');
            celdaAfectada.classList.add('celda-p1');
        }else if(caracter === '2'){
            celdaAfectada.style.backgroundColor = $colorRival.value;
            celdaAfectada.classList.remove('celda-p1');
            celdaAfectada.classList.add('celda-p2');
        }
    }
}