const fs = require('fs');

var input = fs.readFileSync('/dev/javascript/1043/stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

function calculaPerimetroOuArea(input) {
    const valores = input[0].split(' ').map(Number);
    const [A, B, C] = valores;

    if (A + B > C && A + C > B && B + C > A) {
        const perimetro = A + B + C;
        console.log(`Perimetro = ${perimetro.toFixed(1)}`);
    } else {
        const area = ((A + B) * C) / 2;
        console.log(`Area = ${area.toFixed(1)}`);
    }
}


calculaPerimetroOuArea(lines);