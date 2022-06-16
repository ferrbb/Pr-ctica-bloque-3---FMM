//Manejador de Listados
frmListados.botonEnviar.addEventListener("click",manejadorListado);
document.querySelector("#comboListados").addEventListener("change",manejadorListadoSocios,false);

function manejadorListadoSocios()
{
    let combo=document.querySelector("#comboListados");
    if(combo.selectedIndex==4)
    {
                let oInputDNI = document.createElement("input");
                oInputDNI.setAttribute("type","text");
                oInputDNI.setAttribute("id","iDNIBuscar");
                oInputDNI.classList.add("form-control");
                oInputDNI.classList.add("mb-4");
                frmListados.insertBefore(oInputDNI,frmListados.botonEnviar);
                let oSpanDNI=document.createElement("span");
                oSpanDNI.setAttribute("id","lblDNIBuscar");
                oSpanDNI.textContent = "DNI";
                oSpanDNI.classList.add("input-group-text");
                frmListados.insertBefore(oSpanDNI,oInputDNI);
    }
    
}

function ocultarTodosFormularios() {
    let oFormularios = document.querySelectorAll("formularios");
    for(let oFor of oFormularios){
        oFor.style.display = "none";
    }
}

function manejadorListado(){
    let oSpanDNI = document.getElementById("lblDNIBuscar");
    let oInputDNI = document.getElementById("iDNIBuscar");

    

    let oCombo = document.querySelector("#comboListados");
    let oOption = oCombo.children[oCombo.selectedIndex];
    switch(oOption.value){
        case "nulo":
            alert("Debes seleccionar un listado");
            break;
        case "socios":
            ocultarTodosFormularios();
            listadoSocios();
            break;
        case "tarifas":
            ocultarTodosFormularios();
            listadoTarifas();
            break;
        case "clases":
            ocultarTodosFormularios();
            listadoClases();
            break;
        case "buscarSocioPorDNI":
            ocultarTodosFormularios();
            listadoBuscarUsuario();
            break;  
        default:
            oInputDNI.remove();
            oSpanDNI.remove();
            break;        
    }
}

//Listados de socios

function listadoSocios(){

    $.get("Php/listadoSocios.php",procesoRespuestaGetSocios,'json');
    frmListados.reset();
}

function procesoRespuestaGetSocios(data)
{
    
    let tabla = "<table style='text-align:center; border-color: black;' border='1' class='table table-bordered'>";
    tabla += "<tr class='table-dark'><th>DNI</th><th>NOMBRE</th><th>EDAD</th><th>SEXO</th><th>MONITOR</th></tr>";
    for(let oSoc of data){
        tabla+="<tr> <td>"+oSoc.dni+"</td> <td>"+oSoc.nombre+"</td><td>"+oSoc.edad+"</td><td>"+oSoc.sexo+"</td><td>"+oSoc.monitor+"</td></tr>";
    }
    tabla+="<table>";
    document.getElementById("listado").innerHTML=tabla;
}

//Listado de tarifas

function listadoTarifas(){

    $.get("Php/listadoTarifas.php",procesoRespuestaGetTarifas,'json');
    frmListados.reset();
}

function procesoRespuestaGetTarifas(data)
{
    
    let tabla = "<table style='text-align:center; border-color: black;' border='1' class='table table-bordered'>";
    tabla += "<tr class='table-dark'><th>NOMBRE</th><th>PRECIO</th><th>TIPO</th><th>DURACION</th></tr>";
    for(let oTar of data){
        tabla+="<tr><td>"+oTar.nombre+"</td> <td>"+oTar.precio+"</td><td>"+oTar.tipo+"</td><td>"+oTar.duracion+"</td></tr>";
    }
    tabla+="<table>";
    document.getElementById("listado").innerHTML=tabla;
}

//Listado de clases

function listadoClases(){

    $.get("Php/listadoClases.php",procesoRespuestaGetClases,'json');
    frmListados.reset();
}

function procesoRespuestaGetClases(data)
{
    
    let tabla = "<table style='text-align:center; border-color: black;' border='1' class='table table-bordered'>";
    tabla += "<tr class='table-dark'><th>ID</th><th>NOMBRE</th><th>DESCRIPCIÓN</th><th>DIA INICIO</th><th>DIA FIN</th><th>HORA INICIO</th><th>HORA FIN</th><th>CAPACIDAD</th><th>TIPO</th><th>DNI MONITOR</th></tr>";
    for(let oClas of data){
        tabla+="<tr><td>"+oClas.id+"</td> <td>"+oClas.nombre+"</td><td>"+oClas.descripcion+"</td><td>"+oClas.diaInicio+"</td><td>"+oClas.diaFin+"</td><td>"+oClas.horaInicio+"</td><td>"+oClas.horaFin+"</td><td>"+oClas.capacidad+"</td><td>"+oClas.tipo+"</td><td>"+oClas.dniMonitor+"</td></tr>";
    }
    tabla+="<table>";
    document.getElementById("listado").innerHTML=tabla;
}

// Listado buscar socio por dni

function listadoBuscarUsuario(){
    let sDNI  = document.querySelector("#iDNIBuscar").value;
    $.get("Php/listadoSocios.php?dni="+sDNI,procesoRespuestaGetSocios,'json');
    frmListados.reset();
}


