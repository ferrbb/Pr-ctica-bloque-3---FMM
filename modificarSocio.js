//# sourceURL=modificarSocio.js

cargarDesplegableSocios();


frmModificarSocio.comboSocios.addEventListener("change",cambiarUsuarioSeleccionado);

function cambiarUsuarioSeleccionado(){
    
    let oOptionSeleccionado = frmModificarSocio.comboSocios.options[frmModificarSocio.comboSocios.options.selectedIndex];

    
        frmModificarSocio.nombreUsuarioSocioModificar.value= oOptionSeleccionado.dataset.usuario;
        frmModificarSocio.contraseñaSocioModificar.value=oOptionSeleccionado.dataset.contraseña;
        frmModificarSocio.nombreSocioModificar.value=oOptionSeleccionado.dataset.nombre;
        frmModificarSocio.dniSocioModificar.value=oOptionSeleccionado.value; 
        frmModificarSocio.edadModificar.value=oOptionSeleccionado.dataset.edad;

        frmModificarSocio.radioSexo.value = oOptionSeleccionado.dataset.sexo;

}

function cargarDesplegableSocios() {

    $.ajax({
        url: "Php/getSocios.php",
        dataType: 'json',
        cache: false,
        async: true, // por defecto
        method: "GET",
        success: procesarGetSocios
    });
}

function procesarGetSocios(oDatos) {
    var sOptions = '<option value="" data-usuario="" data-contraseña="" data-nombre="" data-edad="" data-sexo="Masculino">Seleccione una opción...</option>';

    for (let i = 0; i < oDatos.length; i++) {

        sOptions += '<option value="' + oDatos[i].dni + '"';

        
        sOptions += ' data-usuario="' + oDatos[i].usuario + '"';
        sOptions += ' data-contraseña="' + oDatos[i].contraseña + '"';
        sOptions += ' data-nombre="' + oDatos[i].nombre + '"';
        sOptions += ' data-edad="' + oDatos[i].edad + '"';
        sOptions += ' data-sexo="' + oDatos[i].sexo + '"';
       

        sOptions += '>';
        sOptions += oDatos[i].nombre;
        sOptions += '</option>';

    }

    
    $("#comboSocios").html(sOptions);
}


$("#botonEnviar").click(function() {

    if(frmModificarSocio.comboSocios.options.selectedIndex > 0){

        if(frmModificarSocio.radioSexoHombre.value=="h")
            {
                sSexo="Masculino";
            }
            else
            {
                sSexo="Femenino";
            }
            let EsMonitor = frmModificarSocio.checkMonitorModificar.value;
            if(frmModificarSocio.checkMonitorModificar.checked==true)
            {
                EsMonitor="Si";
            }
            else
            {
                EsMonitor="No";
            }
            let sErrores="";
            let bValido=true;

            function validaFormularios(campoAValidar , expresionComprobar){
            
                if(!expresionComprobar.test(campoAValidar)){
                    return false;
                
                } else{
                    return true;
                }
            }
            let snombreUsuario=frmModificarSocio.nombreUsuarioSocioModificar.value;
            let oExpReg = /^([a-zA-Z0-9_-]){1,16}$/;  
            if(!validaFormularios(snombreUsuario,oExpReg))
            {
                bValido=false;
                document.querySelector(".nombreUsuarioSocioModificar").classList.add("error");
                sErrores += "El nombre de usuario no tiene el formato correcto\n";
                document.querySelector(".nombreUsuarioSocioModificar").focus();

            }
            else
            document.querySelector(".nombreUsuarioSocioModificar").classList.remove("error");

            let sContraseña=frmModificarSocio.contraseñaSocioModificar.value;
            oExpReg =/^([a-zA-Z0-9_-]){1,16}$/; 
            if(!validaFormularios(sContraseña,oExpReg))
            {
                bValido=false;
                document.querySelector(".contraseñaSocioModificar").classList.add("error");
                sErrores += "La contraseña no tiene el formato correcto\n";
                document.querySelector(".contraseñaSocioModificar").focus();

            }
            else
            document.querySelector(".contraseñaSocioModificar").classList.remove("error");

            let snombreSocioModificar=frmModificarSocio.nombreSocioModificar.value;
            oExpReg = /^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜçÇ]{1,30}$/;  
            if(!validaFormularios(snombreSocioModificar,oExpReg))
            {
                bValido=false;
                document.querySelector(".nombreSocioModificar").classList.add("error");
                sErrores += "El nombre no tiene el formato correcto\n";
                document.querySelector(".nombreSocioModificar").focus();

            }
            else
            document.querySelector(".nombreSocioModificar").classList.remove("error");

            let sDniSocio=frmModificarSocio.dniSocioModificar.value;
            oExpReg = /^\d{8}[A-Z]$/; 
            if(!validaFormularios(sDniSocio,oExpReg))
            {
                if(bValido)
                document.querySelector(".dniSocioModificar").focus();
                
                bValido=false;
                document.querySelector(".dniSocioModificar").classList.add("error");
                sErrores += "El dni del socio no tiene el formato correcto\n";
            }
            else
            {
                document.querySelector(".dniSocioModificar").classList.remove("error");
            }

            let sEdadSocio=frmModificarSocio.edadModificar.value;
            oExpReg = /^[0-9]+$/; 
            if(!validaFormularios(sEdadSocio,oExpReg))
            {
                if(bValido)
                document.querySelector(".edadModificar").focus();
                
                bValido=false;
                document.querySelector(".edadModificar").classList.add("error");
                sErrores += "La edad no tiene el formato correcto\n";
            }
            else
            {
                document.querySelector(".edadModificar").classList.remove("error");
            }

            
            
            if(bValido)
            {
                actualizarSocio(snombreUsuario,sContraseña,snombreSocioModificar,sDniSocio,sEdadSocio,sSexo,EsMonitor);
            }
            else{
                alert(sErrores);
            }
    }

});

function actualizarSocio(snombreUsuario,sContraseña,snombreSocioModificar,sDniSocio,sEdadSocio,sSexo,EsMonitor)
{
    var sParametros = {
        usuario:snombreUsuario,
        contraseña:sContraseña,
        nombre: snombreSocioModificar,
        dniSocio: sDniSocio,
        edad: sEdadSocio,
        sexo: sSexo,
        esMonitor:EsMonitor
    };
    
    fetch("Php/modificarSocio.php",{ method: 'POST', 
    body: JSON.stringify(sParametros), 
    headers:{
      'Content-Type': 'application/json'
    }
    })
    .then(function(response){
    response.text().then(function(text){
        alert(text);
        frmModificarSocio.reset();
        $("#frmModificarSocio").parent().hide("normal");
    });
    });
}



