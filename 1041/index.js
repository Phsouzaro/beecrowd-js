const fs = require('fs');

var input = fs.readFileSync('/dev/javascript/1041/stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

function calcularCoordenadas(lines){
    const [eixoX, eixoY] = lines[0].split(' ').map(parseFloat);

    if(eixoX === 0 & eixoY === 0) {
        console.log("Origem");
        return;
    }

    if(eixoX === 0 && eixoY !== 0) {
        console.log("Eixo Y");
        return;
    }else if(eixoY === 0 && eixoX !== 0){
        console.log("Eixo X");
        return;
    }

    if(eixoX > 0){
        if(eixoY > 0) console.log("Q1");
        else console.log("Q4");
    }else{
        if(eixoY > 0) console.log("Q2");
        else console.log("Q3");
    }

}

calcularCoordenadas(lines);