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
    $sql = "UPDATE socio SET usuario='$data->usuario',contraseña='$data->contraseña',nombre='$data->nombre',edad='$data->edad',sexo='$data->sexo',monitor='$data->esMonitor' WHERE dni='$data->dniSocio'";
    $resultado = mysqli_query($conexion,$sql);
    echo "Socio modificado correctamente";
?>


?>

