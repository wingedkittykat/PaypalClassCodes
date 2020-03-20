var express = require('express')
var app = express();
app.use(express.json());
app.use(function(req,res,next){
    console.log('in middleware')
    let date_ob = Date.now();
    next();
    let date_ob2 = Date.now();

    exec_time = date_ob2-date_ob;
    console.log(exec_time);
})



app.get('/',function(req,res){
    console.log(req.headers['session'])
    console.log(req.query['username'])
    console.log(req.query['password'])
    res.send('Hello World')
});

app.get('/about',function(req,res){
    res.send('About page')
});

app.get('/user/:id/:name',function(req,res){
    console.log(req.params)
    res.send('Hello '+req.params.id+'-'+req.params.name)
    console.log(req.body)
})

app.listen(8070);