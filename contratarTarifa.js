//# sourceURL=contratarTarifa.js


//Select de socios, que ponga el nombre del socio en el input.
cargarDesplegableSocios();

frmContratarTarifa.nombreSocios.addEventListener("change",cambiarUsuarioSeleccionado);

function cambiarUsuarioSeleccionado(){
    
    let oOptionSeleccionado = frmContratarTarifa.nombreSocios.options[frmContratarTarifa.nombreSocios.options.selectedIndex];

    
    frmContratarTarifa.nombreCliente.value= oOptionSeleccionado.value;

}


function cargarDesplegableSocios() {

    $.ajax({
        url: "Php/getSocios.php",
        dataType: 'json',
        cache: false,
        async: true, // por defecto
        method: "GET",
        success: procesarGetSociosTarifas
    });
}

function procesarGetSociosTarifas(oDatos) {
    var sOptions = '<option value="" data-usuario="" data-contraseña="" data-nombre="" data-edad="" data-sexo="Masculino">Seleccione una opción...</option>';

    for (let i = 0; i < oDatos.length; i++) {

        sOptions += '<option value="' + oDatos[i].nombre + '"';

        
        sOptions += ' data-usuario="' + oDatos[i].usuario + '"';
        sOptions += ' data-contraseña="' + oDatos[i].contraseña + '"';
        sOptions += ' data-nombre="' + oDatos[i].nombre + '"';
        sOptions += ' data-edad="' + oDatos[i].edad + '"';
        sOptions += ' data-sexo="' + oDatos[i].sexo + '"';
       

        sOptions += '>';
        sOptions += oDatos[i].nombre;
        sOptions += '</option>';

    }

    
    $("#nombreSocios").html(sOptions);
}


//Para cambiar el valor de los inputs, que dependen del select

frmContratarTarifa.nombreTarifa.addEventListener("change",cambiarTarifaSeleccionado);

function cambiarTarifaSeleccionado(){
    
    let oOptionSeleccionado = frmContratarTarifa.nombreTarifa.options[frmContratarTarifa.nombreTarifa.options.selectedIndex];

    
    frmContratarTarifa.precioTarifa.value= oOptionSeleccionado.dataset.precio;
    frmContratarTarifa.tipoTarifa.value=oOptionSeleccionado.dataset.type;
    frmContratarTarifa.duracionTarifa.value=oOptionSeleccionado.dataset.tiempo;

}


//Generar el contrato

frmContratarTarifa.botonEnviar.addEventListener("click",crearContrato,false);


function crearContrato(){        
    let snombreSocio = frmContratarTarifa.nombreSocios.value;     
    let stipoTarifa = document.querySelector(".tipoTarifa").value;   
    let sPrecioTarifa = document.querySelector(".precioTarifa").value;   
    let sDuracionTarifa = document.querySelector(".duracionTarifa").value; 
    
    let sErrores="";
    let bValido=true;

    if(frmContratarTarifa.nombreSocios.value=="nulo" || frmContratarTarifa.nombreTarifa.value=="nulo")
    {
        bValido=false;
        sErrores+="Debe seleccionar algún valor de los combos";
    }


if(bValido){
 
    insertarTarifa(snombreSocio,stipoTarifa,sPrecioTarifa,sDuracionTarifa);
}
else{
    alert(sErrores);
}
}
function insertarTarifa(snombreSocio,stipoTarifa,sPrecioTarifa,sDuracionTarifa){
    var sParametros = { 
                        nombreSocio:snombreSocio,
                        tipoTarifa:stipoTarifa,
                        precioTarifa:sPrecioTarifa,
                        duracionTarifa:sDuracionTarifa
                        };
    fetch("Php/crearContrato.php",{ method: 'POST', 
                                body: JSON.stringify(sParametros), 
                                headers:{
                                  'Content-Type': 'application/json'
                                }
                            })
    .then(function(response){
        response.text().then(function(text){
            alert(text);
            frmContratarTarifa.reset();
            $("#frmContratarTarifa").parent().hide("normal");
        });
    });
}