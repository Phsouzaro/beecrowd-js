const fs = require('fs');

var input = fs.readFileSync('/dev/javascript/1040/stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

function calculaMedia(lines) {
    let [notas, notaExame] = lines;
    const pesos = [2, 3, 4, 1];
    const somaPesos = pesos.reduce((acc, val) => acc + val, 0);

    let notasArray = notas.split(' ').map(parseFloat);
    let mediaInicial = notasArray
        .map((nota, index) => nota * pesos[index])
        .reduce((acc, val) => acc + val, 0) / somaPesos;

    console.log(`Media: ${mediaInicial.toFixed(1)}`);

    if (mediaInicial >= 7.0) {
        console.log('Aluno aprovado.');
    } else if (mediaInicial >= 5.0) {
        console.log('Aluno em exame.');
        if (notaExame !== undefined) {
            let notaExameFloat = parseFloat(notaExame);
            console.log(`Nota do exame: ${notaExameFloat.toFixed(1)}`);
            let mediaFinal = (mediaInicial + notaExameFloat) / 2;

            if (mediaFinal >= 5.0) {
                console.log('Aluno aprovado.');
            } else {
                console.log('Aluno reprovado.');
            }

            console.log(`Media final: ${mediaFinal.toFixed(1)}`);
        }
    } else {
        console.log('Aluno reprovado.');
    }
}

calculaMedia(lines);