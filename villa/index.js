/* ================= Fondo, teclas e imagenes ================= */

let vp = document.getElementById('villaplatzi');
let papel = vp.getContext('2d');

let fondo = {
    url: './assets/tile.png',
    cargaOK: false,
    positionX: 0,
    positionY: 0
}
let vaca = {
    url: './assets/vaca.png',
    cargaOK: false,
    positionX: 0,
    positionY: 0
}
let cerdo = {
    url: './assets/cerdo.png',
    cargaOK: false,
    positionX: 0,
    positionY: 0
}
let pollo = {
    url: './assets/pollo.png',
    cargaOK: false,
    positionX: 0,
    positionY: 0
}
let zorro = {
    url: './assets/zorro.png',
    cargaOK: false,
    positionX: 160,
    positionY: 160
}
let teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

/* ==================================================================== */

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener('load', cargarFondo); // Cambia la carga a OK

vaca.imagen = new Image();
vaca.imagen.src = './assets/vaca.png';
vaca.imagen.addEventListener('load', cargarVaca); // Cambia la carga a OK

pollo.imagen = new Image();
pollo.imagen.src = './assets/pollo.png';
pollo.imagen.addEventListener('load', cargarPollo); // Cambia la carga a OK

cerdo.imagen = new Image();
cerdo.imagen.src = './assets/cerdo.png';
cerdo.imagen.addEventListener('load', cargarCerdo); // Cambia la carga a OK

/* ================= Funciones que cambian la carga y dibujan ================= */

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollo() {
    pollo.cargaOK = true;
    dibujar();
}
function cargarZorro() {
    zorro.cargaOK = true;
    dibujar();
}

/* =================== Funcion para dibujar =================== */

function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    } if (vaca.cargaOK) {
        let x = aleatorio(0, 5);
        let y = aleatorio(0, 5);
        vaca.positionX = x * 80;
        vaca.positionY = y * 80;
        papel.drawImage(vaca.imagen, vaca.positionX, vaca.positionY);
    } if (pollo.cargaOK) {
        let x = aleatorio(0, 5);
        let y = aleatorio(0, 5);
        pollo.positionX = x * 80;
        pollo.positionY = y * 80;
        papel.drawImage(pollo.imagen, pollo.positionX, pollo.positionY);
    } if (cerdo.cargaOK) {
        let x = aleatorio(0, 5);
        let y = aleatorio(0, 5);
        cerdo.positionX = x * 80;
        cerdo.positionY = y * 80;
        papel.drawImage(cerdo.imagen, cerdo.positionX, cerdo.positionY);
    } if (zorro.cargaOK) {
        papel.drawImage(zorro.imagen, zorro.positionX, zorro.positionY);
        eliminarBoton();
    }
}

/* ================= Escuchador de eventos ================= */

document.addEventListener('keyup', moverZorro);

function moverZorro(teclitas) {
    if (teclitas.keyCode == teclas.UP) {
        cleanCanvas();
        redrew();
        zorro.positionY -= 20;
        dibujarZorro(zorro.positionX, zorro.positionY);
    } else if (teclitas.keyCode == teclas.RIGHT) {
        cleanCanvas();
        redrew();
        zorro.positionX += 20;
        dibujarZorro(zorro.positionX, zorro.positionY);
    } else if (teclitas.keyCode == teclas.DOWN) {
        cleanCanvas();
        redrew();
        zorro.positionY += 20;
        dibujarZorro(zorro.positionX, zorro.positionY);
    } else if (teclitas.keyCode == teclas.LEFT) {
        cleanCanvas();
        redrew();
        zorro.positionX -= 20;
        dibujarZorro(zorro.positionX, zorro.positionY);
    } else {
        alert('Use the arrows to move the pig');
    }
}

/* =========================== Clean canvas ============================ */

function cleanCanvas(){
    papel.clearRect( 0, 0, vp.width, vp.height); // Esto es para limpiar el canvas. Lo deja en blanco
}

/* =========================== Volver a dibujar canvas ============================ */

function redrew() {
    //Esto es para volver a dibujar.
    papel.drawImage(fondo.imagen, fondo.positionX, fondo.positionY);
    papel.drawImage(vaca.imagen, vaca.positionX, vaca.positionY);
    papel.drawImage(pollo.imagen, pollo.positionX, pollo.positionY);
    papel.drawImage(cerdo.imagen, cerdo.positionX, cerdo.positionY);
  
    //Lo que está sucediendo ahí es que yo estoy guardando la posición en X y en Y como atributos de cada animal. Pero eso no es nada del otro mundo. Básicamente vuelve a dibujar con las nuevas coordenadas una vez que el canvas está vacío.
}

/* =========================== Mover el zorro ============================ */

function dibujarZorro(x, y) {
    papel.drawImage(zorro.imagen, x, y);
}