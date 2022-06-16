-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2022 a las 18:17:25
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gym`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apuntarse_clase`
--

CREATE TABLE `apuntarse_clase` (
  `dniSocio` varchar(9) NOT NULL,
  `idClase` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `apuntarse_clase`
--

INSERT INTO `apuntarse_clase` (`dniSocio`, `idClase`) VALUES
('11111111S', 12),
('12345678F', 32),
('30216249E', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase`
--

CREATE TABLE `clase` (
  `id` int(2) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(30) NOT NULL,
  `diaInicio` date NOT NULL,
  `diaFin` date NOT NULL,
  `horaInicio` time NOT NULL,
  `horaFin` time NOT NULL,
  `capacidad` int(2) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `dniMonitor` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clase`
--

INSERT INTO `clase` (`id`, `nombre`, `descripcion`, `diaInicio`, `diaFin`, `horaInicio`, `horaFin`, `capacidad`, `tipo`, `dniMonitor`) VALUES
(12, 'FullBody', 'dsadsd', '2022-06-16', '2022-06-16', '16:44:00', '17:44:00', 24, 'resistencia', '30216249E'),
(32, 'AFWDAS', 'DASDADS', '2022-06-29', '2022-06-29', '17:10:00', '18:11:00', 45, 'DASDAS', '11111111L'),
(34, 'wcec', 'cwcwcw', '2022-06-19', '2022-06-19', '14:00:00', '15:00:00', 23, 'wcwc', '30216249E'),
(99, 'TrenInferior', 'salto', '2022-06-15', '2022-06-15', '20:07:00', '21:07:00', 12, 'Resistencia', '30216249E');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contrato_tarifa`
--

CREATE TABLE `contrato_tarifa` (
  `nombreSocio` varchar(30) NOT NULL,
  `tipoTarifa` char(1) NOT NULL,
  `precioTarifa` float NOT NULL,
  `duracionTarifa` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contrato_tarifa`
--

INSERT INTO `contrato_tarifa` (`nombreSocio`, `tipoTarifa`, `precioTarifa`, `duracionTarifa`) VALUES
('Fernando', 'P', 24, 3),
('Roberto', 'T', 24, 6),
('Joaquin', 'M', 22, 6),
('Marta', 'P', 0, 0),
('Marta', 'P', 24, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socio`
--

CREATE TABLE `socio` (
  `usuario` varchar(20) NOT NULL,
  `contraseña` varchar(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `edad` int(3) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `monitor` char(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `socio`
--

INSERT INTO `socio` (`usuario`, `contraseña`, `nombre`, `dni`, `edad`, `sexo`, `monitor`) VALUES
('fernandorbBETIS', 'betis', 'Fernando', '30216249E', 22, 'Masculino', 'No'),
('martita19', 'marta', 'Marta', '12345678F', 55, 'Femenino', 'Si'),
('Sandra99', '1234', 'Sandra', '99999999H', 34, 'Masculino', 'Si'),
('Roberto89', '5678', 'Roberto', '11111111S', 53, 'Masculino', 'Si'),
('admin', 'admin', 'administrador', '12345678D', 21, 'Masculino', 'No'),
('joaquin23', '123', 'Joaquin', '11111111D', 25, 'Masculino', 'No'),
('Agustin73', 'ewcewc', 'Agustin', '12345678S', 44, 'Masculino', 'No'),
('ccwecwecew', 'cwecewcc', 'ewcwec', '11111111A', 24, 'Masculino', 'Si'),
('ewewcwecw', 'cwec', 'dcewcwecwe', '11111111D', 32, 'Masculino', 'No'),
('nntn', 'brbrtbrtb', 'trbrtbrt', '22222222F', 56, 'Masculino', 'No'),
('cedewdwde', 'dwedwedwed', 'ewdwed', '66666666H', 67, 'Masculino', 'No'),
('REVERVEVE', 'RVREVER', 'VERVREVE', '34567894H', 14, 'Masculino', 'No'),
('JYUJYTNJTY', 'TYNTYNTYBTR', 'BRTRTBR', '98765432J', 56, 'Masculino', 'No'),
('TYJTYJJTY', 'JTYJTYJ', 'FEWFWEFW', '12345678K', 24, 'Masculino', 'No'),
('vtvervrevre', 'vrevre', 'cecrec', '11111111D', 21, 'Masculino', 'No'),
('CWECWECC', 'WECWECCEW', 'CWEC', '11111111S', 23, 'Masculino', 'No'),
('dewdwed', 'dewdewdd', 'wedewdwe', '12121212F', 45, 'Masculino', 'No'),
('fefwefwf', 'ewfewfwefew', 'fwefwe', '12345678L', 46, 'Masculino', 'No'),
('lucia22', 'luci', 'Lucia', '33333333D', 29, 'Masculino', 'Si'),
('carlitosVela', '12', 'Carlos', '77777777S', 34, 'Masculino', 'Si');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarifa`
--

CREATE TABLE `tarifa` (
  `nombre` varchar(30) NOT NULL,
  `precio` float NOT NULL,
  `tipo` char(1) NOT NULL,
  `duracion` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tarifa`
--

INSERT INTO `tarifa` (`nombre`, `precio`, `tipo`, `duracion`) VALUES
('OtoÃ±o', 28.9, 'g', '12'),
('Primavera', 50, 'p', '3'),
('Invierno', 14, 'v', '2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apuntarse_clase`
--
ALTER TABLE `apuntarse_clase`
  ADD PRIMARY KEY (`dniSocio`);

--
-- Indices de la tabla `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tarifa`
--
ALTER TABLE `tarifa`
  ADD PRIMARY KEY (`tipo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
