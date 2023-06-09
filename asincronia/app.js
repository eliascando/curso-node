function ordenarProducto(producto){
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando: ${producto} de freeCodeCamp`);
        setTimeout(()=>{
            if(producto === 'taza'){
                resolve('Orenando una taza con el logo de freeCodeCamp');
            }else{
                reject('Este producto no esta disponible actualmente');
            }
        },2000)
    });
}

function procesarPedido(response){
    return new Promise((resolve, reject)=>{
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: ${response}`);
        setTimeout(()=>{
            resolve('Gracias por su compra: Disfruta tu producto! 🙂');
        },4000);
    });
}

//Encadenar promesas
// ordenarProducto('taza')
//     .then(respuesta => {
//         console.log('Respuesta recibida');
//         console.log(respuesta);
//         return procesarPedido(respuesta);
//     })
//     .then(respuestaProcesada =>{
//         console.log(respuestaProcesada);
//     })
//     .catch(error => {
//         console.log(error);
//     })


//Uso de async await
async function realizarPedido(producto){
    try{
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    }catch(error){
        console.log(error);
    }
}

realizarPedido('queso');