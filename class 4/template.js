var express = require('express')
var app = express();

app.set('view engine','pug');
app.set('views','./views');

app.get('/index',function(req,res){
    res.render('page');
})

app.get('/render',function(req,res){
    res.render('page',{
        title: "loop",
        friends: 4,
        message: "For loop test",
        count: 5
    })
})

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded(
    {extended: false})
)

app.post('/addpost',function(req,res){
    console.log(req.body)
    res.render('page2',{
        message: 'Data Submission post',
        data: JSON.stringify(req.body)
    })
})

app.get('/add',function(req,res){
    console.log(req.query)
    res.render('page2',{
        message: 'Data submission',
        data: JSON.stringify(req.query)
    })
})

app.listen(8000);