"use strict";
//En este archivo de objetos, tenemos todas las clases que van a formar el programa y algunas funciones que necesitaremos para

//Clase principal del programa, clase gestión.

class Gestion {
    constructor() {
        this.aSocios = [];
        this.aClases=[];
        this.aTarifas= [];
        this.aContratos = [];
    }
    get socios(){
        return this.aSocios;
    }
    get tarifas () {
        return this.aTarifas;
    }
    get clases() {
        return this.aClases;
    }

    //Diferentes filtros y funciones.

    altaSocio(oSocio){
        if (oGestion.aSocios.filter(oSoc => oSoc.DNI == oSocio.DNI).length == 0){
            oGestion.aSocios.push(oSocio);
            return "Alta OK";
        }else {
            return "Ya hay un socio con ese DNI";
        }
    }
    modificarSocio(sDNIABuscar,sDNIAGuardar,sNombreApe,iEdad,bSexo,bEsMonitor){

        let aSocio = oGestion.aSocios.filter(oSoc => oSoc.DNI == sDNIABuscar);
        aSocio[0].DNI = sDNIAGuardar;
        aSocio[0].NombreAp = sNombreApe;
        aSocio[0].Edad = iEdad;
        aSocio[0].Sexo = bSexo;
        aSocio[0].EsMonitor = bEsMonitor;
        return "Modificado Ok";
    }
    buscarSocio(sDNI){
        let oSocio = oGestion.aSocios.filter(oSoc => oSoc.DNI==sDNI);
        if(oSocio.length == 0){
            return null;
        }else {
            return oSocio[0];
        }
 
    }

    buscarTarifa(sTipo){
        let oTarifa = oGestion.aTarifas.filter(oTarifa => oTarifa.tipoTarifa==sTipo);
        if(oTarifa.length == 0){
            return null;
        }else {
            return oTarifa[0];
        }
 
    }
    altaTarifa(oTarifa){
        if(oGestion.aTarifas.filter(oTar => oTar.tipo == oTarifa.tipo).length == 0){
            oGestion.aTarifas.push(oTarifa);
            return "Alta Ok";
        }else {
            return "Ya hay una tarifa con el mismo número";
        }
    }
    contratarTarifa(oSocio,oTarifa,fecha)
    {
        let message="";

        if(this.buscarSocio(oSocio.DNI)==null) 
            message="El socio no esta registrado en la web.";
        else
        {   
            let oContrato = new Contrato(oSocio,oTarifa, fecha);

            this.aContratos.push(oContrato);

            message="Se realizo la contratación de la tarifa de forma correcta.";
        }
        
        return message;
    }
    crearClase(oClase){
        if(oGestion.aClases.filter(oCla => oCla.ID == oClase.ID).length == 0){
            let oMonitor = oGestion.buscarSocio(oClase.Monitor);
            if(oMonitor!=null){
                if(oMonitor.EsMonitor == true){
                    oGestion.aClases.push(oClase);
                    return "Alta Clase Ok";
                }else {
                    return "El DNI es válido pero no es un monitor";
                }

            }else {
                return "No existe un monitor con ese DNI";
            }

        }else {
            return "Ya exise una clase con ese ID";
        }
    }
   
    apuntarseClase(sDNI,iIDClase){
        let oSocio = oGestion.buscarSocio(sDNI);
        let oClase = oGestion.aClases.filter(oClase => oClase.ID == iIDClase)[0];
        if(oSocio!=null){
            if(oClase.Socios.length<oClase.Capacidad){
                if(oClase.Socios.filter(oSoc => oSoc.DNI == oSocio.DNI).length == 0){
                    if (oSocio.DNI!=oClase.Monitor) {
                        oClase.Socios.push(oSocio);
                        return "Apuntado Correctamente";
                    }else {
                        return "El socio es el monitor de la clase";
                    }

                }else {
                    return "Ya estas apuntando en esta clase";
                }
            }else {
                return "La clase está completa";
            }
        }else {
            return "No existe un socio con ese DNI";
        }
    }
}

//Clase de tarifa

class Tarifa{
    constructor (sNombre,precioTarifa,tipoTarifa,duracionTarifa)
    {
      this.sNombre = sNombre;
      this.precioTarifa = precioTarifa; 
      this.tipoTarifa= tipoTarifa;
      this.duracionTarifa= duracionTarifa;
      this.aTarifas = [];
    }
    get tarifas(){
        return this.aTarifas;
    }
    get precio(){
        return this.precioTarifa;
    }
    get nombre(){
        return this.sNombre;
    }
    get tipo(){
        return this.tipoTarifa;
    }
    get duracion(){
        return this.duracionTarifa;
    }
   
}

//Clase de contrato

class Contrato{
    constructor (oSocio,oTarifa,fecha)
    {
      this._socio = oSocio;
      this._tarifa = oTarifa; 
      this._dFechaContratacion = fecha;
    }
    get socio(){
        return this._socio;
    }
    get tarifa(){
        return this._tarifa;
    }
    get fecha(){
        return this._dFechaContratacion;
    }
}

//Clase de socio

class Socio {
    constructor(sNombreAp,sDNI,iEdad,bSexo,bEsMonitor){
        this.sNombreAp = sNombreAp;
        this.sDNI = sDNI;
        this.iEdad = iEdad;
        this.bSexo = bSexo;//true hombre, false mujer
        this.bEsMonitor = bEsMonitor;
    }
    get NombreAp(){
        return this.sNombreAp;
    }
    set NombreAp(sNombreAp){
        this.sNombreAp = sNombreAp;
    }
    get DNI(){
        return this.sDNI;
    }
    set DNI(sDNI){
        this.sDNI = sDNI;
    }
    get Edad() {
        return this.iEdad;
    }
    set Edad(iEdad){
        this.iEdad = iEdad;
    }
    get EsMonitor(){
        return this.bEsMonitor
    }
    set EsMonitor(bEsMonitor){
        this.bEsMonitor = bEsMonitor;
    }
    get Sexo(){
        return this.bSexo;
    }
    set Sexo(bSexo){
        this.bSexo = bSexo    
    }

}

//Clase de Clase

class Clase {
    constructor(iIdClase,sNombre,sDescripcion,dtInicio,dtFin,iCapacidad,sTipoActividad,iIdMonitor){
        this.iIdClase = iIdClase;
        this.sNombre = sNombre;
        this.sDescripcion = sDescripcion;
        this.dtInicio = new Date(dtInicio);
        this.dtFin = new Date(dtFin);
        this.iCapacidad = iCapacidad;
        this.sTipoActividad = sTipoActividad;
        this.aSocios = [];
        this.iIdMonitor = iIdMonitor;
    }
    get ID(){
        return this.iIdClase;
    }
    get Nombre(){
        return this.sNombre;
    }
    get Socios(){
        return this.aSocios;
    }
    set Socios(aSocios){
        this.aSocios = aSocios;
    }
    get Inicio(){
        return this.dtInicio;
    }
    set Inicio(dtInicio){
        this.dtInicio = dtInicio;
    }
    get Fin(){
        return this.dtFin;
    }
    set Fin(dtFin){
        this.dtFin = dtFin;
    }
    get Capacidad(){
        return this.iCapacidad;
    }
    get Monitor(){
        return this.iIdMonitor;
    }
    get Descripcion(){
        return this.sDescripcion;
    }
    get Actividad(){
        return this.sTipoActividad;
    }
}

//Función para obtener la tarifa.

function obtenerTarifa(tipoTarifa)
{
    for (let tarifa of oGestion.aTarifas)
    {
        if(tarifa.tipo == tipoTarifa)
            return tarifa;    
    }
}