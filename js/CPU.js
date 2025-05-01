function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function elegirCeldaAleatoria(){
    return [random(0, table.length-1), random(0, table.length-1)];
}

function colocarCelda(){
    let celda = elegirCeldaAleatoria();
    if(table[celda[0]][celda[1]] !== '0'){
        celda = colocarCelda();
    }
    return celda;
}

function pintarCelda(){
    let posicionCPU = colocarCelda();
    cambiarColor(posicionCPU, '2');
    comprobarAlineaciones('2', posicionCPU);
}