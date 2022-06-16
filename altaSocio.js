//# sourceURL=altaSocio.js

frmAltaSocio.botonEnviar.addEventListener("click",altaSocio,false);


//Alta Socio
function altaSocio(){
    let snombreUsuario = document.querySelector(".nombreUsuarioSocio").value;
    let sContraseña = document.querySelector(".contraseñaSocio").value;
    let snombreSocio = document.querySelector(".nombreSocio").value;
    let sDniSocio = document.querySelector(".dniSocio").value;
    let sEdadSocio = document.querySelector(".Edad").value;
    let sSexo = document.querySelector('input[name="radioSexoAltaSocio"]:checked').value;
    if(frmAltaSocio.radioSexoHombreAltaSocio.value=="h")
    {
        sSexo="Masculino";
    }
    else
    {
        sSexo="Femenino";
    }
    let EsMonitor = frmAltaSocio.checkMonitor.value;
    if(frmAltaSocio.checkMonitor.checked==true)
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

            
            let oExpReg = /^([a-zA-Z0-9_-]){1,16}$/;  
            if(!validaFormularios(snombreUsuario,oExpReg))
            {
                bValido=false;
                document.querySelector(".nombreUsuarioSocio").classList.add("error");
                sErrores += "El nombre de usuario no tiene el formato correcto\n";
                document.querySelector(".nombreUsuarioSocio").focus();

            }
            else
            document.querySelector(".nombreUsuarioSocio").classList.remove("error");

            
            oExpReg =/^([a-zA-Z0-9_-]){1,16}$/; 
            if(!validaFormularios(sContraseña,oExpReg))
            {
                bValido=false;
                document.querySelector(".contraseñaSocio").classList.add("error");
                sErrores += "La contraseña no tiene el formato correcto\n";
                document.querySelector(".contraseñaSocio").focus();

            }
            else
            document.querySelector(".contraseñaSocio").classList.remove("error");

    oExpReg = /^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜçÇ]{1,30}$/;  
    if(!validaFormularios(snombreSocio,oExpReg))
    {
        bValido=false;
        document.querySelector(".nombreSocio").classList.add("error");
        sErrores += "El nombre no tiene el formato correcto\n";
        document.querySelector(".nombreSocio").focus();

    }
    else
    document.querySelector(".nombreSocio").classList.remove("error");

    oExpReg = /^\d{8}[A-Z]$/; 
    if(!validaFormularios(sDniSocio,oExpReg))
    {
        if(bValido)
        document.querySelector(".dniSocio").focus();
        
        bValido=false;
        document.querySelector(".dniSocio").classList.add("error");
        sErrores += "El dni del socio no tiene el formato correcto\n";
    }
    else
    {
        document.querySelector(".dniSocio").classList.remove("error");
    }


     oExpReg = /^[0-9]+$/; 
    if(!validaFormularios(sEdadSocio,oExpReg))
    {
        if(bValido)
        document.querySelector(".Edad").focus();
        
        bValido=false;
        document.querySelector(".Edad").classList.add("error");
        sErrores += "La edad no tiene el formato correcto\n";
    }
    else
    {
        document.querySelector(".Edad").classList.remove("error");
    }

    
    
    if(bValido)
    {

        insertarSocio(snombreUsuario,sContraseña,snombreSocio,sDniSocio,sEdadSocio,sSexo,EsMonitor);
    }
    else{
        alert(sErrores);
    }

}
function insertarSocio(snombreUsuario,sContraseña,snombreSocio,sDniSocio,sEdadSocio,sSexo,EsMonitor){
    var sParametros = { 
        usuario: snombreUsuario,
        contraseña: sContraseña,
        nombre: snombreSocio,
        dniSocio: sDniSocio,
        edad: sEdadSocio,
        sexo: sSexo,
        esMonitor: EsMonitor};
    fetch("Php/altaSocio.php",{ method: 'POST', 
                                body: JSON.stringify(sParametros), 
                                headers:{
                                  'Content-Type': 'application/json'
                                }
                            })
    .then(function(response){
        response.text().then(function(text){
                alert(text);
                frmAltaSocio.reset(); 
                document.getElementById("divfrmAltaSocio").style.display="none";
                
                document.getElementById("divfrmLogin").classList.remove("d-none");
            
        });
        
    });
}


