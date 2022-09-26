


const events = require('events') 

let eventEmitter = newevents.EventEmitter() 

// def

eventEmitter.on('invoked',()=>{
    console.log("invoked triggered");
})


let age = 24

if (age>18)
{
    eventEmitter.emit('invoked')
}

