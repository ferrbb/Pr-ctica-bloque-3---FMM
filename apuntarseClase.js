//# sourceURL=apuntarseClase.js


//Select de socios, que ponga el nombre del socio en el input.
cargarDesplegableSocios();
cargarDesplegableClases();



function cargarDesplegableSocios() {

    $.ajax({
        url: "Php/getSocios.php",
        dataType: 'json',
        cache: false,
        async: true, // por defecto
        method: "GET",
        success: procesarGetSociosApuntarseClase
    });
}

function procesarGetSociosApuntarseClase(oDatos) {
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

    
    $("#comboClasesDniApuntarseClase").html(sOptions);
}


function cargarDesplegableClases()
{
    $.ajax({
        url: "Php/getClases.php",
        dataType: 'json',
        cache: false,
        async: true, // por defecto
        method: "GET",
        success: procesarGetClasesApuntarseClase
    });
}

function procesarGetClasesApuntarseClase(oDatos) {
    var sOptions = '<option value="" data-id="" data-nombre="" data-descripcion="" data-diaInicio="" data-diaFin="" data-horaInicio="" data-horaFin="" data-capacidad="" data-tipo="" data-dniMonitor="">Seleccione una opción...</option>';

    for (let i = 0; i < oDatos.length; i++) {

        sOptions += '<option value="' + oDatos[i].id + '"';

        
        sOptions += ' data-nombre="' + oDatos[i].usuario + '"';
        sOptions += ' data-descripcion="' + oDatos[i].contraseña + '"';
        sOptions += ' data-diaInicio="' + oDatos[i].nombre + '"';
        sOptions += ' data-diaFin="' + oDatos[i].edad + '"';
        sOptions += ' data-horaInicio="' + oDatos[i].sexo + '"';
        sOptions += ' data-horaFin="' + oDatos[i].sexo + '"';
        sOptions += ' data-capacidad="' + oDatos[i].sexo + '"';
        sOptions += ' data-tipo="' + oDatos[i].sexo + '"';
        sOptions += ' data-dniMonitor="' + oDatos[i].sexo + '"';
       

        sOptions += '>';
        sOptions += oDatos[i].nombre;
        sOptions += '</option>';

    }

    
    $("#comboClasesApuntarseClase").html(sOptions);
}


frmApuntarClase.botonEnviarClase.addEventListener("click",apuntarseClase,false);


function apuntarseClase(){        
    let sdniSocio = frmApuntarClase.comboClasesDniApuntarseClase.value;     
    let sidClase = frmApuntarClase.comboClasesApuntarseClase.value;  
    
    let sErrores="";
    let bValido=true;

    if(frmApuntarClase.comboClasesDniApuntarseClase.value=="" || frmApuntarClase.comboClasesApuntarseClase.value=="")
    {
        bValido=false;
        sErrores+="Debe seleccionar algún valor de los combos";
    }


if(bValido){
 
    insertarApuntarseClase(sdniSocio,sidClase);
}
else{
    alert(sErrores);
}
}
function insertarApuntarseClase(sdniSocio,sidClase){
    var sParametros = { 
                        dniSocio:sdniSocio,
                        idClase:sidClase
                        };
    fetch("Php/apuntarseClase.php",{ method: 'POST', 
                                body: JSON.stringify(sParametros), 
                                headers:{
                                  'Content-Type': 'application/json'
                                }
                            })
    .then(function(response){
        response.text().then(function(text){
            alert(text);
            frmApuntarClase.reset();
            $("#frmApuntarClase").parent().hide("normal");
        });
    });
}
