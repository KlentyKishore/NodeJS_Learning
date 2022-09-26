
const fs = require('fs')


// const fileRead = fs.readFileSync('./readFileV1.txt','utf-8')

// let value = 1998


// fs.writeFileSync('./ WritFile.txt' , fileRead + `\n hello everyone ${value}`)

// console.log("write completed");

//if(err) return console.log("Error 😂 ");

const fileRead = fs.readFile("./readFileV1.txt","utf-8",(err,data) =>
{

    console.log(data);

})

console.log("will read file ✨" );