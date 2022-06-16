frmCrearClase.botonEnviarCrearClase.addEventListener("click",crearClase,false);

//Alta Clase
function crearClase(){        
    let sIdClase = document.querySelector(".idClase").value;     
    let sNombreClase = document.querySelector(".nombreClase").value;     
    let sDescripcionClase = document.querySelector(".descripcionClase").value;  
    let dtDiaInicio = document.querySelector('.diaInicioClase').value;
    let dtDiaFin = document.querySelector(".diaFinClase").value;    
    let horaInicio = document.querySelector(".horaInicioClase").value;
    let horaFin = document.querySelector('.horaFinClase').value;     
    let iCapacidad = document.querySelector('.capacidadClase').value;     
    let tipoClase = document.querySelector('.tipoClase').value;
    let idMonitor = document.querySelector('.idMonitorClase').value;
    let sErrores="";
    let bValido=true;

    function validaFormularios(campoAValidar , expresionComprobar){
    
        if(!expresionComprobar.test(campoAValidar)){
            return false;
           
        } else{
            return true;
        }
    }

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
    if(document.querySelector('.diaInicioClase').value == "" )
    {
        bValido=false;
        sErrores+="Las fechas estan incompletas.\n";
    }

    if(document.querySelector(".horaInicioClase").value == "")
    {
        bValido=false;
        sErrores+="Las horas estan incompletas.\n";
 
    }

    if(document.querySelector('.diaFinClase').value == "" )
    {
        bValido=false;
        sErrores+="Las fechas estan incompletas.\n";
    }

    if(document.querySelector(".horaFinClase").value == "")
    {
        bValido=false;
        sErrores+="Las horas estan incompletas.\n";
 
    }

    
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
        if(!validaFormularios(tipoClase,oExpReg))
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
    document.querySelector(".idMonitorClase").classList.remove("error");





if(bValido){

    if(dtDiaInicio < dtDiaFin){
        alert("Las fechas introducidas son menores al dia y hora actual");
    }else {
            insertarClase(sIdClase,sNombreClase,sDescripcionClase,dtDiaInicio,dtDiaFin,horaInicio,horaFin,iCapacidad,tipoClase,idMonitor);
    }
}
else{
    alert(sErrores);
}
}
function insertarClase(sIdClase,sNombreClase,sDescripcionClase,dtDiaInicio,dtDiaFin,horaInicio,horaFin,iCapacidad,tipoClase,idMonitor){
    var sParametros = { 
                        id:sIdClase,
                        nombre:sNombreClase,
                        descripcion:sDescripcionClase,
                        diaInicio:dtDiaInicio,
                        diaFin:dtDiaFin,
                        horaInicio:horaInicio,
                        horaFin:horaFin,
                        capacidad: iCapacidad,
                        tipo:tipoClase,
                        dniMonitor:idMonitor};
    fetch("Php/crearClase.php",{ method: 'POST', 
                                body: JSON.stringify(sParametros), 
                                headers:{
                                  'Content-Type': 'application/json'
                                }
                            })
    .then(function(response){
        response.text().then(function(text){
            alert(text);
            frmCrearClase.reset();
            $("#frmCrearClase").parent().hide("normal");
        });
    });
}