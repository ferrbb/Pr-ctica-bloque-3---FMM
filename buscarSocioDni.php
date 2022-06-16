<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "gym";
$usuario1   = "root";
$password  = "";

// Recojo los datos de entrada
$bUsuario = $_GET["dni"];


// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario1, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
//mysqli_query($conexion,"utf8");

$sql = "SELECT * FROM socio WHERE dni='".$bUsuario."';";
$resultado = mysqli_query($conexion,$sql);

if($fila = $resultado->fetch_assoc()) {
    $respuesta = $fila;
}
else {
    $respuesta = false;
}

mysqli_close($conexion);

echo json_encode($respuesta);


?>