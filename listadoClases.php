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
    $sql = "SELECT * FROM clase  order by id";
    $resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));
    $arr=[];
    while ($fila = mysqli_fetch_array($resultados)) {   
        $arr[]= new Clase($fila);
    }

    echo json_encode($arr);

    class Clase{
        // Atributos
        public $id;
        public $nombre;
        public $descripcion;
        public $diaInicio;
        public $diaFin;
        public $horaInicio;
        public $horaFin;
        public $capacidad;
        public $tipo;
        public $dniMonitor;

         
        // Constructor
        public function __construct($row){
            $this->id = $row['id'];
            $this->nombre = $row['nombre'];
            $this->descripcion = $row['descripcion'];
            $this->diaInicio = $row['diaInicio'];
            $this->diaFin = $row['diaFin'];
            $this->horaInicio = $row['horaInicio'];
            $this->horaFin = $row['horaFin'];
            $this->capacidad = $row['capacidad'];
            $this->tipo = $row['tipo'];
            $this->dniMonitor = $row['dniMonitor'];
        }
    }

    ?>