const http = require('http');

const servidor = http.createServer((req, res)=>{
    res.end('Hola, mundo!');
})

const PORT = 5000
servidor.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`)
});