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