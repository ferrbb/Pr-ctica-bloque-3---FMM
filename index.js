var oUsuarioLogueado = null;


// Carga dinámica de formularios
$(document).ready(function() {

    
   document.querySelector("#altaSocio").addEventListener("click",abrirAltaSocio);
   document.querySelector("#modificarSocio").addEventListener("click",abrirModificarSocio);
   document.querySelector("#altaTarifa").addEventListener("click",abrirAltaTarifa);
   document.querySelector("#contratarTarifa").addEventListener("click",abrirContratarTarifa);
   document.querySelector("#crearClase").addEventListener("click",abrirCrearClase);
   document.querySelector("#apuntarClase").addEventListener("click",abrirApuntarseClase);
   document.querySelector("#listados").addEventListener("click",abrirListados);
   document.getElementById("cambiarCuenta").addEventListener("click", abrirLogin);

});
function abrirLogin()
{
    localStorage.removeItem('oUsuarioLogueado');
    window.location.href = "index.html";
}

function abrirAltaSocio() {

    let divFormularios = document.querySelectorAll("#formularios > div > div");
     for(capa of divFormularios){
         capa.classList.add("d-none");  // Clase bootstrap para ocultar
     }
 
     // Verifico si ya he cargado el formulario antes
     if (document.querySelector("#divfrmAltaSocio") == null){ // == null --> no está cargado
         $("<div>").appendTo('#formularios').load("Formularios/altaSocio.html", 
                                                 function(){ $.getScript("js/altaSocio.js"); });
     } else {
         // Lo muestro si está oculto
         document.querySelector("#divfrmAltaSocio").classList.remove("d-none");
     }

}

function abrirModificarSocio() {

    let divFormularios = document.querySelectorAll("#formularios > div > div");
     for(capa of divFormularios){
         capa.classList.add("d-none");  // Clase bootstrap para ocultar
     }
 
     // Verifico si ya he cargado el formulario antes
     if (document.querySelector("#divfrmModificarSocio") == null){ // == null --> no está cargado
         $("<div>").appendTo('#formularios').load("Formularios/modificarSocio.html", 
                                                 function(){ $.getScript("js/modificarSocio.js"); });
     } else {
         // Lo muestro si está oculto
         document.querySelector("#divfrmAltaSocio").classList.remove("d-none");
     }

}

function abrirAltaTarifa() {

    let divFormularios = document.querySelectorAll("#formularios > div > div");
     for(capa of divFormularios){
         capa.classList.add("d-none");  // Clase bootstrap para ocultar
     }
 
     // Verifico si ya he cargado el formulario antes
     if (document.querySelector("#divfrmAltaTarifa") == null){ // == null --> no está cargado
         $("<div>").appendTo('#formularios').load("Formularios/altaTarifa.html", 
                                                 function(){ $.getScript("js/altaTarifa.js"); });
     } else {
         // Lo muestro si está oculto
         document.querySelector("#divfrmAltaTarifa").classList.remove("d-none");
     }

}

function abrirContratarTarifa() {

    let divFormularios = document.querySelectorAll("#formularios > div > div");
     for(capa of divFormularios){
         capa.classList.add("d-none");  // Clase bootstrap para ocultar
     }
 
     // Verifico si ya he cargado el formulario antes
     if (document.querySelector("#divfrmContratarTarifa") == null){ // == null --> no está cargado
         $("<div>").appendTo('#formularios').load("Formularios/contratarTarifa.html", 
                                                 function(){ $.getScript("js/contratarTarifa.js"); });
     } else {
         // Lo muestro si está oculto
         document.querySelector("#divfrmContratarTarifa").classList.remove("d-none");
     }

}

function abrirCrearClase() {

    let divFormularios = document.querySelectorAll("#formularios > div > div");
     for(capa of divFormularios){
         capa.classList.add("d-none");  // Clase bootstrap para ocultar
     }
 
     // Verifico si ya he cargado el formulario antes
     if (document.querySelector("#divfrmCrearClase") == null){ // == null --> no está cargado
         $("<div>").appendTo('#formularios').load("Formularios/crearClase.html", 
                                                 function(){ $.getScript("js/crearClase.js"); });
     } else {
         // Lo muestro si está oculto
         document.querySelector("#divfrmCrearClase").classList.remove("d-none");
     }

}

function abrirApuntarseClase() {

    let divFormularios = document.querySelectorAll("#formularios > div > div");
     for(capa of divFormularios){
         capa.classList.add("d-none");  // Clase bootstrap para ocultar
     }
 
     // Verifico si ya he cargado el formulario antes
     if (document.querySelector("#divfrmApuntarClase") == null){ // == null --> no está cargado
         $("<div>").appendTo('#formularios').load("Formularios/apuntarseClase.html", 
                                                 function(){ $.getScript("js/apuntarseClase.js"); });
     } else {
         // Lo muestro si está oculto
         document.querySelector("#divfrmApuntarClase").classList.remove("d-none");
     }

}

function abrirListados() {

    let divFormularios = document.querySelectorAll("#formularios > div > div");
     for(capa of divFormularios){
         capa.classList.add("d-none");  // Clase bootstrap para ocultar
     }
 
     // Verifico si ya he cargado el formulario antes
     if (document.querySelector("#divfrmListados") == null){ // == null --> no está cargado
         $("<div>").appendTo('#formularios').load("Formularios/listados.html", 
                                                 function(){ $.getScript("js/listados.js"); });
     } else {
         // Lo muestro si está oculto
         document.querySelector("#divfrmListados").classList.remove("d-none");
     }

}


//ocultar nabvar

function ocultarNabvar()
{
    document.getElementById("navbar").style.display="none";
}

//Mostrar nabvar

function mostrarNabvar()
{
    document.getElementById("navbar").style.display="block";

}

