const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

var datalist

readFile('filelist.json', 'utf-8')
    .then((data) => {
        console.log(data.split("\n"))
        datalist = data.split('\"')
    })
    .then((data) => readFile(datalist[1], 'utf-8'))
    .then((data)=>console.log(data))
    .then((data) => readFile(datalist[3], 'utf-8'))
    .then((data)=>console.log(data))
    .catch((err) => console.log(err))
    .finally(() => console.log('done'))