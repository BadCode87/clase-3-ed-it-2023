

const diaSemana = function (diaGetDay) {

    let dia = '';

    switch (diaGetDay) {
        case 0:
            dia = 'domingo';
            break;

        case 1:
            dia = 'lunes';
            break;

        case 2:
            dia = 'martes';
            break;

        case 3:
            dia = 'miercoles';
            break;

        case 4:
            dia = 'jueves';
            break;

        case 5:
            dia = 'viernes';
            break;

        case 6:
            dia = 'sabado';
            break;
    }

    return dia;
}



const mesDelAnio = function (mesAnio) {

    let mes = '';

    switch (mesAnio) {
        case 0:
            mes = 'enero';
            break;

        case 1:
            mes = 'febrero';
            break;

        case 2:
            mes = 'marzo';
            break;

        case 3:
            mes = 'abril';
            break;

        case 4:
            mes = 'mayo';
            break;

        case 5:
            mes = 'junio';
            break;

        case 6:
            mes = 'julio';
            break;

        case 7:
            mes = 'agosto';
            break;
        case 8:
            mes = 'septiembre';
            break;
        case 9:
            mes = 'octubre';
            break;
        case 10:
            mes = 'noviembre';
            break;
        case 11:
            mes = 'diciembre';
            break;
    }

    return mes;
}


let fechaPagina= document.getElementById("fecha");

/* Creo un nuevo objeto Date */

const fecha = new Date();

let nombreDia = fecha.getDay();

let numeroDia = fecha.getDate()

let mes = fecha.getMonth();

let nombreMes = mesDelAnio(mes);

let anio = fecha.getFullYear();

/* Formato de texto en pantalla */
fechaPagina.innerHTML= `Hoy es ${diaSemana(nombreDia)} , ${numeroDia} de ${nombreMes} de ${anio}`;


/* array que guarda frases motivadoras */

const frasesMotivadoras = [
    {
        frase : 'El único modo de hacer un gran trabajo es amar lo que haces ',
        autor: 'Steve Jobs'
    },
    {
        frase : 'Cuanto más duramente trabajo, más suerte tengo  ',
        autor: 'Gary Player'
    },
    {
        frase : 'Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida ',
        autor: 'Confucio'
    },
    {
        frase : 'Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé ',
        autor: 'Benjamin Franklin'
    },
    {
        frase : 'Tu actitud, no tu aptitud, determinará tu altitud  ',
        autor: 'Zig Ziglar'
    },{
        frase : 'Siempre parece imposible... hasta que se hace  ',
        autor: 'Nelson Mandela'
    },
    {
        frase : 'Transforma tus heridas en sabiduría ',
        autor: 'Oprah Winfrey'
    },
    {
        frase : 'Si te caes siete veces, levántate ocho ',
        autor: 'Proverbio Chino'
    },
    {
        frase : 'Con autodisciplina casi todo es posible  ',
        autor: 'Theodore Roosevelt'
    },
    {
        frase : 'No cuentes los días, haz que los días cuenten  ',
        autor: 'Muhammad Ali'
    }
    
];

/* Guardo en una variable el numero del indice del array */
let indice = Math.floor(Math.random() * 10);

/* Aqui guardo la frase  */
let fraseRandom = frasesMotivadoras[indice].frase;

/* Aqui selecciono donde pondré la frase */
let parrafoFrase = document.getElementById("frase");

/* Pongo la frase en el parrafo */
parrafoFrase.innerText = fraseRandom;


/* Creando un elemento quote */
let quote  =  document.createElement('blockquote');

/* Mediante innerText , pongo el auto en la variable */
quote.innerText = frasesMotivadoras[indice].autor;

/* Inserto el elemento en dentro del parrafo de la frase */
parrafoFrase.append(quote);



/*  */

let button = document.getElementById('button_');

button.addEventListener("click", inversionColores);



function inversionColores(){

    let body = document.querySelector('body');

    body.style = "filter:invert(100%)";

    return 'Hola Mundo';

}



















