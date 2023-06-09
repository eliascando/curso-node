//const curso = require('./curso.json');

//console.log(curso.temas);

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 278000,
    "numLikes": 10000,
    "temas":[
        "JavaScript",
        "Node.js",
        "Express"
    ],
    "esPublico": true,
    "url": "https://youtu.be/1hpc70_OoAg"
}

//OBJECT -> STRING
//Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//STRING -> OBJECT
//Objeto de JavaScript
let infoCursoObject = JSON.parse(infoCursoJSON);
console.log(infoCursoObject);
console.log(typeof infoCursoObject);