var fs = require('fs');
var data = '';
var readStream = fs.createReadStream('./airports.csv','utf-8');
var i=1;

readStream.on('end',function(){
    console.log('complete');
});

readStream.on('data',function(chunk){
    data+= chunk;
    console.log('chunk'+i);
    i++;
})