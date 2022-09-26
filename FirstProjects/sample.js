//functions

function demo()
{
    console.log("sample text")
}

// First class function


function greet(fn)
{

    fn()
}



greet(demo)

module.exports = demo
