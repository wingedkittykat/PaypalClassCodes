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

var id,name,address,username,password;

app.post('/adduser',function(req,res){
    console.log(req.body);
    id = req.body.id;
    name = req.body.name;
    address = req.body.address;
    username = req.body.username;
    password = req.body.password;
    res.send('user added')
});

app.get('/user/1',function(req,res){
    if(req.query['username']==username && req.query['password']==password){
        res.send(id+" "+name+" "+address);
    }
    else{
        res.send('invalid');
    }
});