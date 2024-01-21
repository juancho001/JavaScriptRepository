// Sintaxis Basica II - Estructura Basica y Sentencias

/* Funciones Predefinidas
* alert("Hola Mundo");
* document.write("Hola Mundo");
* isNaN();
* */

/* Funciones Propias
* son las funciones que definimos durante el desarrollo del programa
* EJP.  miFunction1(); miFunction2(); miFunction3();
* */

/* Tipos de datos
 *  Tipo de datos basicos
 *  - Numericos
 *  - String
 *  - Booleans
 * */

/* Variables
 * Espacio en la memoria del ordenador (Ram) donde se amacena un valor que podra cambiar
 * durante la ejecucion del programa
 * -Sintaxis(declaracion):
 *  var variable_declarada;
 * 
 * **** Reglas a la hora de dar Nombre a una variable: ****
 * - Han de comenzar por letra, simbolo $ o _
 * - Han de contener solo letras, numeros, Simbolos y _
 * - son case Sentitive
 * - no deben contener el mismo nombre de una palabra reservada de JavaScript
 * - se recomienda que sean desciptivas
 * */


var nombre = "Juan";
var puntuacion = 0;
var record;
record = 5000;

window.alert("Hola " + nombre + " tu puntuacion inicial es de " + puntuacion + " y tu puntuacion final es de " + record);