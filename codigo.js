function buscarSocio(usuario) {                

    $.ajaxSetup({
        async: false
    });
    
    let oSocio;
    $.getJSON('Php/buscarSocio.php?usuario='+usuario, function( arrSocio ) {
        if(arrSocio) {
           oSocio = new Socio(arrSocio.usuario,arrSocio.contraseña,arrSocio.nombre,arrSocio.dni,arrSocio.edad,arrSocio.sexo,arrSocio.monitor);           
         }
         else 
            oSocio =  false;
    
         
      });
      $.ajaxSetup({
        async: true
    });
      return oSocio;
    }


    function buscarSocioDni(dni) {                

        $.ajaxSetup({
            async: false
        });
        
        let oSocio;
        $.getJSON('Php/buscarSocioDni.php?dni='+dni, function( arrSocio ) {
            if(arrSocio) {
               oSocio = new Socio(arrSocio.usuario,arrSocio.contraseña,arrSocio.nombre,arrSocio.dni,arrSocio.edad,arrSocio.sexo,arrSocio.monitor);           
             }
             else 
                oSocio =  false;
        
             
          });
          $.ajaxSetup({
            async: true
        });
          return oSocio;
        }
/*
//frmLogin.verificar.addEventListener("click", login , false);
document.getElementById("comboListados").addEventListener("change",mostrarFiltros,false);
frmAltaTarifa.tipo.addEventListener("change",cambiarDuracion,false);
frmContratarTarifa.nombreTarifa.addEventListener("change",variosReadonly,false);
document.getElementById("cambiarCuenta").addEventListener("click", inicio);
frmContratarTarifa.btnBuscarCliente.addEventListener("click",buscarCliente);

//Creamos el objeto gestion y despues cargamos el documento XML
var oGestion = new Gestion();
var oXML = loadXMLDoc("xmlGimnasio.xml");
var oSocioBuscado = null;


//Llamada a todas las funciones principales
cargarSocios();
cargarTarifas();
cargarClases();
cargarContrataciones();
cargarComboTarifas();
cargarComboSocios();
cargarComboClases();


function inicio(){
    window.location.href = "index.html";
}

//Para el login, necesitamos un usuario y contraseña, para la práctica del bloque 3 implementaré para que cada usuario tenga que entrar con su propia clave,
//en esta de momento lo ponemos como admin y un usuario normal.
function login(){

    var usuario, contraseña;

    usuario=document.getElementById("nombreUsuario").value;
    contraseña=document.getElementById("contraseña").value;

    if(usuario=="admin" && contraseña=="admin")
    {
        alert("El administrador accedió con éxito");
        document.getElementById('frmLogin').addEventListener("click",ocultarTodosFormularios,false);
        document.getElementById('bienvenida').style.display="none";
        document.getElementById('divlogin').style.display="none";
        document.getElementById('altaSocio').addEventListener("click",mostrarFormulario,false);
        document.getElementById('modificarSocio').addEventListener("click",mostrarFormulario,false);
        document.getElementById('altaTarifa').addEventListener("click",mostrarFormulario,false);
        document.getElementById('contratarTarifa').addEventListener("click",mostrarFormulario,false);
        document.getElementById('apuntarClase').addEventListener("click",mostrarFormulario,false);
        document.getElementById('listados').addEventListener("click",mostrarFormulario,false);

        document.getElementById('crearClase').addEventListener("click",mostrarFormulario,false);
        frmAltaSocio.botonEnviar.addEventListener("click",altaSocio,false);
        document.getElementById('comboSocios').addEventListener("change",mostrarDatosSocios,false);
        frmModificarSocio.botonEnviar.addEventListener("click",modificarSocio,false);
        frmCrearClase.botonEnviar.addEventListener("click",crearClase,false);
        frmAltaTarifa.botonEnviar.addEventListener("click",altaTarifa,false);
        frmContratarTarifa.botonEnviar.addEventListener("click",contratarTarifa,false);
        frmApuntarClase.botonEnviar.addEventListener("click",apuntarseClase,false);
        frmListados.botonEnviar.addEventListener("click",manejadorListado,false);

    }else
    {
        alert("El usuario accedió correctamente");
        document.getElementById('frmLogin').addEventListener("click",ocultarTodosFormularios,false);
        document.getElementById('bienvenida').style.display="none";
        document.getElementById('divlogin').style.display="none";
        document.getElementById('liAltaSocio').style.display="none";
        document.getElementById('modificarSocio').style.display="none";
        document.getElementById('altaSocio').style.display="none";
        document.getElementById('modificarSocio').style.display="none";
        document.getElementById('altaTarifa').style.display="none";
        document.getElementById('crearClase').style.display="none";
        document.getElementById('contratarTarifa').addEventListener("click",mostrarFormulario,false);
        document.getElementById('apuntarClase').addEventListener("click",mostrarFormulario,false);
        document.getElementById('listados').addEventListener("click",mostrarFormulario,false);
        frmContratarTarifa.botonEnviar.addEventListener("click",contratarTarifa,false);
        frmApuntarClase.botonEnviar.addEventListener("click",apuntarseClase,false);
        frmListados.botonEnviar.addEventListener("click",manejadorListado,false);

    }

}

//Alta Socio, donde una persona se inscribe dentro del gym.

function altaSocio() {    
    let sNombreSocio = document.querySelector(".nombreSocio").value;
    let sDNI = document.querySelector(".dniSocio").value;    
    let iEdad = document.querySelector(".Edad").value;     
    let bSexo;
    let bMonitor;
    let bValido=true;

    let sErrores="";
    if(document.getElementById('radioSexoHombreAltaSocio').checked){
        bSexo=true;
    }else {
        bSexo=false;
    }
    if(document.getElementsByName('checkMonitor')[0].checked){
        bMonitor=true;
    }else {
        bMonitor=false;
    }

    let oExpReg = /^[\sa-zA-Z]{3,40}$/; 
    if(!validaFormularios(sNombreSocio,oExpReg))
    {
        bValido=false;
        document.querySelector(".nombreSocio").classList.add("error");
        sErrores += "El socio no tiene el formato correcto\n";
        document.querySelector(".nombreSocio").focus();
    }
    else
    {
        document.querySelector(".nombreSocio").classList.remove("error");
    }


    oExpReg = /^\d{8}[a-zA-Z]{1}$/; 
    if(!validaFormularios(sDNI,oExpReg))
    {
        if(bValido)
        frmAltaSocio.dniSocio.focus();

        bValido=false;
        frmAltaSocio.dniSocio.classList.add("error");
        sErrores += "El DNI no tiene el formato correcto\n";
    }
    else
    {
        frmAltaSocio.dniSocio.classList.remove("error");
    }


    oExpReg = /^\d{1,3}$/; 
    if(!validaFormularios(iEdad,oExpReg))
    {
        if(bValido)
        document.querySelector(".nombreSocio").focus();

        bValido=false;
        document.querySelector(".nombreSocio").classList.add("error");
        sErrores += "La edad no tiene el formato correcto\n";
    }
    else
    {
        document.querySelector(".Edad").classList.remove("error");
    }

    if(bValido)
    {
        alert(oGestion.altaSocio(new Socio(sNombreSocio,sDNI,iEdad,bSexo,bMonitor)));
        cargarComboSocios();
        frmAltaSocio.reset();
        ocultarTodosFormularios();
    }
    else
    {
        alert(sErrores);
    }
}

//Modificar Socio, donde se  pueden cambiar los datos de un socio, ya dado de alta anteriormente.

function modificarSocio() {
    let sNombreSocio = document.querySelector(".nombreSocioModificar").value;
    let sDNIABuscar = document.getElementById("comboSocios");
    sDNIABuscar = sDNIABuscar.children[document.getElementById("comboSocios").selectedIndex].value;     
    let sDNIAGuardar = document.querySelector(".dniSocioModificar").value;     
    let iEdad = document.querySelector(".edadModificar").value;
    let bSexo;
    let bMonitor;
    let sErrores="";
    let bValido=true;

    if(document.getElementById('radioSexoHombre').checked){
        bSexo=true;
    }else {
        bSexo=false;
    }
    if(document.getElementById('checkMonitorModificar').checked){
        bMonitor = true;
    } else {
        bMonitor = false;
    }

    if(document.getElementById("comboSocios").selectedIndex == 0)
    {
        sErrores += "Debe seleccionar un socio al que modificar.\n";
        bValido=false;
    }

    let oExpReg = /^[\sa-zA-Z]{3,40}$/; 
    if(!validaFormularios(sNombreSocio,oExpReg))
    {
        bValido=false;
        document.querySelector(".nombreSocioModificar").classList.add("error");
        sErrores += "El socio no tiene el formato correcto\n";
        document.querySelector(".nombreSocioModificar").focus();
    }
    else
    document.querySelector(".nombreSocioModificar").classList.remove("error");


    oExpReg = /^\d{8}[a-zA-Z]{1}$/; 
    if(!validaFormularios(sDNIAGuardar,oExpReg))
    {
        if(bValido)
        document.querySelector(".dniSocioModificar").focus();

        bValido=false;
        document.querySelector(".dniSocioModificar").classList.add("error");
        sErrores += "El DNI no tiene el formato correcto\n";
    }
    else
    sDNI = document.querySelector(".dniSocioModificar").classList.remove("error");


    oExpReg = /^\d{1,3}$/; 
    if(!validaFormularios(iEdad,oExpReg))
    {
        if(bValido)
        document.querySelector(".edadModificar").focus();

        bValido=false;
        document.querySelector(".edadModificar").classList.add("error");
        sErrores += "La edad no tiene el formato correcto\n";
    }
    else
    document.querySelector(".edadModificar").classList.remove("error");
    



if(bValido){
        alert(oGestion.modificarSocio(sDNIABuscar,sDNIAGuardar,sNombreSocio,iEdad,bSexo,bMonitor));
        cargarComboSocios();
        frmModificarSocio.reset();
        ocultarTodosFormularios();
}
else
    alert(sErrores);
}


//Mostrar todos los formularios (Si se añade un formulario se debe añadir el case correspondiente)

function mostrarFormulario(oE){
    ocultarMensajeBienvenida();
    ocultarTodosFormularios();
    borrarTabla();
    oEvento = oE || window.event;
    oFormulario = oEvento.srcElement;
    switch(oFormulario.textContent){
        case "Alta Socio" :
            frmAltaSocio.style.display = "block";
            break;
        case "Contratar Tarifa" :
            frmContratarTarifa.style.display = "block";
            inicializarFormularioContratarTarifa();
            break;
        case "Modificar Socio" :
            frmModificarSocio.style.display = "block";
            break;
        case "Crear una Clase" :
            frmCrearClase.style.display = "block";
            break;
        case "Alta Tarifa" :
            frmAltaTarifa.style.display = "block";
            break;
        case "Apuntarse a una Clase" :
            frmApuntarClase.style.display = "block";
            break;
        case "Listados" :
            frmListados.style.display = "block";
            break;
    }
}

//borrarTabla, para que no se repitan.

function borrarTabla() {
    let oTabla = document.querySelector(".table");
    if(oTabla != null){
        oTabla.remove();
    }
}

// Inicializar formulario de tarifas, para el desplegable de contratar tarifas.

function   inicializarFormularioContratarTarifa(){
    // Borrar los option anteriores, menos el primero "Seleccione una tarifa..."
    let optionsParaBorrar = document.querySelectorAll("#nombreTarifa option");

    for(i=1; i < optionsParaBorrar.length; i++){  // Me salto el primero
        optionsParaBorrar[i].remove();
    }

    // Rellenar el combo
    let oTarifas = oGestion.tarifas;

    for(let i=0; i < oTarifas.length; i++){
        let oOption  = document.createElement("option");
        oOption.textContent = oTarifas[i].nombre;
        oOption.value = oTarifas[i].nombre;
        oOption.dataset.precio = oTarifas[i].precio;
        oOption.dataset.type = oTarifas[i].tipo;
        oOption.dataset.tiempo = oTarifas[i].duracion;

        frmContratarTarifa.nombreTarifa.appendChild(oOption);
    }
    
    frmContratarTarifa.nombreTarifa.addEventListener("change", rellenarCamposTarifa , false);
}

//Función que rellenas los campos con readonly que dependen del valor del despegable.

function rellenarCamposTarifa(){
    let oOptionSeleccionado = frmContratarTarifa.nombreTarifa.options[frmContratarTarifa.nombreTarifa.selectedIndex];

    frmContratarTarifa.precioTarifa.value = oOptionSeleccionado.dataset.precio;
    frmContratarTarifa.tipoTarifa.value = oOptionSeleccionado.dataset.type;
    frmContratarTarifa.duracionTarifa.value = oOptionSeleccionado.dataset.tiempo;
}


//Contratar Tarifa

function contratarTarifa()
{
    let idTarifa = frmContratarTarifa.idTarifa.value;
    let nomTarifa = frmContratarTarifa.nombreTarifa.value;
    let descripcionTarifa = frmContratarTarifa.descripcionTarifa.value;
    
    let sErrores="";
    let bValido=true;
    //Control de errores antes de crear el objeto.
    let hoy = fechaHoy();

   let oExpReg = /^\d{8}[a-zA-Z]{1}$/; 
    if(!validaFormularios(idTarifa,oExpReg))
    {
        bValido=false;
        frmContratarTarifa.idTarifa.classList.add("error");
        sErrores += "El DNI no tiene el formato correcto\n";
        frmContratarTarifa.idTarifa.focus();

    }
    else
        frmContratarTarifa.idTarifa.classList.remove("error");


     oExpReg = /^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜçÇ]{1,40}$/;
    if(!validaFormularios(nomTarifa,oExpReg))
    {
        if(bValido)
        frmContratarTarifa.nombreTarifa.focus();
        
        bValido=false;
        frmContratarTarifa.nombreTarifa.classList.add("error");
        sErrores += "El nombre de la tarifa no tiene el formato correcto\n";
    }
    else
    frmContratarTarifa.nombreTarifa.classList.remove("error");


    if(!validaFormularios(descripcionTarifa,oExpReg))
    {
        if(bValido)
        frmContratarTarifa.descripcionTarifa.focus();
        
        bValido=false;
        frmContratarTarifa.descripcionTarifa.classList.add("error");
        sErrores += "La descripcion de la tarifa no tiene el formato correcto\n";
    }
    else
    frmContratarTarifa.descripcionTarifa.classList.remove("error");


  //Para hacer la fecha de inicio y de fin con sus horas.
  if(frmContratarTarifa.diaTarifa.value != "")
  {
  var fechaTarifa = new Date(frmContratarTarifa.diaTarifa.value);
  }
  else
  {
  sErrores += "Introduzca una fecha.\n";
  frmContratarTarifa.diaTarifa.focus();
  bValido=false;
  }

  if(frmContratarTarifa.horaInicioTarifa.value != "")
  {
  var StringInicioTarifa = frmContratarTarifa.horaInicioTarifa.value;
  let arrayHora = StringInicioTarifa.split(":");
  fechaTarifa.setHours(arrayHora[0]);
  fechaTarifa.setMinutes(arrayHora[1]);
  var fechaFin = new Date (fechaTarifa);
  fechaFin.setHours(fechaTarifa.getHours()+1);
  }
  else
  {
  sErrores += "Introduzca una hora.\n";
  bValido=false;
  frmContratarTarifa.horaInicioTarifa.focus();

  }

   
  //Ya tenemos la fecha inicio y fin.


    if(fechaTarifa < hoy)
    {
        sErrores += "La fecha seleccionada es inferior a la actual.\n";
        bValido = false;
    }

    let tarifaSelecionada = frmContratarTarifa.comboTarifas.value;
    if(frmContratarTarifa.comboTarifas.selectedIndex == 0)
    {
        bValido=false;
        sErrores += "Debe seleccionar una tarifa.";
    
    }


    if(bValido)
    {
        oTarifa = new Tarifa(nomTarifa,descripcionTarifa,fechaTarifa,fechaFin,tarifaSelecionada,idTarifa);
        console.log(oTarifa);
        alert("Tarifa contratada correctamente");
        alert(oGestion.altaTarifa(oTarifa));
        // Todo fue correcto borramos los datos.
        frmContratarTarifa.reset(); 
        ocultarTodosFormularios();
    }
    else{
        alert(sErrores);
    }

}

//Crear Clase, donde el admin podrá crear una clase, donde se podrán apuntar los socios.

function crearClase(){     
    let iIdClase = document.querySelector(".idClase").value;     
    let sNombreClase = document.querySelector(".nombreClase").value;     
    let sDescripcionClase = document.querySelector(".descripcionClase").value;     
    let dtDiaInicio = new Date(document.querySelector('.diaInicioClase').value);
    let horaInicio = new Date("1/1/1 "+document.querySelector(".horaInicioClase").value);
    dtDiaInicio.setHours(horaInicio.getHours());
    dtDiaInicio.setMinutes(horaInicio.getMinutes());     
    let dtDiaFin = new Date(document.querySelector('.diaFinClase').value);
    let horaFin = new Date ("1/1/1 "+document.querySelector(".horaFinClase").value);
    dtDiaFin.setHours(horaFin.getHours());
    dtDiaFin.setMinutes(horaFin.getMinutes());
    let iCapacidad = document.querySelector('.capacidadClase').value;     
    let sTipoClase = document.querySelector('.tipoClase').value;     
    let idMonitor = document.querySelector('.idMonitorClase').value;
    let dtHoy = fechaHoy();
    let sErrores="";
    let bValido=true;



    let oExpReg = /^\d{1,3}$/; 
    if(!validaFormularios(iIdClase,oExpReg))
    {
        document.querySelector(".idClase").focus();
        bValido=false;
        document.querySelector(".idClase").classList.add("error");
        sErrores += "El id de la clase no tiene el formato correcto\n";
    }
    else
    document.querySelector(".idClase").classList.remove("error");



    oExpReg = /^[\w\s]{4,40}$/; 
    if(!validaFormularios(sNombreClase,oExpReg))
    {
        if(bValido)
        document.querySelector(".nombreClase").focus();

        bValido=false;
        document.querySelector(".nombreClase").classList.add("error");
        sErrores += "El nombre de la clase no tiene el formato correcto\n";
    }
    else
    document.querySelector(".nombreClase").classList.remove("error");



    oExpReg = /^[\w\s]{4,40}$/;
        if(!validaFormularios(sDescripcionClase,oExpReg))
    {
        if(bValido)
        document.querySelector(".descripcionClase").focus();
        bValido=false;
        document.querySelector(".descripcionClase").classList.add("error");
        sErrores += "La descripcion de la clase no tiene el formato correcto\n";
    }
    else
    document.querySelector(".descripcionClase").classList.remove("error");


    //Fechas y horas.
    if(document.querySelector('.diaInicioClase').value == "" || document.querySelector('.diaFinClase').value=="")
    {
        bValido=false;
        sErrores+="Las fechas estan incompletas.\n";
    }

    if(document.querySelector(".horaInicioClase").value == "" || document.querySelector(".horaFinClase").value == "")
    {
        bValido=false;
        sErrores+="Las horas estan incompletas.\n";
    }

    //
    oExpReg = /^\d{1,2}$/;
        if(!validaFormularios(iCapacidad,oExpReg))
    {
        if(bValido)
        document.querySelector(".capacidadClase").focus();
        bValido=false;
        document.querySelector(".capacidadClase").classList.add("error");
        sErrores += "La capacidad de la clase no tiene el formato correcto\n";
    }
    else
    document.querySelector(".capacidadClase").classList.remove("error");

    oExpReg = /^[\w\s]{4,40}$/;
        if(!validaFormularios(sTipoClase,oExpReg))
    {
        if(bValido)
        document.querySelector(".tipoClase").focus();
        bValido=false;
        document.querySelector(".tipoClase").classList.add("error");
        sErrores += "El tipo de clase no tiene el formato correcto\n";
    }
    else
    document.querySelector(".tipoClase").classList.remove("error");

    oExpReg = /^\d{8}[a-zA-Z]{1}$/; 
    if(!validaFormularios(idMonitor,oExpReg))
    {
        if(bValido)
        document.querySelector(".idMonitorClase").focus();
        bValido=false;
        document.querySelector(".idMonitorClase").classList.add("error");
        sErrores += "El id del monitor no tiene el formato correcto\n";
    }
    else
    {
        document.querySelector(".idMonitorClase").classList.remove("error");
    }

if(bValido){

    if(dtDiaFin < dtHoy || dtDiaInicio < dtHoy){
        alert("Las fechas introducidas son menores al dia y hora actual");
    }else {
        if(dtDiaInicio < dtDiaFin){
            alert(oGestion.crearClase(new Clase(iIdClase,sNombreClase,sDescripcionClase,dtDiaInicio,dtDiaFin,iCapacidad,sTipoClase,idMonitor)));
            cargarComboClases();
            frmCrearClase.reset();
            ocultarTodosFormularios();
        }else {
            alert("La fecha de inicio es mayor a la fecha de fin");
        }
    }
}
else{
    alert(sErrores);
}
}


//evento de click para desplegable de tarifas

document.getElementById("nombreTarifa").addEventListener("click", function(){

    if(document.getElementById("nombreTarifa").value=='p')
    {
        cargarTarifas();
    }else if(document.getElementById("nombreTarifa").value=='m'){
        cargarTarifas();
    }else{
        cargarTarifas();
    }


});

//Alta Tarifa

function altaTarifa(oEvento){
    var evento= oEvento || window.event;
    let sNombreTarifa = frmAltaTarifa.nombreTarifa.value;
    let precioTarifa = frmAltaTarifa.precioTarifa.value;
    let tipoTarifa = frmAltaTarifa.tipo.value;
    let duracionTarifa = frmAltaTarifa.txtDuracion.value;
    let sErrores="";
    let bValido=true;

    let oExpReg = /^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜçÇ]{1,20}$/;  
    if(!validaFormularios(sNombreTarifa,oExpReg))
    {
        bValido=false;
        frmAltaTarifa.nombreTarifa.classList.add("error");
        sErrores += "El nombre no tiene el formato correcto\n";
        frmAltaTarifa.nombreTarifa.focus();

    }
    else
    {
        frmAltaTarifa.nombreTarifa.classList.remove("error");
    }


     oExpReg = /^[\d]{1,4}$/; 
    if(!validaFormularios(precioTarifa,oExpReg))
    {
        if(bValido)
        frmAltaTarifa.precioTarifa.focus();
        
        bValido=false;
        frmAltaTarifa.precioTarifa.classList.add("error");
        sErrores += "El precio de la tarifa no tiene el formato correcto\n";
    }
    else
    {
        frmAltaTarifa.precioTarifa.classList.remove("error");
        ocultarTodosFormularios();
    }

    if(document.getElementById("tipo").selectedIndex == 0)
    {
        sErrores += "Debe seleccionar algún tipo de tarifa.\n";
        frmAltaTarifa.tipo.classList.add("error");
        bValido=false;
        evento.preventDefault();
    }

    if(bValido)
    {
        alert(oGestion.altaTarifa(new Tarifa(sNombreTarifa,precioTarifa,tipoTarifa,duracionTarifa)));
        cargarComboTarifas();

        frmAltaTarifa.reset(); 
        ocultarTodosFormularios();
    }
    else{
        alert(sErrores);
    }

}

//Apuntarse Clase, donde los socios podrán apuntarse a clases que fueron creadas por el admin anteriormente.

function apuntarseClase() {
    let sDNI = document.querySelector(".dniSocioApuntarseClase").value;
    let indexCombo = document.querySelector("#comboClasesApuntarseClase").selectedIndex;
    let iIDClase = document.querySelector("#comboClasesApuntarseClase")[indexCombo].value;
    let bValido = true;
    let sErrores="";

   let  oExpReg = /^\d{8}[a-zA-Z]{1}$/; 
    if(!validaFormularios(sDNI,oExpReg))
    {
        document.querySelector(".dniSocioApuntarseClase").focus();
        bValido=false;
        document.querySelector(".dniSocioApuntarseClase").classList.add("error");
        sErrores += "El DNI no tiene el formato correcto\n";
    }
    else
    document.querySelector(".dniSocioApuntarseClase").classList.remove("error");


    if(document.querySelector("#comboClasesApuntarseClase").selectedIndex == 0)
    {
        sErrores+= "Debe seleccionar una clase.";
        bValido = false;
    }

    if(bValido)
    {
    alert(oGestion.apuntarseClase(sDNI,iIDClase));
    ocultarTodosFormularios();
    }
    else
    alert(sErrores); 
}

//Cargar pistas desde XML

function cargarTarifas(){
    //Cargarmos las tarifas desde el XML
    var oTarifas = oXML.getElementsByTagName("tarifa");
    for(let oTarifa of oTarifas){
        let nombreTarifa = oTarifa.getElementsByTagName("nombre")[0].textContent;
        let precioTarifa = oTarifa.getElementsByTagName("precio")[0].textContent;
        let tipoTarifa = oTarifa.getElementsByTagName("tipo")[0].textContent;
        let duracionTarifa = oTarifa.getElementsByTagName("duracion")[0].textContent;
        
        oGestion.altaTarifa(new Tarifa(nombreTarifa,precioTarifa,tipoTarifa,duracionTarifa));
    }
}

//Crea el combo de socios para modificarlos
function cargarComboSocios() {
    let oCapa = document.getElementById('comboSocios');
    while(oCapa.hasChildNodes()){
        oCapa.removeChild(oCapa.firstChild);
    }
    oCapa.appendChild(document.createElement("OPTION"))
    oCapa.lastChild.value = "nulo";
    oCapa.lastChild.textContent = "Selecciona un socio...";
    for(let socio of oGestion.aSocios){
        oCapa.appendChild(document.createElement("OPTION"));
        oCapa.lastChild.value = socio.DNI;
        oCapa.lastChild.textContent = socio.NombreAp;
    }
}

//Cuando selecciona un socio del combo pinta los datos del socio
function mostrarDatosSocios() {
    let sDNI = document.getElementById('comboSocios').value;
    if( sDNI != "nulo"){
        let socio = oGestion.buscarSocio(sDNI);
        document.querySelector(".nombreSocioModificar").value = socio.NombreAp;
        document.querySelector(".dniSocioModificar").value = socio.DNI;
        document.querySelector(".edadModificar").value = socio.Edad;
        if(socio.Sexo==true){
            document.getElementById('radioSexoHombre').checked = true;
        }else {
            document.getElementById('radioSexoMujer').checked = true;
        }
        if(socio.EsMonitor==true){
            document.getElementById("checkMonitorModificar").checked = true;
        }else {
            document.getElementById("checkMonitorModificar").checked = false;
        }
        
    }else {
        alert("Seleccione un socio");
        frmModificarSocio.reset();
    }
}

//Cargar los socios desde el XML
function cargarSocios() {
    var oSocios = oXML.getElementsByTagName("socio");
    for(let oSoc of oSocios){
        let sNombreSocio = oSoc.getElementsByTagName("nombre")[0].textContent;
        let sDNI = oSoc.getElementsByTagName("dni")[0].textContent;
        let iEdad = oSoc.getElementsByTagName("edad")[0].textContent;
        let bSexo = oSoc.getElementsByTagName("sexo")[0].textContent;
        let bMonitor = oSoc.getElementsByTagName("monitor")[0].textContent;
        if(bSexo=="Masculino"){
            bSexo=true;
        }else {
            bSexo=false
        }
        if(bMonitor=="Si"){
            bMonitor=true
        }else {
            bMonitor=false;
        }
        oGestion.altaSocio(new Socio(sNombreSocio,sDNI,iEdad,bSexo,bMonitor)); 
    }
}

//Oculta todos los formularios
function ocultarTodosFormularios() {
    let oFormularios = document.querySelectorAll("form");
    for(let oFor of oFormularios){
        oFor.style.display = "none";
    }
}

//Oculta mensaje de bienvenida
function ocultarMensajeBienvenida() {
    let oBienvenida = document.getElementById("bienvenida");
    oBienvenida.style.display = "none";
}

//Crea el combo de tarifas para contratarlas 
function cargarComboTarifas() {
    let oCapa = document.getElementById("nombreTarifa");
    while(oCapa.hasChildNodes()){
        oCapa.removeChild(oCapa.firstChild);
    }
    oCapa.appendChild(document.createElement("OPTION"))
    oCapa.lastChild.value = "nulo";
    oCapa.lastChild.textContent = "Selecciona una tarifa..."
    for (oTarifa of oGestion.aTarifas){
        oCapa.appendChild(document.createElement("OPTION"));
        oCapa.lastChild.value = oTarifa.tipo;
        oCapa.lastChild.textContent = oTarifa.nombre;
    }
    
}

//Carga las clase desde el XML
function cargarClases(){
    var oClases = oXML.getElementsByTagName("clase");
    for(oCla of oClases){
        let iIDClase = oCla.getElementsByTagName("iIdClase")[0].textContent;
        let sNombre = oCla.getElementsByTagName("sNombre")[0].textContent;
        let sDescripcion = oCla.getElementsByTagName("sDescripcion")[0].textContent;
        let dtInicio = new Date(oCla.getElementsByTagName("dtInicio")[0].textContent);
        let dtFin = new Date(oCla.getElementsByTagName("dtFin")[0].textContent);
        let iCapacidad = parseInt(oCla.getElementsByTagName("iCapacidad")[0].textContent);
        let sTipoActividad = oCla.getElementsByTagName("sTipoActividad")[0].textContent;
        let siIdmonitor = oCla.getElementsByTagName("siIdmonitor")[0].textContent;

        oGestion.crearClase(new Clase(iIDClase,sNombre,sDescripcion,dtInicio,dtFin,iCapacidad,sTipoActividad,siIdmonitor));
    }
}

//Crea el combo de clases para apuntarse a ellas
function cargarComboClases(){
    let oCapa = frmApuntarClase.comboClasesApuntarseClase;
    while(oCapa.hasChildNodes()){
        oCapa.removeChild(oCapa.firstChild);
    }
    oCapa.appendChild(document.createElement("OPTION"))
    oCapa.lastChild.value = "nulo";
    oCapa.lastChild.textContent = "Selecciona una clase...";
    for(let clase of oGestion.aClases){
        oCapa.appendChild(document.createElement("OPTION"));
        oCapa.lastChild.value = clase.ID;
        oCapa.lastChild.textContent = clase.Nombre+" "+clase.Inicio.toLocaleDateString("es-ES")+" "+clase.Inicio.getHours()+"H";
    }
}

//Cargar contrataciones desde el XML
function cargarContrataciones(){
    let oTarifas = oXML.querySelectorAll("contratacion");
    for(oTar of oTarifas){
        let snomTarifa = oTar.querySelector("nombre").textContent;
        let sDescripcion = oTar.querySelector("descripcion").textContent;
        let dtFechaContratacion = new Date(oTar.querySelector("fechaContratacion").textContent);
        let dtFechaFin = new Date(oTar.querySelector("fechaFin").textContent);
        let iIDTarifa = oTar.querySelector("idtarifa").textContent;
        let sDNIContratacion = oTar.querySelector("socioContrata").textContent;

        oGestion.contratarTarifa(new Contrato(snomTarifa, sDescripcion, dtFechaContratacion, dtFechaFin, iIDTarifa, sDNIContratacion));

    }
}

//Manejador de Listados
function manejadorListado(){
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
            listadoClase();
            break;
        case "buscarSocioPorDNI":
            ocultarTodosFormularios();
            listadoBuscarSocio();
            break;            
    }
}

//Listado de socios
function listadoSocios(){
    let oTabla = document.createElement("table");
    oTabla.setAttribute("border","5px solid black");
    let oCapa = document.querySelector(".formularios");
    let oTH = document.createElement("th");
    let oSocios = oGestion.socios;

    oTabla.classList.add("table");
  

    let cabecera = oTabla.createTHead();


    let filaCabecera = cabecera.insertRow(-1);
    let celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "DNI";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Nombre Completo";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Edad";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Sexo";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Es Monitor";

    let cuerpo = oTabla.createTBody();

    for(let oSoc of oSocios){
        let filaCuerpo = cuerpo.insertRow(-1);
        let celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oSoc.DNI;

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oSoc.NombreAp;

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oSoc.Edad;

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oSoc.Sexo?"Masculino":"Femenino";

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oSoc.EsMonitor?"Si":"No";

    }
    oCapa.appendChild(oTabla);
    frmListados.reset();
  
}

//listadoTarifas
function listadoTarifas(){
    let oTabla = document.createElement("table");
    oTabla.setAttribute("border","5px solid black");
    let oCapa = document.querySelector(".formularios");
    let oTH = document.createElement("th");
    let oTarifas = oGestion.tarifas;

    oTabla.classList.add("table");
  

    let cabecera = oTabla.createTHead();


    let filaCabecera = cabecera.insertRow(-1);
    let celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Tipo";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Precio";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Duración";

    let cuerpo = oTabla.createTBody();

    for(oTar of oTarifas){
        let filaCuerpo = cuerpo.insertRow(-1);
        let celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oTar.tipo;
        if(oTar.tipo=="1")
        {
            celdaCuerpo.textContent = "Pequeña"; 
        }else if(oTar.tipo=="2")
        {
            celdaCuerpo.textContent = "Mediana"; 
        }else{
            celdaCuerpo.textContent = "Grande"; 
        }

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oTar.precioTarifa;

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oTar.duracionTarifa;
    }
    oCapa.appendChild(oTabla);
    frmListados.reset();
}

//listadoClase
function listadoClase(){
    let oTabla = document.createElement("table");
    oTabla.setAttribute("border","5px solid black");
    let oCapa = document.querySelector(".formularios");
    let oTH = document.createElement("th");
    let oClases = oGestion.clases;

    oTabla.classList.add("table");
  

    let cabecera = oTabla.createTHead();


    let filaCabecera = cabecera.insertRow(-1);
    let celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "ID";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Nombre";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Descripcion";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Fecha Inicio";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Fecha Fin";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Capacidad";
    

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Tipo actividad";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Nombre Monitor";

    let cuerpo = oTabla.createTBody();

    for(oCla of oClases){
        let filaCuerpo = cuerpo.insertRow(-1);
        let celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oCla.ID;

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oCla.Nombre;

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oCla.Descripcion;

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oCla.Inicio.toLocaleDateString("es-ES")+" "+ oCla.Inicio.getUTCHours()+":"+oCla.Inicio.getMinutes()+"H";

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oCla.Fin.toLocaleDateString("es-ES")+" "+ oCla.Fin.getUTCHours()+":"+oCla.Fin.getMinutes()+"H";

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oCla.Capacidad;

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oCla.Actividad;

        let oMonitor = oGestion.buscarSocio(oCla.Monitor);

        celdaCuerpo = filaCuerpo.insertCell(-1);
        celdaCuerpo.textContent = oMonitor.NombreAp;
    }

    oCapa.appendChild(oTabla);
    frmListados.reset();
}

//listado de un socio buscado por un DNI 
function listadoBuscarSocio(){
    let sDNI  = document.querySelector("#iDNIBuscar").value;
    let oTabla = document.createElement("table");
    oTabla.setAttribute("border","5px solid black");
    let oCapa = document.querySelector(".formularios");
    let oTH = document.createElement("th");
    let oSoc = oGestion.buscarSocio(sDNI);
    if(oSoc == null){
        alert("Debes introducir un DNI correcto");
    }else {
    oTabla.classList.add("table");
  

    let cabecera = oTabla.createTHead();


    let filaCabecera = cabecera.insertRow(-1);
    let celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "DNI";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Nombre Completo";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Edad";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Sexo";

    oTH = document.createElement("th");
    celdaCabecera = filaCabecera.appendChild(oTH);
    celdaCabecera.textContent = "Es Monitor";

    let cuerpo = oTabla.createTBody();
    let filaCuerpo = cuerpo.insertRow(-1);
    let celdaCuerpo = filaCuerpo.insertCell(-1);
    celdaCuerpo.textContent = oSoc.DNI;

    celdaCuerpo = filaCuerpo.insertCell(-1);
    celdaCuerpo.textContent = oSoc.NombreAp;

    celdaCuerpo = filaCuerpo.insertCell(-1);
    celdaCuerpo.textContent = oSoc.Edad;

    celdaCuerpo = filaCuerpo.insertCell(-1);
    celdaCuerpo.textContent = oSoc.Sexo?"Masculino":"Femenino";

    celdaCuerpo = filaCuerpo.insertCell(-1);
    celdaCuerpo.textContent = oSoc.EsMonitor?"Si":"No";
    oCapa.appendChild(oTabla);
    }
    frmListados.reset();
    mostrarFiltros();
}

//mostrarFiltros
function mostrarFiltros(){
    let oInput1 = document.getElementById("fechaInicioListado");
    let oSpan1 = document.getElementById("lblFechaInicio");
    let oInput2 = document.getElementById("fechaFinListado");
    let oSpan2 = document.getElementById("lblFinInicio");
    let oSpanDNI = document.getElementById("lblDNIBuscar");
    let oInputDNI = document.getElementById("iDNIBuscar")
    if(oInput1==null){
        oInput1= document.createElement("input");
        oSpan1= document.createElement("Span");
        oInput2= document.createElement("input");
        oSpan2= document.createElement("Span");
    }
    if (oInputDNI == null) {
        oInputDNI= document.createElement("input");
        oSpanDNI= document.createElement("Span");
    }
    switch(document.getElementById('comboListados').value){

        case "buscarSocioPorDNI":
            oInput1.remove();
            oSpan1.remove();
            oInput2.remove();
            oSpan2.remove();
            oInputDNI.setAttribute("type","text");
            oInputDNI.setAttribute("id","iDNIBuscar");
            oInputDNI.classList.add("form-control");
            oInputDNI.classList.add("mb-4");
            frmListados.insertBefore(oInputDNI,frmListados.botonEnviar);
            oSpanDNI.setAttribute("id","lblDNIBuscar");
            oSpanDNI.textContent = "DNI";
            oSpanDNI.classList.add("input-group-text");
            frmListados.insertBefore(oSpanDNI,oInputDNI);
            break;

        default:
            oInput1.remove();
            oSpan1.remove();
            oInput2.remove();
            oSpan2.remove();
            oInputDNI.remove();
            oSpanDNI.remove();
            break;
    }
}

//Funcion para cargar los XML
function loadXMLDoc(filename)
{
	if (window.XMLHttpRequest)
	  {
	  xhttp=new XMLHttpRequest();
	  }
	else // code for IE5 and IE6
	  {
	  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xhttp.open("GET",filename,false);
	
	xhttp.send();
	
	return xhttp.responseXML;
} 


function fechaHoy(){return new Date(Date.now())};

function validaFormularios(campoAValidar , expresionComprobar){
    
    if(!expresionComprobar.test(campoAValidar)){
        return false;
       
    } else{
        return true;
    }
}

function cambiarDuracion(){
    if (frmAltaTarifa.tipo.selectedIndex > 0){
        frmAltaTarifa.txtDuracion.value = frmAltaTarifa.tipo.options[frmAltaTarifa.tipo.selectedIndex].dataset.duracion;
    }
}

//Campos con readonly, que dependen del valor de un despegable.

function variosReadonly(){
    if (frmContratarTarifa.nombreTarifa.selectedIndex > 0){
        frmContratarTarifa.duracionTarifa.value = frmContratarTarifa.nombreTarifa.options[frmContratarTarifa.nombreTarifa.selectedIndex].dataset.tiempo;
        frmContratarTarifa.tipoTarifa.value = frmContratarTarifa.nombreTarifa.options[frmContratarTarifa.nombreTarifa.selectedIndex].dataset.type;
        frmContratarTarifa.precioTarifa.value = frmContratarTarifa.nombreTarifa.options[frmContratarTarifa.nombreTarifa.selectedIndex].dataset.precio;
    }
}

// Buscar cliente
function buscarCliente(){
    let sDNI = frmContratarTarifa.idCliente.value.trim();
 
    oSocioBuscado = oGestion.buscarSocio(sDNI);

    if (oSocioBuscado == null){
        alert("El DNI no corresponde a ningún socio.");
    }
    else{
        frmContratarTarifa.nombreCliente.value = oSocioBuscado.NombreAp;
    }
}

// Contratar Tarifa
function contratarTarifa(){
   
        let oTarifa = oGestion.buscarTarifa(frmContratarTarifa.nombreTarifa.options[frmContratarTarifa.nombreTarifa.selectedIndex].dataset.type);
        let sDNI=frmContratarTarifa.idCliente.value;
        let select=frmContratarTarifa.nombreTarifa.value;
        let bValido = true;
        let sErrores="";

        if(sDNI=="")
        {
            frmContratarTarifa.idCliente.focus();
            sErrores += "Debes introducir un dni de un socio\n";
        }
        else
        {
            frmContratarTarifa.idCliente.classList.remove("error");
        }

        if(select=="nulo")
        {
            frmContratarTarifa.nombreTarifa.focus();
            sErrores += "Debes seleccionar algún tipo de tarifa \n";
        }
        else
        {
            frmContratarTarifa.nombreTarifa.classList.remove("error");
        }

        oExpReg = /^\d{8}[a-zA-Z]{1}$/; 
        if(!validaFormularios(sDNI,oExpReg) )
        {
            if(bValido)
            frmContratarTarifa.idCliente.focus();

            bValido=false;
            frmContratarTarifa.idCliente.classList.add("error");
            sErrores += "El DNI no tiene el formato correcto\n";
        }
        else
        {
            frmContratarTarifa.idCliente.classList.remove("error");
        }

        if(bValido)
        {
            oGestion.contratarTarifa(oSocioBuscado, oTarifa , new Date());
            alert("Tarifa contratada correctamente");
            ocultarTodosFormularios();
            frmContratarTarifa.reset();
        }
        else
            alert(sErrores); 
    
}

*/