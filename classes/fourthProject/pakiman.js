class Pakiman {
    constructor(n, v, a){
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
    }
    hablar(){
        alert(this.nombre);
    }
} 

let cauchin = new Pakiman('Cauchin', 100, 30);
let pokacho = new Pakiman('Pokacho', 80, 50);
let tocinauro = new Pakiman('Tocinauro', 120, 40);
let zorrauro = new Pakiman('Zorrauro', 130, 50);

console.log(cauchin, pokacho, tocinauro, zorrauro);