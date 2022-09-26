const http = require('http')
const url = require('url') // Routing

const server = http.createServer((req,res) =>
{
    let pageURL = req.url

    if(pageURL === "/")
    {
        res.end("Commom Page !!")
    }
    else if (pageURL == "/Product")
    {
        res.end("Product Page !!")
    }
    else if (pageURL == "/api")
    {
        const productData = JSON.parse(

            '{"ID":"121231", "URL":"KK"}'

        )
        res.writeHead(200,{

            'content-type':'text/html'

        })
        console.log(productData);
        res.end(productData)


    }
    else
    {
        res.writeHead(404)
        res.end("Page not Found ! 😂 ")
    }

    //console.log(req);

})


server.listen(8000,"localhost", ()=>{
    console.log("listening 🤔");
})