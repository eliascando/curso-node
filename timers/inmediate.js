function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setInmediate()');

setImmediate(mostrarTema, 'Node.js');

console.log('Después de setInmediate()');