const http = require('http');

const servidor = http.createServer((req, res)=>{
    console.log('===> req(solicitud)');
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    console.log(res.statusCode)
    res.end('Hola, mundo');
});

const port = 3000
servidor.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});