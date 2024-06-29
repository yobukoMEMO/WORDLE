//programa
let intentos = 6
let diccionario = ["APPLE", "HURLS", "WINGS", "YOUTH"]
let palabraSecreta = diccionario [Math.floor(Math.random() * diccionario.length)]
let button =document.getElementById("guess-button");
let input = document.getElementById("guess-input")
let grid = document.getElementById("grid")
button.addEventListener("click",intentar)
function intentar(){
   let intento = input.value.toUpperCase()
   if (intento ==palabraSecreta){
    terminar("<h1>GANASTE! :) </h1>")
    return
    let grid = document.getElementById("grid")
    let row = document.createElement("div")
    row.className = "row"
   }
   let row = document.createElement("div")
   row.className = "row"
for(let i in palabraSecreta){ 
    let span = document.createElement("span")
    span.className = "letter"
    console.log(palabraSecreta[i])
   if ( intento[i] === palabraSecreta[i]){ //verde
        span.innerHTML = intento[i]
        span.style.backgroundColor = "#79b851"
    } else if(palabraSecreta.includes(intento[i])){ //amarillo
        span.innerHTML = intento[i]
        span.style.backgroundColor = "#f3c237"
    } else{ //gris
        span.innerHTML = intento[i]
        span.style.backgroundColor = "#a4aec4"
    }
    row.appendChild(span)
}
grid.appendChild(row)
intentos--
if( intentos == 0){
    terminar("<h1>PERDISTE! :( </h1>")
}
}
function terminar(mensaje){
    input.disabled = true
    button.disabled = true
    let contenedor =document.getElementById("guesses")
    contenedor.innerHTML = mensaje
}

