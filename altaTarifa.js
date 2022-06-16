//# sourceURL=altaTarifa.js
frmAltaTarifa.tipo.addEventListener("change",cambiarDuracion,false);

function cambiarDuracion(){
    if (frmAltaTarifa.tipo.selectedIndex > 0){
        frmAltaTarifa.txtDuracion.value = frmAltaTarifa.tipo.options[frmAltaTarifa.tipo.selectedIndex].dataset.duracion;
    }
}


frmAltaTarifa.botonEnviar.addEventListener("click",altaTarifa,false);


//Alta Tarifa
function altaTarifa(){
    let snombreTarifa = document.querySelector(".nombreTarifa").value;
    let precioTarifa = document.querySelector(".precioTarifa").value;
    let tipoTarifa = document.querySelector("#tipo").value;
    let duracionTarifa = document.querySelector("#txtDuracion").value;
    let sErrores="";
    let bValido=true;

    function validaFormularios(campoAValidar , expresionComprobar){
    
        if(!expresionComprobar.test(campoAValidar)){
            return false;
           
        } else{
            return true;
        }
    }

    let oExpReg = /^[A-Za-z\sáéíóúÁÉÍÓÚñÑüÜçÇ]{1,30}$/;  
    if(!validaFormularios(snombreTarifa,oExpReg))
    {
        bValido=false;
        document.querySelector(".nombreTarifa").classList.add("error");
        sErrores += "El nombre no tiene el formato correcto\n";
        document.querySelector(".nombreTarifa").focus();

    }
    else
    document.querySelector(".nombreTarifa").classList.remove("error");


     oExpReg = /^\d{1,9}(\.\d{1})?\d{1,9}$/; 
    if(!validaFormularios(precioTarifa,oExpReg))
    {
        if(bValido)
        document.querySelector(".precioTarifa").focus();
        
        bValido=false;
        document.querySelector(".precioTarifa").classList.add("error");
        sErrores += "El precio de la tarifa no tiene el formato correcto\n";
    }
    else
    {
        document.querySelector(".precioTarifa").classList.remove("error");
    }

    if(document.getElementById("tipo").value=="0")
    {
        bValido=false;

        sErrores += "Debe seleccionar algún tipo de tarifa\n";
    }
    
    if(bValido)
    {

        insertarTarifa(snombreTarifa,precioTarifa,tipoTarifa,duracionTarifa);
    }
    else{
        alert(sErrores);
    }

}
function insertarTarifa(snombreTarifa,precioTarifa,tipoTarifa,duracionTarifa){
    var sParametros = { nombre:snombreTarifa,
                        precio:precioTarifa,
                        tipo:tipoTarifa,
                        duracion:duracionTarifa};
    fetch("Php/altaTarifa.php",{ method: 'POST', 
                                body: JSON.stringify(sParametros), 
                                headers:{
                                  'Content-Type': 'application/json'
                                }
                            })
    .then(function(response){
        response.text().then(function(text){
        alert(text);
        frmAltaTarifa.reset();
        $("#frmAltaTarifa").parent().hide("normal");
        });
    });
}
