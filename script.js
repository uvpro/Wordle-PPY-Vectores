let intentos = 6
let diccionario = ['CHIPA', 'MITAI', 'YVOTY', 'KARAI']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}


let button = document.getElementById('guess-button')
button.addEventListener('click', intentar)
const input = document.getElementById("guess-input");
const valor = input.value
const GRID = document.getElementById("grid");
const ROW = document.createElement('div');

function intentar(){
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row'
    const INTENTO = leerIntento();
    
    if (INTENTO === palabra ) {
        console.log("GANASTE")
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        console.log(INTENTO[i], "verde")
        SPAN.innerHTML = INTENTO[i];
        SPAN.style.backgroundColor = '#79b851';
        ROW.appendChild(SPAN)
        }
        GRID.appendChild(ROW)
        terminar("<h1>GANASTE!</h1>")
        return
    }
        for(let i in palabra){
            const SPAN = document.createElement('span');
          SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){   //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
            SPAN.style.borderColor="green"
        }
         else if( palabra.includes(INTENTO[i]) ) {  //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237';
            SPAN.style.borderColor="yellow"
        } 
        else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4';
            SPAN.style.borderColor="grey"
        }
        ROW.appendChild(SPAN)
    
    }
    GRID.appendChild(ROW)
}
		intentos--

    if (intentos==0){
        terminar("<h1>PERDISTE!</h1>")
    }

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}
for (let i in palabra){
	console.log(palabra[i]);
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
