-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: lavie
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `atendimentos`
--

DROP TABLE IF EXISTS `atendimentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atendimentos` (
  `id_Atendimentos` int NOT NULL AUTO_INCREMENT,
  `id_Pacientes` int NOT NULL,
  `id_Psicologos` int NOT NULL,
  `dataAtendimento` date NOT NULL,
  `observacao` varchar(255) NOT NULL,
  `Pacientes_id_Pacientes` int NOT NULL,
  `Psicologos_id_Psicologos` int NOT NULL,
  PRIMARY KEY (`id_Atendimentos`),
  KEY `fk_Atendimentos_Pacientes_idx` (`Pacientes_id_Pacientes`),
  KEY `fk_Atendimentos_Psicologos1_idx` (`Psicologos_id_Psicologos`),
  CONSTRAINT `fk_Atendimentos_Pacientes` FOREIGN KEY (`Pacientes_id_Pacientes`) REFERENCES `pacientes` (`id_Pacientes`),
  CONSTRAINT `fk_Atendimentos_Psicologos1` FOREIGN KEY (`Psicologos_id_Psicologos`) REFERENCES `psicologos` (`id_Psicologos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atendimentos`
--

LOCK TABLES `atendimentos` WRITE;
/*!40000 ALTER TABLE `atendimentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `atendimentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientes` (
  `id_Pacientes` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `dataNascimento` date NOT NULL,
  PRIMARY KEY (`id_Pacientes`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `psicologos`
--

DROP TABLE IF EXISTS `psicologos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psicologos` (
  `id_Psicologos` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(45) NOT NULL,
  `apresentacao` varchar(255) NOT NULL,
  PRIMARY KEY (`id_Psicologos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psicologos`
--

LOCK TABLES `psicologos` WRITE;
/*!40000 ALTER TABLE `psicologos` DISABLE KEYS */;
/*!40000 ALTER TABLE `psicologos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'lavie'
--

--
-- Dumping routines for database 'lavie'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-10 23:08:43