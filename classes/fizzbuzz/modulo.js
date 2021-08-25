let numeros = 100;
for (let i = 1; i <= numeros; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0) {
            document.write('Fizz - Buzz <hr>');
        } else {
            document.write('Fizz <hr>')
        }
    } else if (i % 5 == 0) {
        document.write('Buzz <hr>');
    } else {
        document.write(i + '<hr>');
    }
}