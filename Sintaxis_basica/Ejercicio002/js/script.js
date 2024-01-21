window.alert("este escript se ejecuta desde un archivo independiente..")
document.writeln("Esto texto se carga despues que se carga el documento html."); // escribe un contenido en el body

$(function(){
    $("body").hide().fadeIn(3000); // hace que el body se carge con un efecto retardado 
});