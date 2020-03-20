var fs = require('fs');
var data = fs.readFileSync('file1.txt');
console.log(data.toString());
fs.readFile('file2.txt',function(err,data){
    console.log(data.toString());
})
//Now its for synchronous
//console.log("asynchronous programming")