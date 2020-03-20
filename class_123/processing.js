var request = require('request');
var dataset = [];
request.get('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var x = body.split("\n");
        console.log(x);
        x.forEach(element =>{var k = element.split(',');dataset.push(k);});
    }
    console.log(dataset);
});
var countries = []

dataset.forEach(element => {
    if(element[2])
})