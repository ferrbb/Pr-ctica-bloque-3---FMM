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
    $sql="INSERT INTO apuntarse_clase(dniSocio, idClase) VALUES ('$data->dniSocio','$data->idClase')";
    $resultado = mysqli_query($conexion,$sql);
    echo "Apuntado a clase correctamente";
?>