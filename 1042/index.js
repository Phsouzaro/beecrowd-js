const fs = require('fs');

var input = fs.readFileSync('/dev/javascript/1042/stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());

function simpleSort(lines){
    const numbersToSort = lines[0].split(' ').map(Number);
    const originalNumbers = [...numbersToSort];

    numbersToSort.sort((a, b) => a - b);
    numbersToSort.forEach(number => console.log(number))

    console.log('')

    originalNumbers.forEach(number => console.log(number));
}

simpleSort(lines);