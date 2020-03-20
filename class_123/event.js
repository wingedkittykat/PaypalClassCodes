var events = require("events");
var eventEmmiter = new events.EventEmitter();

eventEmmiter.on('read',function(file){
    console.log('read event - l1 '+file)
});
eventEmmiter.on('read',function(file){
    console.log('read event - l2 '+file)
});
eventEmmiter.on('connect',function(file){
    console.log('connect event - l1 '+file)
});

eventEmmiter.emit('read','JournalDEV.txt');
eventEmmiter.emit('connect','server connected');