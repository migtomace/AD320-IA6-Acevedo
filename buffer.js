var fs = require('fs');
var arg = process.argv[2];
var buff = new Buffer(fs.readFileSync(arg));
var str = buff.toString('utf8');

count = 0;
for(var c in str){
	if (str[c] === "\n"){
		count++;
	} 
}

console.log(count);