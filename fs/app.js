const fs = require('fs');

//Leer un archivo
fs.readFile('fs/inde.html','utf-8',(err, contenido)=>{
     if(err){
        throw err;
     }else{
        console.log(contenido);
     }
});

//Renombrar un archivo
fs.rename('fs/index.html','fs/main.html',(err)=>{
    if(err){
        throw err;
    }
    console.log('Nombre cambiado con éxito!');
})

//Agregar contenido al final de un archivo.
 fs.appendFile('fs/main.html','<p>Holis</p>',(err)=>{
     if(err){
         throw err;
     }
     console.log('Archivo actualizado!');
})

//Reemplaza todo el contenido del archivo
 fs.writeFile('fs/main.html','Contenido Nuevo',(err)=>{
     if(err){
         throw err;
     }
     console.log('Contenido reemplazado!');
})

//Eliminar archivos
fs.unlink('fs/prueba.html', (err)=>{
    if(err){
        throw err;
    }
    console.log('Archivo eliminado!');
})

//Estos estos procesos son asincronos, para hacer que estos metodos sean sincronos
//se debe añadir Sync y añadir el contenido del metodo a una constante
//Ejemplo: const archivo = fs.readFileSync('fs/index.html');