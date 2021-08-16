var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('botoncito');

boton.addEventListener('click', dibujoPorClick);

var d = document.getElementById('dibujito');
var lienzo = d.getContext('2d');
var ancho = d.width;

dibujarLinea('#AAF', 1, 1, 1, 299);
dibujarLinea('#AAF', 1, 299, 299, 299);
dibujarLinea('#AAF', 299, 299, 299, 1);
dibujarLinea('#AAF', 299, 1, 1, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath(); //Comenzar con el trazo
    lienzo.strokeStyle = color; // Especificar el color del trazo
    lienzo.moveTo( xinicial, yinicial); // Punto de inicio para la linea
    lienzo.lineTo( xfinal, yfinal); // Punto hasta donde termina la linea
    lienzo.stroke(); // Especificar el tipo de trazo
    lienzo.closePath(); // Finalizar con el trazo
}

function dibujoPorClick() {
    var l = 0;
    var ll = 0;
    var lineas= parseInt(texto.value);
    var espacio = ancho / lineas;

    while (l < lineas) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea('#AAF', 0, yi, xf, 300);
        xi = espacio * l;
        yf = 300 - (l * espacio);
        dibujarLinea('#AAF', xi, 300, 300, yf);
        l++;
    }
    while (ll < lineas) {
        yi = 300 - (ll * espacio);
        xf = 300 - (ll * espacio);
        dibujarLinea('#AAF', 300, yi, xf, 0);
        xi = 300 - (ll * espacio);
        yf = espacio * ll;
        dibujarLinea('#AAF', xi, 0, 0, yf);
        ll++;
    }
}