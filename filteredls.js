var fs = require('fs');
var path = process.argv[2];
var type = process.argv[3];

function read (path, type){
    fs.readdir(path, function reddir(err, data){
        for (var i = 0; i < data.length; i++) {
            ft = data[i].split('.');
            if (ft[1] === type){
                console.log(data[i])
            }
        }
    });
}

read(path, type);