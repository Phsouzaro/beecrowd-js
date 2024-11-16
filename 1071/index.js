const fs = require('fs');

var input = fs.readFileSync('/dev/javascript/1071/stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

let cidadeNumero = 1;
let index = 0;

while (index < lines.length) {
    const n = Number(lines[index]);

    if (n === 0) break;
    index++;

    const moradoresConsumo = [];
    let totalMoradores = 0;
    let totalConsumo = 0;

    for (let i = 0; i < n; i++) {
        const [moradores, consumo] = lines[index].split(' ').map(Number);
        index++;

        totalMoradores += moradores;
        totalConsumo += consumo;

        moradoresConsumo.push([moradores, consumo]);
    }

    moradoresConsumo.sort((a, b) => Math.floor(a[1] / a[0]) - Math.floor(b[1] / b[0]));

    console.log(`Cidade# ${cidadeNumero}:`);

    const consumoDetalhado = moradoresConsumo
        .map(([moradores, consumo]) => `${moradores}-${Math.floor(consumo / moradores)}`)
        .join(' ');

    console.log(consumoDetalhado);

    const consumoMedio = (totalConsumo / totalMoradores).toFixed(2);
    console.log(`Consumo medio: ${consumoMedio}`);

    cidadeNumero++;

    if (index < lines.length && Number(lines[index]) !== 0) {
        console.log();
    }
}
