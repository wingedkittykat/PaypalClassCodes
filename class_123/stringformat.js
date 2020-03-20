const format = require('string-format')
var args = format('"{firstname} {lastname}" <{email}>',{
    firstname:"Kriti",
    lastname:'Gupta',
    email: 'kritigupta2513@gmail.com'
})
console.log(args)