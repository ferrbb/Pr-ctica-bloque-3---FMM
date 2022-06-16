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
    $sql="INSERT INTO socio(usuario,contraseña,nombre, dni, edad, sexo, monitor) VALUES ('$data->usuario','$data->contraseña','$data->nombre','$data->dniSocio','$data->edad','$data->sexo','$data->esMonitor')";
    $resultado = mysqli_query($conexion,$sql);
    $text= "Alta Socio Ok";
    echo $text;
?>