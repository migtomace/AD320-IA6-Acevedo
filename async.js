var fs = require('fs');
var arg = process.argv[2];

fs.readFile(arg, 'utf8', function(err, data) {
    var line = data.split('\n');
    console.log(line.length-1);
});