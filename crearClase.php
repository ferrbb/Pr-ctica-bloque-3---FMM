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
    $sql="INSERT INTO clase(id, nombre, descripcion, diaInicio, diaFin, horaInicio, horaFin, capacidad, tipo, dniMonitor)
     VALUES ('$data->id','$data->nombre','$data->descripcion','$data->diaInicio','$data->diaFin','$data->horaInicio','$data->horaFin','$data->capacidad','$data->tipo','$data->dniMonitor')";
    $resultado = mysqli_query($conexion,$sql);
    echo "Alta Clase Ok";
?>