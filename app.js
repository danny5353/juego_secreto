// el metodo o funcion querySlector se utiliza para llamar a las etiquetas
/*  A continuación la forma básica de inicializar una variable y asignarle Una 
 etiqueta utilizando la función del cual selector 
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';
*/
// declarando la funcion 

let numeroSecreto = generarNumeroSecreto(); // se puede llamar a una función dentro de una variable lo cual a su vez inicializa la variable


function verificarIntento() {
    // Estamos inicializando la variable número usuario y le asignamos la etiqueta input qué funciona como un prompt en HTML
    //let numeroUsuario1 = document.querySelector('input'); 
   /*  La función document. document.getElementById se utiliza para llamar por medio del id a un elemento de una etiqueta en el HTML similar
     al cual selector pero de forma más específica ("value" solo toma el valor)*/
    let numeroUsuario2 = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log (typeof(numeroSecreto));
    console.log ((numeroUsuario2));
    console.log (typeof(numeroUsuario2));
    // El valor de comparación utilizando ""==="" no sólo compara el contenido si no, también el tipo de dato. En pocas palabras es una doble comparación
    console.log(numeroUsuario2 === numeroSecreto);
    return;
}
/*  al utilizar funciones se pueden reutilizar Código para reducir la cantidad de líneas
 Lo que se considera buenas prácticas en la programación  */
function asignarTextoElemento(elemento,texto){
/*  Cuándo se quiere llamar a una etiqueta o ser mas especificos se utiliza en las 
    comillas simples o normales dentro del querySelector('h1'). Sin embargo si el objetivo 
    es llamar a una variable se omiten las comillas querySelector(varible) */
    let  elementoHtml = document.querySelector(elemento);  
    elementoHtml.innerHTML = texto;
    return; // Por buenas prácticas siempre se utiliza el return Por más que la función no retorne nada
} 

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}


asignarTextoElemento('h1','Juego del número secreto');
// estamos llamando a la misma función cambiando las dos variables elemento y texto para reutilizar el código 
asignarTextoElemento('p','Indica un numero del 1 al 10'); 