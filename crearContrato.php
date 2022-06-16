<?php
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    
    // Configuración BASE DE DATOS MYSQL
    $servidor  = "localhost";
    $basedatos = "gym";
    $usuario   = "root";
    $password  = "";
    // Creamos la conexión al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
    $sql="INSERT INTO contrato_tarifa(nombreSocio,tipoTarifa,precioTarifa, duracionTarifa) VALUES ('$data->nombreSocio','$data->tipoTarifa','$data->precioTarifa','$data->duracionTarifa')";
    $resultado = mysqli_query($conexion,$sql);
    echo "Tarifa contratada correctamente";
?>