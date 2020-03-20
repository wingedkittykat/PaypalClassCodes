var fs = require('fs');
fs.readFile('file1.txt',function (err,data){
    fs.readFile('file2.txt',function(err,data){
        console.log(data.toString());
    })
    console.log(data.toString());
})

console.log("asynchronous programming")