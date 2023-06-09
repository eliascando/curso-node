const estatusPedido = () =>{
    return Math.random() < 0.8;
}

// for(let i = 0; i < 10; i++){
//     console.log(estatusPedido());
// }
const miPedidoDePizza = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve('Pedido Exitoso!, Su pixa está en camino 🙂');
        }else{
            reject('Ocurrio un error. Por favor intente nuevamente.');
        }
    },3000)
})

// const manejarPedido = (mensaje) => {
//     console.log(mensaje);
// }
// const rechazarPedido = (mensaje) =>{
//     console.log(mensaje);
// }

//miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza
    .then((mensajeConfirmacion)=>{
        console.log(mensajeConfirmacion);
    })
    .catch((mensajeError)=>{
        console.log(mensajeError);
    });