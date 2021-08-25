let imagenes = [];
imagenes['Cauchin'] = './assets/vaca.png';
imagenes['Pokacho'] = './assets/pollo.png';
imagenes['Tocinauro'] = './assets/cerdo.png';

class Pakiman {
    constructor(n, v, a){
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.imagen.src = imagenes[this.nombre];
    }
    hablar(){
        alert(this.nombre);
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        document.write('<p>');
        document.write('<strong>' + this.nombre + '</strong></br>');
        document.write('vida: ' + this.vida + '</br>');
        document.write('ataque: ' + this.ataque + '<hr>');
        document.write('</p>');
    }
} 

let cauchin = new Pakiman('Cauchin', 100, 30);
let pokacho = new Pakiman('Pokacho', 80, 50);
let tocinauro = new Pakiman('Tocinauro', 120, 40);

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();