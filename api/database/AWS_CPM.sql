-- MySQL dump 10.13  Distrib 8.0.32, for macos13.0 (arm64)
--
-- Host: localhost    Database: AWS_CPM
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `AWS_CPM`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `AWS_CPM` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `AWS_CPM`;

--
-- Table structure for table `clientAssets`
--

DROP TABLE IF EXISTS `clientAssets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientAssets` (
  `clientID` varchar(255) DEFAULT NULL,
  `assetName` varchar(20) DEFAULT NULL,
  `purchasePrice$` float DEFAULT NULL,
  `currentPrice$` float DEFAULT NULL,
  `QTY` int DEFAULT NULL,
  `totalValue$` float DEFAULT NULL,
  `investmentRiskID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientAssets`
--

LOCK TABLES `clientAssets` WRITE;
/*!40000 ALTER TABLE `clientAssets` DISABLE KEYS */;
INSERT INTO `clientAssets` VALUES ('001Maddon','ASX:CBA',0.8,0.73,800,584,'005High'),('003Stark','ASX:WOW',38.01,35.64,20,760.2,'002Conservative'),('002Rider','ASX:BHP',50.34,40.92,10,409.2,'002Conservative'),('004Silverhand','ASX:SGM',10.2,11.23,50,561.5,'003Balanced'),('001Maddon','ASX:WES',52.42,51.34,15,770.1,'002Conservative'),('004Silverhand','ASX:TLS',4.3,4.4,125,550,'005High'),('003Stark','ASX:SUN',20.43,21.23,20,424.6,'004Growth'),('002Rider','ASX:XRO',2.39,2.5,250,625,'005High');
/*!40000 ALTER TABLE `clientAssets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientDetails`
--

DROP TABLE IF EXISTS `clientDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientDetails` (
  `customerID` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `phoneNumber` int DEFAULT NULL,
  `emailAddress` varchar(255) DEFAULT NULL,
  `BSB_accountNumber` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientDetails`
--

LOCK TABLES `clientDetails` WRITE;
/*!40000 ALTER TABLE `clientDetails` DISABLE KEYS */;
INSERT INTO `clientDetails` VALUES ('001Maddon','Maddon','John',491570156,'johnmaddon@gmail.com','032-053 435792861'),('002Rider','Rider','Richard',457229996,'rrider@outlook.com','174-698 613952847'),('003Stark','Stark','Peter',474225701,'peterstark@outlook.com','496-291 638571249'),('004Silverhand','Silverhand','Johnny',470865732,'silverhandj@gmail.com','739-681 946625831');
/*!40000 ALTER TABLE `clientDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investmentRisk`
--

DROP TABLE IF EXISTS `investmentRisk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `investmentRisk` (
  `investmentName` varchar(255) DEFAULT NULL,
  `investmentRisk` varchar(255) DEFAULT NULL,
  `investmentID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investmentRisk`
--

LOCK TABLES `investmentRisk` WRITE;
/*!40000 ALTER TABLE `investmentRisk` DISABLE KEYS */;
INSERT INTO `investmentRisk` VALUES ('Cash','Lowest risk','001Cash'),('Conservative','Low risk, some growth','002Conservative'),('Balanced','Moderate risk, better growth','003Balanced'),('Growth','High risk, high growth, suited for longer term','004Growth'),('High Growth','Very high volatibility, very high growth, suited for very long term','005High');
/*!40000 ALTER TABLE `investmentRisk` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-27 16:57:39
