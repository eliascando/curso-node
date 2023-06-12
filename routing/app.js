const http = require('http');
const {infoCursos} = require('./cursos');
const PORT = 5000;

const servidor = http.createServer((req, res)=>{
    const {method} = req;
    switch(method){
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            res.end(`El metodo ${method} no puede ser manejado por el servidor`);
    }
});

function manejarSolicitudGET(req, res){
    const path = req.url;

    if(path === '/'){
        res.writeHead(200, {'Content-Type':'application/json'});
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
    }else if(path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos));
    }else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.programacion));
    }else if(path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.matematicas));
    }

    res.statusCode = 404;
    return res.end('El recurso solicitado no existe...');
}

function manejarSolicitudPOST(req, res){
    const path = req.url;

    if(path === '/cursos/programacion'){
        let cuerpo = '';

        req.on('data', contenido => {
            cuerpo += contenido.toString();
        });

        req.on('end', ()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);
            //Convertir a un objeto de JavaScript
            cuerpo = JSON.parse(cuerpo);
            console.log(cuerpo.titulo);
            console.log(typeof cuerpo);
            res.end('El servidor recibio una solicitud POST para /cursos/programacion');
        })
    }
}
servidor.listen(PORT,()=>{
    console.log(`Server listening on port: ${PORT}`);
})
