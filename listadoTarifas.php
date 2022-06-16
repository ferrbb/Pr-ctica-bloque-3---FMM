<?php 
    // Configuración BASE DE DATOS MYSQL
    $servidor  = "localhost";
    $basedatos = "gym";
    $usuario   = "root";
    $password  = "";
    //Creamos la conexión al servidor.
    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
    //Debemos atacar a dos tablas, reserva y clases_usuarios y mostrar los datos de estas tablas respecto al usuario.

    
    //Consulta a clases_usuarios.
    $sql = "SELECT * FROM tarifa  order by tipo desc";
    $resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));
    $arr=[];
    while ($fila = mysqli_fetch_array($resultados)) {   
        $arr[]= new Tarifa($fila);
    }

    echo json_encode($arr);

    class Tarifa{
        // Atributos
        public $nombre;
        public $precio;
        public $tipo;
        public $duracion;
         
        // Constructor
        public function __construct($row){
            $this->nombre = $row['nombre'];
            $this->precio = $row['precio'];
            $this->tipo = $row['tipo'];
            $this->duracion = $row['duracion'];
        }
    }

    ?>