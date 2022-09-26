

const readline = require('readline')

const util = require('util')
let RL = readline.createInterface(process.stdin , process.stdout)

RL.Question("Your Name ?",(name)=>{
    console.log(name)
})