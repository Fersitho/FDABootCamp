const http = require('http')

const PORT = 3000

const server = http.createServer( (req, res) => {

    res.setHeader("Content-Type", "text/html")
    res.end("<h1> Hola, esto es lo tipico </h1>")


})

server.listen(PORT, () => {
    console.log('Server is running')
    
        // open(`http://localhost:3000/`);
      
})

