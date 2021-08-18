
function cleanCanvas(){
  papel.clearRect( 0, 0, vp.width, vp.height); //Esto es para limpiar el canvas. Lo deja en blanco
}
function pintarCanvas() {
    //Esto es para volver a dibujar.
    papel.drawImage(fondo.imagen, fondo.posicionX, fondo.posicionY);
    papel.drawImage(vaca.imagen, vaca.posicionX, vaca.posicionY);
    papel.drawImage(pollo.imagen, pollo.posicionX, pollo.posicionY);
    papel.drawImage(caballo.imagen, caballo.posicionX, caballo.posicionY);
    papel.drawImage(cerdo.imagen, cerdo.posicionX, cerdo.posicionY);

    //Lo que está sucediendo ahí es que yo estoy guardando la posición en X y en Y como atributos de cada animal. Pero eso no es nada del otro mundo. Básicamente vuelve a dibujar con las nuevas coordenadas una vez que el canvas está vacío.
}
