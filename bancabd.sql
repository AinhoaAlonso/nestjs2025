CREATE DATABASE  IF NOT EXISTS `bancabd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bancabd`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: bancabd
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `dni` int unsigned NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `direccion` varchar(45) NOT NULL,
  `telefono` int unsigned NOT NULL,
  PRIMARY KEY (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1111,'Pepito','c/marte',1111),(2222,'Alicia','c/ jupiter',2222),(3333,'Marta','c/venus',3333),(7777,'aaaaa','bbbb',1111),(9898,'aaaaa','aaaa',1111),(11117777,'aaaaa','bbbb',1111);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuentas`
--

DROP TABLE IF EXISTS `cuentas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuentas` (
  `numeroCuenta` int unsigned NOT NULL,
  `saldo` double NOT NULL,
  `tipocuenta` varchar(45) NOT NULL,
  PRIMARY KEY (`numeroCuenta`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuentas`
--

LOCK TABLES `cuentas` WRITE;
/*!40000 ALTER TABLE `cuentas` DISABLE KEYS */;
INSERT INTO `cuentas` VALUES (1000,42967,'ahorro'),(1234,570,'prueba2'),(2000,10400,'ahorro'),(3000,670,'recibos'),(4000,880,'ahorro'),(5000,6700,'recibos'),(6000,3000,'ahorro');
/*!40000 ALTER TABLE `cuentas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movimientos`
--

DROP TABLE IF EXISTS `movimientos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movimientos` (
  `idMovimiento` int unsigned NOT NULL AUTO_INCREMENT,
  `idCuenta` int unsigned NOT NULL,
  `fecha` date DEFAULT NULL,
  `cantidad` double NOT NULL,
  `operacion` varchar(45) NOT NULL,
  PRIMARY KEY (`idMovimiento`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movimientos`
--

LOCK TABLES `movimientos` WRITE;
/*!40000 ALTER TABLE `movimientos` DISABLE KEYS */;
INSERT INTO `movimientos` VALUES (25,1000,'2019-03-31',200,'extracción'),(26,1000,'2019-03-31',600,'ingreso'),(27,2000,'2019-03-31',300,'extracción'),(28,1000,'2019-03-31',400,'ingreso'),(29,2000,'2019-03-31',2100,'ingreso'),(30,1000,'2019-03-31',135,'ingreso'),(31,1000,'2019-03-31',200,'extracción'),(32,1000,'2019-03-31',1100,'ingreso'),(33,1000,'2019-03-31',500,'extracción'),(34,1000,'2019-03-31',105,'ingreso'),(35,1000,'2019-04-04',123,'ingreso'),(36,1000,'2019-04-04',34,'extracción'),(37,1000,'2019-04-04',11,'extracción'),(38,1000,'2019-04-04',11,'extracción'),(39,1000,'2019-06-26',300,'extracción'),(40,1000,'2019-06-27',50000,'extracción'),(41,2000,'2019-06-27',50100,'ingreso'),(42,1000,'2019-06-27',3000,'extracción'),(43,2000,'2019-06-27',3100,'ingreso'),(44,1000,'2019-06-27',2000,'extracción'),(45,2000,'2019-06-27',2100,'ingreso'),(46,1000,'2019-06-27',2000,'extracción'),(47,2000,'2019-06-27',2100,'ingreso'),(48,1000,'2019-06-27',1111,'extracción'),(49,1000,'2019-10-25',556,'ingreso'),(50,1000,'2019-12-17',2100,'ingreso'),(51,1000,'2019-12-20',20000,'extracción'),(52,1000,'2019-12-20',1100,'ingreso'),(53,1000,'2020-08-20',400,'extracción'),(54,1000,'2020-09-06',3100,'ingreso'),(55,1000,'2020-09-07',1500,'extracción'),(56,1000,'2020-09-09',4100,'ingreso'),(57,1000,'2020-11-30',10100,'ingreso'),(58,2000,'2020-11-30',5100,'ingreso'),(59,1000,'2020-11-30',5000,'extracción'),(60,1000,'2021-04-08',4000,'Extracción'),(61,1000,'2021-12-09',4100,'ingreso'),(62,1000,'2021-12-09',200,'extracción'),(63,1234,'2021-12-09',600,'ingreso'),(64,1000,'2021-12-09',500,'extracción'),(65,2000,'2022-03-22',600,'ingreso'),(66,2000,'2022-03-22',4000,'extracción'),(67,2000,'2022-03-22',600,'extracción'),(68,1000,'2022-03-22',700,'ingreso'),(69,2000,'2022-03-22',3100,'ingreso'),(70,1000,'2022-10-21',1500,'ingreso'),(71,2000,'2022-10-24',2500,'extracción'),(72,5000,'2019-03-31',300,'funcionara??');
/*!40000 ALTER TABLE `movimientos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursales`
--

DROP TABLE IF EXISTS `sucursales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sucursales` (
  `nombre` varchar(50) NOT NULL,
  `codigoPostal` int NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `numeroEmpleados` int DEFAULT NULL,
  PRIMARY KEY (`nombre`,`codigoPostal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursales`
--

LOCK TABLES `sucursales` WRITE;
/*!40000 ALTER TABLE `sucursales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sucursales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `titulares`
--

DROP TABLE IF EXISTS `titulares`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titulares` (
  `idCuenta` int unsigned NOT NULL,
  `idCliente` int unsigned NOT NULL,
  PRIMARY KEY (`idCuenta`,`idCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `titulares`
--

LOCK TABLES `titulares` WRITE;
/*!40000 ALTER TABLE `titulares` DISABLE KEYS */;
INSERT INTO `titulares` VALUES (1000,1111),(1000,3333),(1000,7777),(1000,11117777),(1234,1111),(1234,3333),(2000,3333),(3000,2222),(4000,1111),(4000,2222),(5000,2222),(5000,9898),(6000,1111),(6000,2222);
/*!40000 ALTER TABLE `titulares` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bancabd'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-02 12:20:39
