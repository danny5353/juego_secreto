
//let numeroSecreto = generarNumeroSecreto(); // se puede llamar a una función dentro de una variable lo cual a su vez inicializa la variable
//let intentos = 1;
/* las variaables numeroSecreto e intentos se pueden inicar el 0 y la funcion condicionesIniciales() 
se encargara de asignarles valor de igaul forma que las linas 2 y 3 */
let numeroSecreto = 0; 
let intentos = 0;
// Al agregar corchetes al declarar una variable se sobrentiende que es una lista 
let listaNumerosSorteados = [];
let numeroMaximo = 3;
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
/*      A continuación utilizaremos la función getElementById para seleccionar el botón
        "nuevo juego" a través de su id (reiniciar) luego habilitaremos el botón por medio de la función removeAttribute('disabled') 
        que eliminira un atributo de la eqtiqueta en este caso "disabled" */
        document.getElementById('intentos').setAttribute('disabled','true');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor')
        } else {
            asignarTextoElemento('p','El numero secreto es mayor')
        }
       limpiarCaja();
    }
    intentos++;
    return;
}

function asignarTextoElemento(elemento,texto){
    let  elementoHtml = document.querySelector(elemento);   
    elementoHtml.innerHTML = texto;
    return; // Por buenas prácticas siempre se utiliza el return Por más que la función no retorne nada
} 

function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si ya se utilizaron todos los números de la lista definida en este caso el número 
    // máximo que es 10 se podría utilizar una condicional para evitar un ciclo infinito
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        document.getElementById('reiniciar').setAttribute('disabled','true');
    } else {
    // Utilizando recursividad y métodos de una lista (Arraylist)podemos llamar a la misma función dentro de una condición Y retornar el valor
    // si el numero generado esta en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function limpiarCaja(){
/*  En caso de utilizar querySelector para llamar a una etiqueta por medio del 
    id se utiliza el símbolo de numeral "#" al principio Del nombre */
    //let valorCaja = document.querySelector('#valorUsuario');
/*  Al utilizar solo comillas '' en lugar de un valor el espacio en memoria se 
    queda en blanco lo que es igual a borrar o limpiar la variable */
    //valorCaja.value ='';
/*  para simplicaficar codigo de la linea 36 y 39 se puede utilizar la sentencia de 
    igual al mismo tiempo que declaramos la variable */
    document.querySelector('#valorUsuario').value ='';
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    // estamos llamando a la misma función cambiando las dos variables elemento y texto para reutilizar el código 
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);  
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    //Inicializar el numero intentos 
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego 
    // la función setAttribute() al contrario de removeAttribute() agrega un atributo a la etiqueta en este caso habilita el botón
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.getElementById('intentos').removeAttribute('disabled');

}

condicionesIniciales();