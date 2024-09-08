const http = require("http")
const fs = require("fs")

// create a prot for the server
const port = 4000
const localhost = "127.0.0.1"

// create a server using the HTTP module
const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, {"content-type": "text/html"})
            fs.readFile("./index.html", {encoding: "utf8"}, (err,data) => {
                if(err) console.log(err)
                    console.log(process.env)
                res.end(data)
            })
            break;
    
        case "/index":
            res.writeHead(200, {"content-type": "text/html"})
            fs.readFile("./index.html", {encoding: "utf8"}, (err,data) => {
                if(err) console.log(err)
                res.end(data)
            })
            break;
    
        case "/about":
            res.writeHead(200, {"content-type": "text/html"})
            fs.readFile("./about.html", {encoding: "utf8"}, (err,data) => {
                if(err) console.log(err)
                res.end(data)
            })
            break;
    
        case "/contact-me":
            res.writeHead(200, {"content-type": "text/html"})
            fs.readFile("./contact-me.html", {encoding: "utf8"}, (err,data) => {
                if(err) console.log(err)
                res.end(data)
            })
            break;
              
            default:
                res.writeHead(200, {"content-type": "text/html"})
                fs.readFile("./404.html", {encoding: "utf8"}, (err,data) => {
                    if(err) console.log(err)
                    res.end(data)
                })
            break;
    }
})

// listen to server request on the port
server.listen(port, localhost, ()=>{
    console.log(`server is running on port ${port}`)
})