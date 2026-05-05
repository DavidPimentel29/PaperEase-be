-- =============================================
-- PaperEase - Schema completo
-- Base de datos: paperease
-- Charset: utf8mb4 / Collation: utf8mb4_general_ci
-- =============================================

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
SET NAMES utf8mb4;

-- =============================================
-- TABLAS DE CATÁLOGO (sin dependencias)
-- =============================================

CREATE TABLE IF NOT EXISTS `genero` (
  `IdGenero` int NOT NULL AUTO_INCREMENT,
  `Genero` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`IdGenero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `facultad` (
  `IdFacultad` int NOT NULL AUTO_INCREMENT,
  `Facultad` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`IdFacultad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `tipoprograma` (
  `IdTipoP` int NOT NULL AUTO_INCREMENT,
  `TipoPrograma` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`IdTipoP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `programa` (
  `IdPrograma` int NOT NULL AUTO_INCREMENT,
  `Programa` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `IdTipoP` int DEFAULT NULL,
  PRIMARY KEY (`IdPrograma`),
  KEY `idx_programa_tipo` (`IdTipoP`),
  CONSTRAINT `fk_programa_tipo` FOREIGN KEY (`IdTipoP`) REFERENCES `tipoprograma` (`IdTipoP`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- =============================================
-- TABLAS DE USUARIOS
-- =============================================

CREATE TABLE IF NOT EXISTS `estudiante` (
  `IdEstudiante` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `Apellido` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `Cedula` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `IdGenero` int DEFAULT NULL,
  `IdFacultad` int DEFAULT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `Activo` tinyint(1) DEFAULT 1,
  `UltimoAcceso` timestamp NULL DEFAULT NULL,
  `FechaCreacion` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`IdEstudiante`),
  UNIQUE KEY `uq_estudiante_email` (`Email`),
  UNIQUE KEY `uq_estudiante_cedula` (`Cedula`),
  KEY `idx_estudiante_genero` (`IdGenero`),
  KEY `idx_estudiante_facultad` (`IdFacultad`),
  CONSTRAINT `fk_estudiante_genero` FOREIGN KEY (`IdGenero`) REFERENCES `genero` (`IdGenero`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_estudiante_facultad` FOREIGN KEY (`IdFacultad`) REFERENCES `facultad` (`IdFacultad`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `trabajador_social` (
  `IdTrabajadorSocial` int NOT NULL AUTO_INCREMENT,
  `Email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `Apellido` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `Cedula` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `IdGenero` int DEFAULT NULL,
  `Departamento` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Oficina` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Activo` tinyint(1) DEFAULT 1,
  `UltimoAcceso` timestamp NULL DEFAULT NULL,
  `FechaCreacion` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`IdTrabajadorSocial`),
  UNIQUE KEY `uq_trabajador_email` (`Email`),
  UNIQUE KEY `uq_trabajador_cedula` (`Cedula`),
  KEY `idx_trabajador_genero` (`IdGenero`),
  CONSTRAINT `fk_trabajador_genero` FOREIGN KEY (`IdGenero`) REFERENCES `genero` (`IdGenero`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- =============================================
-- TABLAS DE NEGOCIO
-- =============================================

CREATE TABLE IF NOT EXISTS `eventos` (
  `Id_Eventos` int NOT NULL AUTO_INCREMENT,
  `Titulo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Descripcion` text COLLATE utf8mb4_general_ci,
  `HoraInicio` time DEFAULT NULL,
  `HoraFin` time DEFAULT NULL,
  `Lugar` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Imagen` varchar(500) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Dia` int DEFAULT NULL,
  `Mes` int DEFAULT NULL,
  `Categoria` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `year` int DEFAULT NULL,
  `Programa` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Facultad` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`Id_Eventos`),
  KEY `idx_eventos_year_mes` (`year`, `Mes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `formulario_estudiante` (
  `id_formulario` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `Nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `Apellido` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `Cedula` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `IdGenero` int DEFAULT NULL,
  `IdFacultad` int DEFAULT NULL,
  `IdTipoP` int DEFAULT NULL,
  `IdPrograma` int DEFAULT NULL,
  `Archivo` varchar(500) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Estado` enum('pendiente','aprobada','rechazada') COLLATE utf8mb4_general_ci DEFAULT 'pendiente',
  `Prioridad` enum('baja','media','alta') COLLATE utf8mb4_general_ci DEFAULT 'baja',
  `FechaCreacion` timestamp DEFAULT CURRENT_TIMESTAMP,
  `FechaModificacion` timestamp NULL DEFAULT NULL,
  `NotasTrabajador` text COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id_formulario`),
  KEY `idx_formulario_cedula` (`Cedula`),
  KEY `idx_formulario_estado` (`Estado`),
  KEY `idx_formulario_genero` (`IdGenero`),
  KEY `idx_formulario_facultad` (`IdFacultad`),
  KEY `idx_formulario_tipo` (`IdTipoP`),
  KEY `idx_formulario_programa` (`IdPrograma`),
  CONSTRAINT `fk_formulario_cedula` FOREIGN KEY (`Cedula`) REFERENCES `estudiante` (`Cedula`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_formulario_genero` FOREIGN KEY (`IdGenero`) REFERENCES `genero` (`IdGenero`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_formulario_facultad` FOREIGN KEY (`IdFacultad`) REFERENCES `facultad` (`IdFacultad`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_formulario_tipo` FOREIGN KEY (`IdTipoP`) REFERENCES `tipoprograma` (`IdTipoP`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_formulario_programa` FOREIGN KEY (`IdPrograma`) REFERENCES `programa` (`IdPrograma`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- =============================================
-- NOTIFICACIONES
-- =============================================

CREATE TABLE IF NOT EXISTS `notificaciones` (
  `id_notificacion` int NOT NULL AUTO_INCREMENT,
  `Cedula` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `id_formulario` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tipo` enum('aprobada','rechazada','info') COLLATE utf8mb4_general_ci NOT NULL,
  `titulo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `mensaje` text COLLATE utf8mb4_general_ci NOT NULL,
  `leida` tinyint(1) DEFAULT 0,
  `fecha_creacion` timestamp DEFAULT CURRENT_TIMESTAMP,
  `fecha_lectura` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_notificacion`),
  KEY `idx_notif_cedula` (`Cedula`),
  KEY `idx_notif_leida` (`leida`),
  KEY `idx_notif_fecha` (`fecha_creacion`),
  KEY `idx_notif_cedula_leida` (`Cedula`, `leida`),
  CONSTRAINT `fk_notificaciones_estudiante` FOREIGN KEY (`Cedula`) REFERENCES `estudiante` (`Cedula`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- =============================================
-- SESIONES Y AUDITORÍA
-- =============================================

CREATE TABLE IF NOT EXISTS `sesiones` (
  `IdSesion` int NOT NULL AUTO_INCREMENT,
  `IdUsuarioRef` int NOT NULL,
  `TipoUsuario` int NOT NULL COMMENT '1=estudiante, 2=trabajador_social',
  `TokenSesion` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `DireccionIP` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `UserAgent` text COLLATE utf8mb4_general_ci,
  `FechaExpiracion` timestamp NOT NULL,
  `Activa` tinyint(1) DEFAULT 1,
  `FechaCreacion` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`IdSesion`),
  KEY `idx_sesion_token` (`TokenSesion`),
  KEY `idx_sesion_usuario` (`IdUsuarioRef`, `TipoUsuario`),
  KEY `idx_sesion_activa` (`Activa`, `FechaExpiracion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `auditoria_acceso` (
  `IdAuditoria` int NOT NULL AUTO_INCREMENT,
  `IdUsuarioRef` int DEFAULT NULL,
  `TipoUsuario` int DEFAULT NULL COMMENT '1=estudiante, 2=trabajador_social',
  `Email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `Accion` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Descripcion` text COLLATE utf8mb4_general_ci,
  `DireccionIP` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `UserAgent` text COLLATE utf8mb4_general_ci,
  `Exitoso` tinyint(1) DEFAULT 0,
  `FechaCreacion` timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`IdAuditoria`),
  KEY `idx_auditoria_usuario` (`IdUsuarioRef`, `TipoUsuario`),
  KEY `idx_auditoria_accion` (`Accion`),
  KEY `idx_auditoria_fecha` (`FechaCreacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- =============================================
-- DATOS INICIALES (catálogos)
-- =============================================

INSERT INTO `genero` (`IdGenero`, `Genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino')
ON DUPLICATE KEY UPDATE Genero = VALUES(Genero);

INSERT INTO `facultad` (`IdFacultad`, `Facultad`) VALUES
(1, 'Facultad de Ingeniería Civil'),
(2, 'Facultad de Ingeniería Eléctrica'),
(3, 'Facultad de Ingeniería Industrial'),
(4, 'Facultad de Ingeniería Mecánica'),
(5, 'Facultad de Ingeniería de Sistemas Computacionales'),
(6, 'Facultad de Ciencias y Tecnología')
ON DUPLICATE KEY UPDATE Facultad = VALUES(Facultad);

INSERT INTO `tipoprograma` (`IdTipoP`, `TipoPrograma`) VALUES
(1, 'Programa de Salud'),
(2, 'Promoción Social')
ON DUPLICATE KEY UPDATE TipoPrograma = VALUES(TipoPrograma);

INSERT INTO `programa` (`IdPrograma`, `Programa`, `IdTipoP`) VALUES
(1, 'Salud', 1),
(2, 'Promoción Social', 2)
ON DUPLICATE KEY UPDATE Programa = VALUES(Programa);

COMMIT;
