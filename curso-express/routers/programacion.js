const express = require('express');

const {programacion} = require('../data/cursos.js').infoCursos;

const routerProgramacion = express.Router();
//Middleware
routerProgramacion.use(express.json());

routerProgramacion.get('/',(req,res)=>{
    res.json(programacion);
});

routerProgramacion.get('/:lenguaje',(req,res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje == lenguaje);
    if(resultados.length < 1){
        //return res.status(204).send(`No se encontraron cursos de ${lenguaje}`);
        return res.status(204).end();
    }

    if (req.query.ordenar === 'vistas') {
        return res.json(resultados.sort((a, b) => b.vistas - a.vistas));
    }

    res.json(resultados);
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if(resultados.length < 1){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    res.json(resultados);
});

routerProgramacion.post('/',(req,res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.json(programacion);
});

routerProgramacion.put('/:id',(req,res)=>{
    const cursoActualizado = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion[indice] = cursoActualizado;
    }
    res.json(programacion);
});

routerProgramacion.patch(':id',(req,res)=>{
    const infoActualizada = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);
    
    if(indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada);
    }
    res.json(programacion);
});

routerProgramacion.delete('/:id',(req, res)=>{
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);

    if(indice >= 0){
        programacion.splice(indice, 1);
    }
    res.json(programacion);
});

module.exports = routerProgramacion;