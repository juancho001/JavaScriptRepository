/**Sintaxis Básica IV. Operadores y prompt */

// Prompt -> ventana para la entrada de datos
// Alert -> ventana para la salida de datos

var nombre = prompt("Introduce tu nombre :");
var apellido = prompt("Introduce tu Apellido :");
var edad= prompt("Introduce tu Edad :");
var restaEdad= prompt("¿Cuantos años deseas quitarte ? :");

edad -= restaEdad; // decrementa una variable en un valor x

document.getElementById('variables').innerHTML=('Bienvenido : '+ nombre + ' ' +apellido + "<br>" 
+ "Tu nueva edad es : " + edad + " Años");

//document.write("<p>"+ "Nombre : " +nombre+"</p>");
//document.write("<p>"+ "Apellido : "+apellido );


/** Operadores */

// += Incrementa en x una variable
// -= Decrementa en x una variable
// *= Multiplica en x una variable
// /= Divide en x una variable
// ++ Incrementa en 1 una variable
// -- Decrementa en 1 una variable