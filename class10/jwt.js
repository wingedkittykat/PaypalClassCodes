var jwt = require('jsonwebtoken')

JWT_SECRET = 'dontspeakofthis'

var token = jwt.sign(
    {username: 'admin',value: '12345'},
    JWT_SECRET,
    { expiresIn: '24h'}
)

jwt.verify(token, JWT_SECRET,function(err,res){
    if(err){
        console.log(err);
    }
    console.log(res.username)
    console.log(res.value)
});
