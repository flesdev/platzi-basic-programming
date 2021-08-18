var vp = document.getElementById('villaplatzi');
var papel = vp.getContext('2d');
var mapa = './assets/tile.png';

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener('load', dibujar);

var vaca = new Image();
vaca.src = './assets/vaca.png';
vaca.addEventListener('load', dibujarVacas);

var pollo = new Image();
pollo.src = './assets/pollo.png';
pollo.addEventListener('load', dibujarPollos);

var cerdo = new Image();
cerdo.src = './assets/cerdo.png';
cerdo.addEventListener('load', dibujarCerdos);

function dibujar() {
    papel.drawImage(fondo, 0, 0);
}

function dibujarVacas() {
    papel.drawImage(vaca, 10, 10);
}

function dibujarPollos() {
    papel.drawImage(pollo, 10, 300);
}

function dibujarCerdos() {
    papel.drawImage(cerdo, 300, 150);
}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

var z;

for (let i = 0; i < 10; i++) {
    z = aleatorio(10, 20);
    document.write(z + ', ');   
}