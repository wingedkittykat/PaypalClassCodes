const fs = require('fs');

function readFile(filename, type) {
    let promise = new Promise((resolve, reject) => { 
        fs.readFile(filename, type, (error, result) => {
            if (error) { return reject(error); };
            setTimeout(resolve,1500,result);
        })
    })
    return promise;
}

let promise = readFile('test.json', 'utf-8')

promise
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => console.log('done'))