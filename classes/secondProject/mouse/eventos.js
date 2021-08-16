var papel = document.getElementById('areaDeDibujo');
var lienzo = papel.getContext('2d');
var papelito = papel.addEventListener('mousemove', move);
var papelitoDown = papel.addEventListener('mousedown', start);
var papelitoUp = papel.addEventListener('mouseup', end);
var colorcito = 'blue';
var xi, yi, xf, yf;
var estado;

function start(eventstart) {
    xi = eventstart.layerX;
    yi = eventstart.layerY;
    estado = 1;
}

function move(event) {
    if (estado){
        xf = event.layerX;
        yf = event.layerY;
        full();
        xi = xf;
        yi = yf;
    }
}
function end(eventend) {
    estado = 0;
}
function full() {
    dibujar(colorcito, xi, yi, xf, yf);
    console.log(xi, yi, xf, yf);
    console.log('por aqui todo bien');
}

function dibujar(color, xinicial, yinicial, xfinal, yfinal,) {
    lienzo.beginPath(); //Comenzar con el trazo
    lienzo.strokeStyle = color; // Especificar el color del trazo
    lienzo.lineWidth = 1;
    lienzo.moveTo( xinicial, yinicial); // Punto de inicio para la linea
    lienzo.lineTo( xfinal, yfinal); // Punto hasta donde termina la linea
    lienzo.stroke(); // Especificar el tipo de trazo
    lienzo.closePath(); // Finalizar con el trazo
}