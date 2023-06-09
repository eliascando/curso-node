function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 2000, 'Node.js');

function sumar(a, b){
    console.log(a+b);
}

setTimeout(sumar, 1000, 10, 20);