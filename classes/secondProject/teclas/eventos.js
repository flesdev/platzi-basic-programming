var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};


document.addEventListener('keydown', dibujarTeclado);
var cuadrito = document.getElementById('areaDeDibujo');
var papel = cuadrito.getContext('2d');
var x = 150;
var y = 150;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath(); //Comenzar con el trazo
    lienzo.strokeStyle = color; // Especificar el color del trazo
    lienzo.lineWidth = 3;
    lienzo.moveTo( xinicial, yinicial); // Punto de inicio para la linea
    lienzo.lineTo( xfinal, yfinal); // Punto hasta donde termina la linea
    lienzo.stroke(); // Especificar el tipo de trazo
    lienzo.closePath(); // Finalizar con el trazo
}

dibujarLinea('red', 149, 149, 151, 151, papel);

function dibujarTeclado(evento) {
    var colorcito = 'blue';
    var movimiento = 1;
    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN: 
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;        
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;        
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;        
        break;
    }
}
