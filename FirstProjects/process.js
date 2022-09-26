//console.log(process.argv);

process.stdout._write("Aske me questions")

process.stdin.on('data',function(answer)
{
    console.log(answer.toString())
})