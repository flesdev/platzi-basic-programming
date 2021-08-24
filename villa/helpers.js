/* ====================== Funcion Aleatorio ============================ */

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}

/* ====================== Zorro ============================ */

function mostrarZorro() {
    zorro.imagen = new Image();
    zorro.imagen.src = './assets/zorro.png';
    zorro.imagen.addEventListener('load', cargarZorro); // Cambia la carga OK
}

function eliminarBoton() {
    let miBody = document.getElementById('body');
    let miBoton = document.getElementById('button');
    miBody.removeChild(miBoton);
}