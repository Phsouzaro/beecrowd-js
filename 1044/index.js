const fs = require('fs');

var input = fs.readFileSync('/dev/javascript/1044/stdin', 'utf8');
var lines = input.split('\n').map(line => line.trim());