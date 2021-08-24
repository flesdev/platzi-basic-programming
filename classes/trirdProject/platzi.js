/* ================= Variables de Fondo ================= */

var vp = document.getElementById('villaplatzi');
var papel = vp.getContext('2d');

/* ================= Escuchador de eventos ================= */

document.addEventListener('keyup', moverCerdo);

function moverCerdo(teclitas) {
    if (teclitas.keyCode == teclas.UP) {
        
    } else if (teclitas.keyCode == teclas.RIGHT) {

    } else if (teclitas.keyCode == teclas.DOWN) {

    } else if (teclitas.keyCode == teclas.LEFT) {

    } else {
        alert('Use the arrows to move the pig')
    }
}

/* ================= TECLAS ================= */

var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

/* ================= Imagenes ================= */

var fondo = {
    url: './assets/tile.png',
    cargaOK: false,
}
var vaca = {
    url: './assets/vaca.png',
    cargaOK: false,
}
var cerdo = {
    url: './assets/cerdo.png',
    cargaOK: false,
}
var pollo = {
    url: './assets/pollo.png',
    cargaOK: false,
}

/* ==================================================================== */

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = './assets/vaca.png';
vaca.imagen.addEventListener('load', cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = './assets/pollo.png';
pollo.imagen.addEventListener('load', cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = './assets/cerdo.png';
cerdo.imagen.addEventListener('load', cargarCerdos);

/* ================= Funciones para esperar el true ================= */

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}
function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos() {
    pollo.cargaOK = true;
    dibujar();
}

/* ================= Funciones para esperar el true ================= */

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        var cantidad = aleatorio(3, 6);
        for (let v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            x = x * 80;
            y = y * 80;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (pollo.cargaOK) {
        var cantidad = aleatorio(3, 6);
        for (let v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            x = x * 80;
            y = y * 80;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
    if (cerdo.cargaOK) {
        var cantidad = aleatorio(3, 6);
        for (let v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            x = x * 80;
            y = y * 80;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
}

/* ====================== Funcion Aleatorio ============================ */

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

/* ====================== Final ======================== */