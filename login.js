"use strict";
ocultarNabvar();
frmLogin.verificar.addEventListener("click", iniciarSesion, false);

function iniciarSesion() {
    let bCorrecto = true;
    let bErrores = false;
    let sMensajeError = "";
    let oUsuarioTemporal = null;

    let sNombreUsuario = frmLogin.nombreUsuario;
    let sUsuario = sNombreUsuario.value.trim();
    let oExp = /^([a-zA-Z0-9_-]){1,16}$/;


    if (!oExp.test(sUsuario)) {
        bCorrecto = false;
        sNombreUsuario.classList.add("error");
        sMensajeError += "\r\n -Introduzca el usuario correctamente.";

        if (!bErrores) {
            bErrores = true;
            sNombreUsuario.focus();
        }
    }

    else {
        sNombreUsuario.classList.remove("error");
        oUsuarioTemporal = recuperarDatosSocio(sUsuario);

        if (oUsuarioTemporal == null) {
            bCorrecto = false;
            sNombreUsuario.classList.add("error");
            sMensajeError += "\r\n Ese usuario no existe.";

            if (!bErrores) {
                bErrores = true;
                sNombreUsuario.focus();
            }
        }

        else {
            sNombreUsuario.classList.remove("error");
        }
    }

    let oPassword = frmLogin.contraseñaUsuario;
    let sPass = oPassword.value;

    if (oUsuarioTemporal != null) {
        if (sPass != oUsuarioTemporal.contraseña) {
            bCorrecto = false;
            oPassword.classList.add("error");
            sMensajeError += "\r\n -Contraseña incorrecta.";

            if (!bErrores) {
                bErrores = true;
                oPassword.focus();
            }
        } else {
            oPassword.classList.remove("error");
        }
    }

    if (bCorrecto) {

        //Hasta que no se logee alguien, no está permitido las opciones de la web.

        if(!oUsuarioTemporal)
        {
                    document.getElementById("altaSocio").style.display="none";
                    document.getElementById("contratarTarifa").style.display="none";
                    document.getElementById("modificarSocio").style.display="none";
                    document.getElementById("altaTarifa").style.display="none";
                    document.getElementById("crearClase").style.display="none";
                    document.getElementById("apuntarClase").style.display="none";
                    document.getElementById("listados").style.display="none";
        }
       
        //Para dar preferencias al admin, que se encarga del tema de registros, el usuario sólo puede hacer cosas como apuntarse a clase, contratar tarifa y ver listados.
        if(oUsuarioTemporal.usuario != "admin" && oUsuarioTemporal.contraseña!= "admin")
        {
            document.getElementById("altaSocio").style.display="none";
            document.getElementById("modificarSocio").style.display="none";
            document.getElementById("altaTarifa").style.display="none";
            document.getElementById("crearClase").style.display="none";
            sMensajeError = "\r\n Inicio de Sesión:"+oUsuarioTemporal.usuario;
        }
        else
        {
            sMensajeError = "\r\n Inicio de Sesión: administrador";
        }
        oUsuarioLogueado = oUsuarioTemporal; 

        
        guardaUsuarioLogueado(oUsuarioLogueado);
        mostrarNabvar();
        alert(sMensajeError);
        frmLogin.reset();
        document.querySelector("#divfrmLogin").classList.add("d-none"); 
    }
    else {
        
        alert(sMensajeError);
    }


}



//Para guardar en cookie el usuario logueado 
function guardaUsuarioLogueado(oUsuarioTemporal) {
    let sUsuarioTemporal = JSON.stringify(oUsuarioTemporal);
    localStorage.setItem("usuarioLogueado", sUsuarioTemporal);
}

function recuperarDatosSocio(sUsuario) {

    let oSocio = null;

    $.ajax({
        url: './Php/buscarSocio.php',
        data: "usuario=" + frmLogin.nombreUsuario.value.trim(),
        dataType: "json",
        success: function(datos) {
                if (datos == false){
                    oSocio = null
                } else {
                    oSocio = datos;
                }
        },
        method: "GET",
        async: false, 

    });

    return oSocio;
}

//En caso de no tener cuenta de socio, se puede registrar.

frmLogin.registrarse.addEventListener("click", registrarse, false);




function registrarse()
{
    abrirAltaSocio();
   
    
    
}

