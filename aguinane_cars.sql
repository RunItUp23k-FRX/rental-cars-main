-- MySQL dump 10.13  Distrib 8.0.46, for Linux (x86_64)
--
-- Host: localhost    Database: aguinane_cars
-- ------------------------------------------------------
-- Server version	8.0.46-0ubuntu0.24.04.4

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
-- Current Database: `aguin
ane_cars`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `aguinane_cars` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `aguinane_cars`;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('aguinane-cars-cache-06890d91db6a523c00788d568f28745a','i:1;',1770654770),('aguinane-cars-cache-06890d91db6a523c00788d568f28745a:timer','i:1770654770;',1770654770),('aguinane-cars-cache-0c292ece6cc5bba7242138924580a49f','i:1;',1764525744),('aguinane-cars-cache-0c292ece6cc5bba7242138924580a49f:timer','i:1764525744;',1764525744),('aguinane-cars-cache-0c7ac011a5909b516e23ad5e6e947e5d','i:1;',1769028557),('aguinane-cars-cache-0c7ac011a5909b516e23ad5e6e947e5d:timer','i:1769028557;',1769028557),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:1;',1768499634),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X:timer','i:1768499634;',1768499634),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:1;',1768832633),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X:timer','i:1768832633;',1768832633),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:5;',1764105712),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X:timer','i:1764105712;',1764105712),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:1;',1768927788),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X:timer','i:1768927788;',1768927788),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:1;',1786959168),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X:timer','i:1786959168;',1786959168),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:1;',1776693968),('aguinane-cars-cache-1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X:timer','i:1776693968;',1776693968),('aguinane-cars-cache-453b28854eb7a33e00915c830db085ec','i:1;',1777980739),('aguinane-cars-cache-453b28854eb7a33e00915c830db085ec:timer','i:1777980739;',1777980739),('aguinane-cars-cache-47ff70b3dabd3e1064bc218cd8883583','i:1;',1779182902),('aguinane-cars-cache-47ff70b3dabd3e1064bc218cd8883583:timer','i:1779182902;',1779182902),('aguinane-cars-cache-490c2e08b85953f808fc83734986bfe0','i:1;',1764077041),('aguinane-cars-cache-490c2e08b85953f808fc83734986bfe0:timer','i:1764077041;',1764077041),('aguinane-cars-cache-4b6b897ab746b0587c8313e3146b13a1','i:2;',1768679481),('aguinane-cars-cache-4b6b897ab746b0587c8313e3146b13a1:timer','i:1768679481;',1768679481),('aguinane-cars-cache-52e2ca48bbf3e3ead3a3b38f9bc2a976','i:1;',1771720566),('aguinane-cars-cache-52e2ca48bbf3e3ead3a3b38f9bc2a976:timer','i:1771720566;',1771720566),('aguinane-cars-cache-532f6e5b532f2b0cc3d6735ddddfbb03','i:1;',1768766309),('aguinane-cars-cache-532f6e5b532f2b0cc3d6735ddddfbb03:timer','i:1768766309;',1768766309),('aguinane-cars-cache-55b56627aa64454bc2729504146ea3b8','i:1;',1772414343),('aguinane-cars-cache-55b56627aa64454bc2729504146ea3b8:timer','i:1772414343;',1772414343),('aguinane-cars-cache-58a529729abdfedf1f6a0f17c1ebdaf4','i:1;',1781814856),('aguinane-cars-cache-58a529729abdfedf1f6a0f17c1ebdaf4:timer','i:1781814856;',1781814856),('aguinane-cars-cache-5ad746b68bd0b63c79cc7cd34a924398','i:1;',1769114799),('aguinane-cars-cache-5ad746b68bd0b63c79cc7cd34a924398:timer','i:1769114799;',1769114799),('aguinane-cars-cache-5e411f705c6c58546701d30beb0729d6','i:1;',1787236919),('aguinane-cars-cache-5e411f705c6c58546701d30beb0729d6:timer','i:1787236919;',1787236919),('aguinane-cars-cache-62f2abf345cde3a2ad863c8fac23de62','i:1;',1764094918),('aguinane-cars-cache-62f2abf345cde3a2ad863c8fac23de62:timer','i:1764094918;',1764094918),('aguinane-cars-cache-6666cd061e9ad61a14c4ae5e7c99e8de','i:2;',1764095038),('aguinane-cars-cache-6666cd061e9ad61a14c4ae5e7c99e8de:timer','i:1764095038;',1764095038),('aguinane-cars-cache-6a01cd719aac50d6853e93515605e756','i:1;',1780506739),('aguinane-cars-cache-6a01cd719aac50d6853e93515605e756:timer','i:1780506739;',1780506739),('aguinane-cars-cache-6cd921310766db22ec4d6e438db1b2d9','i:1;',1769797882),('aguinane-cars-cache-6cd921310766db22ec4d6e438db1b2d9:timer','i:1769797882;',1769797882),('aguinane-cars-cache-6efaeb4a2b3e276f9af5915e262894f2','i:1;',1766138884),('aguinane-cars-cache-6efaeb4a2b3e276f9af5915e262894f2:timer','i:1766138884;',1766138884),('aguinane-cars-cache-720d8de43a9bbbdfbb860ba4a8effa04','i:1;',1764698446),('aguinane-cars-cache-720d8de43a9bbbdfbb860ba4a8effa04:timer','i:1764698446;',1764698446),('aguinane-cars-cache-76b95d0105531d823ca8361a45921af6','i:1;',1764620153),('aguinane-cars-cache-76b95d0105531d823ca8361a45921af6:timer','i:1764620153;',1764620153),('aguinane-cars-cache-7815e8d45d5e69e878ae1a894e55d11b','i:1;',1764094810),('aguinane-cars-cache-7815e8d45d5e69e878ae1a894e55d11b:timer','i:1764094810;',1764094810),('aguinane-cars-cache-7a3a596f1d8743a315d2ba31724547ee','i:1;',1780659755),('aguinane-cars-cache-7a3a596f1d8743a315d2ba31724547ee:timer','i:1780659755;',1780659755),('aguinane-cars-cache-7d15a9b75c66e4a7a96fdb011cea911a','i:1;',1764095125),('aguinane-cars-cache-7d15a9b75c66e4a7a96fdb011cea911a:timer','i:1764095125;',1764095125),('aguinane-cars-cache-7faa171bc1ad42fcba4c7b3a60fcd597','i:1;',1768900409),('aguinane-cars-cache-7faa171bc1ad42fcba4c7b3a60fcd597:timer','i:1768900409;',1768900409),('aguinane-cars-cache-82951536de25ea629d3f0031752b9b65','i:1;',1768836262),('aguinane-cars-cache-82951536de25ea629d3f0031752b9b65:timer','i:1768836262;',1768836262),('aguinane-cars-cache-8ee88d16fa3594d2cc8588386b3b65e0','i:1;',1769982279),('aguinane-cars-cache-8ee88d16fa3594d2cc8588386b3b65e0:timer','i:1769982279;',1769982279),('aguinane-cars-cache-8f58de8578817c458f60506eda703caf','i:1;',1769634013),('aguinane-cars-cache-8f58de8578817c458f60506eda703caf:timer','i:1769634013;',1769634013),('aguinane-cars-cache-941e0e80f1b7dbf69e3bfe30c84d4550','i:1;',1781814839),('aguinane-cars-cache-941e0e80f1b7dbf69e3bfe30c84d4550:timer','i:1781814839;',1781814839),('aguinane-cars-cache-9645dc78150811e518fe703599732cd6','i:1;',1781449594),('aguinane-cars-cache-9645dc78150811e518fe703599732cd6:timer','i:1781449594;',1781449594),('aguinane-cars-cache-987eba7e4bc07097a46fd4be5bc4114d','i:1;',1768743554),('aguinane-cars-cache-987eba7e4bc07097a46fd4be5bc4114d:timer','i:1768743554;',1768743554),('aguinane-cars-cache-9d4ec410a1c6409c6398cbe870adfd65','i:1;',1765553040),('aguinane-cars-cache-9d4ec410a1c6409c6398cbe870adfd65:timer','i:1765553040;',1765553040),('aguinane-cars-cache-a040f00b34391794dc99b0817e06b474','i:2;',1780520728),('aguinane-cars-cache-a040f00b34391794dc99b0817e06b474:timer','i:1780520728;',1780520728),('aguinane-cars-cache-a163411b668075e418b205e4098fb6cf','i:1;',1781649391),('aguinane-cars-cache-a163411b668075e418b205e4098fb6cf:timer','i:1781649391;',1781649391),('aguinane-cars-cache-a2bb2a56ec1c7252f9321ce7b18332f6','i:1;',1787236091),('aguinane-cars-cache-a2bb2a56ec1c7252f9321ce7b18332f6:timer','i:1787236091;',1787236091),('aguinane-cars-cache-a803e669d4935b3d8263bd3d18919f5f','i:1;',1781185006),('aguinane-cars-cache-a803e669d4935b3d8263bd3d18919f5f:timer','i:1781185006;',1781185006),('aguinane-cars-cache-aea52b9f10bc66296f632d090c85a8be','i:1;',1764072843),('aguinane-cars-cache-aea52b9f10bc66296f632d090c85a8be:timer','i:1764072843;',1764072843),('aguinane-cars-cache-af7c143b22b5da7fb0353304d191193d','i:1;',1763905409),('aguinane-cars-cache-af7c143b22b5da7fb0353304d191193d:timer','i:1763905409;',1763905409),('aguinane-cars-cache-aguinanecar@gmail.com|104.22.23.77','i:1;',1765553040),('aguinane-cars-cache-aguinanecar@gmail.com|104.22.23.77:timer','i:1765553040;',1765553040),('aguinane-cars-cache-aguinanecar@gmail.com|172.68.103.171','i:5;',1787236283),('aguinane-cars-cache-aguinanecar@gmail.com|172.68.103.171:timer','i:1787236283;',1787236283),('aguinane-cars-cache-aguinanecar@gmail.com|172.68.234.96','i:4;',1780520711),('aguinane-cars-cache-aguinanecar@gmail.com|172.68.234.96:timer','i:1780520711;',1780520711),('aguinane-cars-cache-aguinanecars@gmail.com|104.22.23.70','i:2;',1764095038),('aguinane-cars-cache-aguinanecars@gmail.com|104.22.23.70:timer','i:1764095038;',1764095038),('aguinane-cars-cache-aguinanecars@gmail.com|104.22.23.71','i:1;',1764094810),('aguinane-cars-cache-aguinanecars@gmail.com|104.22.23.71:timer','i:1764094810;',1764094810),('aguinane-cars-cache-aguinanecars@gmail.com|104.22.23.77','i:5;',1765553051),('aguinane-cars-cache-aguinanecars@gmail.com|104.22.23.77:timer','i:1765553051;',1765553051),('aguinane-cars-cache-aguinanecars@gmail.com|162.158.123.32','i:2;',1764094966),('aguinane-cars-cache-aguinanecars@gmail.com|162.158.123.32:timer','i:1764094966;',1764094966),('aguinane-cars-cache-aguinanecars@gmail.com|162.158.23.147','i:1;',1787236920),('aguinane-cars-cache-aguinanecars@gmail.com|162.158.23.147:timer','i:1787236920;',1787236920),('aguinane-cars-cache-aguinanecars@gmail.com|162.159.122.51','i:2;',1787235225),('aguinane-cars-cache-aguinanecars@gmail.com|162.159.122.51:timer','i:1787235225;',1787235225),('aguinane-cars-cache-b50b8b8cff937a671ff007bb57c02943','i:5;',1787236283),('aguinane-cars-cache-b50b8b8cff937a671ff007bb57c02943:timer','i:1787236283;',1787236283),('aguinane-cars-cache-b57316b885cd04390ce8ae8d74d590d8','i:1;',1765383354),('aguinane-cars-cache-b57316b885cd04390ce8ae8d74d590d8:timer','i:1765383354;',1765383354),('aguinane-cars-cache-bb15ae6130f2ef29f954b9271bbdca36','i:1;',1767387083),('aguinane-cars-cache-bb15ae6130f2ef29f954b9271bbdca36:timer','i:1767387083;',1767387083),('aguinane-cars-cache-bdb2a490271b4008386d5e8e7fcd7951','i:1;',1768738027),('aguinane-cars-cache-bdb2a490271b4008386d5e8e7fcd7951:timer','i:1768738027;',1768738027),('aguinane-cars-cache-bibox.ismail@gmail.com|172.68.234.96','i:2;',1780520728),('aguinane-cars-cache-bibox.ismail@gmail.com|172.68.234.96:timer','i:1780520728;',1780520728),('aguinane-cars-cache-bibox@gmail.com|104.22.23.70','i:5;',1764105712),('aguinane-cars-cache-bibox@gmail.com|104.22.23.70:timer','i:1764105712;',1764105712),('aguinane-cars-cache-bibox@gmail.com|162.158.123.32','i:1;',1764094919),('aguinane-cars-cache-bibox@gmail.com|162.158.123.32:timer','i:1764094919;',1764094919),('aguinane-cars-cache-c006fd6eadd4dc548ad311d92eaaa0b4','i:3;',1787238330),('aguinane-cars-cache-c006fd6eadd4dc548ad311d92eaaa0b4:timer','i:1787238330;',1787238330),('aguinane-cars-cache-c0ecc7067d5853722ef32625125ee1a2','i:1;',1780406541),('aguinane-cars-cache-c0ecc7067d5853722ef32625125ee1a2:timer','i:1780406541;',1780406541),('aguinane-cars-cache-c96c0e6a55dfa31fefd2a28dddb1d661','i:4;',1780520711),('aguinane-cars-cache-c96c0e6a55dfa31fefd2a28dddb1d661:timer','i:1780520711;',1780520711),('aguinane-cars-cache-ca8619bd4c81a3f545959e0f6a9cf1d4','i:1;',1769360424),('aguinane-cars-cache-ca8619bd4c81a3f545959e0f6a9cf1d4:timer','i:1769360424;',1769360424),('aguinane-cars-cache-cb18d64f305589d77da2daddc37dc54e','i:1;',1773154170),('aguinane-cars-cache-cb18d64f305589d77da2daddc37dc54e:timer','i:1773154170;',1773154170),('aguinane-cars-cache-cc5ad80154b65b13fff8c8affcd3d813','i:1;',1768396615),('aguinane-cars-cache-cc5ad80154b65b13fff8c8affcd3d813:timer','i:1768396615;',1768396615),('aguinane-cars-cache-d0f03e8cbb759f70f2a16de3db2d7d0e','i:1;',1773790054),('aguinane-cars-cache-d0f03e8cbb759f70f2a16de3db2d7d0e:timer','i:1773790054;',1773790054),('aguinane-cars-cache-d9665a7c8074b26b77d8f545b642a708','i:1;',1763935671),('aguinane-cars-cache-d9665a7c8074b26b77d8f545b642a708:timer','i:1763935671;',1763935671),('aguinane-cars-cache-db08cd7d4b63b774ade899b2981cf504','i:1;',1766475925),('aguinane-cars-cache-db08cd7d4b63b774ade899b2981cf504:timer','i:1766475925;',1766475925),('aguinane-cars-cache-e22c5a5bb985b9c6ac5c1fcb8c181f8a','i:2;',1787235225),('aguinane-cars-cache-e22c5a5bb985b9c6ac5c1fcb8c181f8a:timer','i:1787235225;',1787235225),('aguinane-cars-cache-e4fff2d56d493a1532ccaa9f86459668','i:1;',1778150686),('aguinane-cars-cache-e4fff2d56d493a1532ccaa9f86459668:timer','i:1778150686;',1778150686),('aguinane-cars-cache-e51e43d8c9aa5f4ee058c4115eeca9e2','i:1;',1775153377),('aguinane-cars-cache-e51e43d8c9aa5f4ee058c4115eeca9e2:timer','i:1775153377;',1775153377),('aguinane-cars-cache-e6732f8cb76741f91cb8f5a71f781ac6','i:1;',1775774204),('aguinane-cars-cache-e6732f8cb76741f91cb8f5a71f781ac6:timer','i:1775774204;',1775774204),('aguinane-cars-cache-ea5c9ebd3fbc3d834ee363e08312da5f','i:1;',1769608530),('aguinane-cars-cache-ea5c9ebd3fbc3d834ee363e08312da5f:timer','i:1769608530;',1769608530),('aguinane-cars-cache-f20701954b9f0580da089f7f20b1aadd','i:1;',1765400204),('aguinane-cars-cache-f20701954b9f0580da089f7f20b1aadd:timer','i:1765400204;',1765400204),('aguinane-cars-cache-f2530de55ea382a081fd53f80ec8896c','i:2;',1788287643),('aguinane-cars-cache-f2530de55ea382a081fd53f80ec8896c:timer','i:1788287643;',1788287643),('aguinane-cars-cache-f265e63ea10f29d88f0c867f7cdadb07','i:2;',1764094965),('aguinane-cars-cache-f265e63ea10f29d88f0c867f7cdadb07:timer','i:1764094965;',1764094965),('aguinane-cars-cache-f6b2db366b08b38ed2ce627ea235d9cb','i:1;',1765291350),('aguinane-cars-cache-f6b2db366b08b38ed2ce627ea235d9cb:timer','i:1765291350;',1765291350),('aguinane-cars-cache-f6b5cef7235be3dd1d3166d94e91ecc5','i:1;',1776380993),('aguinane-cars-cache-f6b5cef7235be3dd1d3166d94e91ecc5:timer','i:1776380993;',1776380993),('aguinane-cars-cache-fa5226d2283bcddc63bf80cb56804f46','i:1;',1779360920),('aguinane-cars-cache-fa5226d2283bcddc63bf80cb56804f46:timer','i:1779360920;',1779360920),('aguinane-cars-cache-fae77589514137d0996be0fbc234ae0b','i:1;',1768499539),('aguinane-cars-cache-fae77589514137d0996be0fbc234ae0b:timer','i:1768499539;',1768499539),('aguinane-cars-cache-fbe93b8668e15f3bb5fb7d7d080fcacf','i:1;',1773019863),('aguinane-cars-cache-fbe93b8668e15f3bb5fb7d7d080fcacf:timer','i:1773019863;',1773019863),('aguinane-cars-cache-fortify.2fa_codes.0329be5fc2ba355e0170e731e1e3c10f','i:58954513;',1768635467),('aguinane-cars-cache-fortify.2fa_codes.05440bcaa8c56f40b13570fb41af6e8e','i:58846672;',1765400221),('aguinane-cars-cache-fortify.2fa_codes.093790337f58f4ce4cd4f3c68b036310','i:58834809;',1765044356),('aguinane-cars-cache-fortify.2fa_codes.0b239b55ea46592b342950356a5a7e7c','i:59346883;',1780406557),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:58809196;',1764275959),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:58996357;',1769890787),('aguinane-cars-cache-fortify.2fa_codes.222a65ce0321b0bbe02ee087f849b66b','i:59355323;',1780659774),('aguinane-cars-cache-fortify.2fa_codes.25802468eda2d11d7264a7975b5dd8f1','i:59031109;',1770933342),('aguinane-cars-cache-fortify.2fa_codes.26a14f2a2eeecc505a18ee4f687669aa','i:59266023;',1777980757),('aguinane-cars-cache-fortify.2fa_codes.29427ada884d0a79656995e71f3962ec','i:59057350;',1771720577),('aguinane-cars-cache-fortify.2fa_codes.2c6128eb7683d9e34693e76ea53fab7a','i:58993261;',1769797904),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:58857056;',1765711761),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:58958111;',1768743412),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:59145558;',1774366827),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:59201001;',1776030106),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:59200054;',1776001706),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:59050708;',1771521319),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:58904382;',1767131532),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:58966764;',1769002993),('aguinane-cars-cache-fortify.2fa_codes.1CfezR8JfREdLaFZQLeQZfFQ575WcUsS3X','i:58872225;',1766166835),('aguinane-cars-cache-fortify.2fa_codes.474f2a6744d51503b5519c05f8c917f7','i:59169474;',1775084293),('aguinane-cars-cache-fortify.2fa_codes.487367ee2d8b4c19b485274e7c03e868','i:58973373;',1769201270),('aguinane-cars-cache-fortify.2fa_codes.49036fa60060620c665eb68ebcd1454d','i:59105137;',1773154195),('aguinane-cars-cache-fortify.2fa_codes.4b055a45358f62b4d2dc35d5ba63d789','i:58846111;',1765383402),('aguinane-cars-cache-fortify.2fa_codes.4c8c5d5b7055012fb9b7d0b1cc3ccd01','i:59363877;',1780916382),('aguinane-cars-cache-fortify.2fa_codes.545beaf410164ee76e078a01434d196c','i:59008047;',1770241486),('aguinane-cars-cache-fortify.2fa_codes.58b8b7bcf9aa07573fb6e74343722a32','i:59028271;',1770848207),('aguinane-cars-cache-fortify.2fa_codes.5cc67d383a6be4dde6619ef5b0943e08','i:58909742;',1767292342),('aguinane-cars-cache-fortify.2fa_codes.649aac1f98e5a32cce7af7ae4f635fd9','i:58884204;',1766526196),('aguinane-cars-cache-fortify.2fa_codes.663f28f22b293245121d0f86d39ffd47','i:59388311;',1781649408),('aguinane-cars-cache-fortify.2fa_codes.669e834f744d25d0f1b733d4cb7fde23','i:58852437;',1765573185),('aguinane-cars-cache-fortify.2fa_codes.67aa5b193d14963c81e9037f22fe7705','i:59021824;',1770654791),('aguinane-cars-cache-fortify.2fa_codes.684a5336c27eedf61a6069be99ade830','i:58949983;',1768499562),('aguinane-cars-cache-fortify.2fa_codes.6d09725b29291bfd6a2728cef4842cf2','i:58944689;',1768340755),('aguinane-cars-cache-fortify.2fa_codes.6e1406cecf2a0bba687dfdbc24d5d046','i:58843043;',1765291369),('aguinane-cars-cache-fortify.2fa_codes.6e3e4c2642e0d87bb6dd4f5bce233c19','i:59393826;',1781814856),('aguinane-cars-cache-fortify.2fa_codes.7493692bff71ceabdc3a0b478d41d497','i:58985008;',1769550312),('aguinane-cars-cache-fortify.2fa_codes.75c5b39d60ff047ab629ae4ca03609ea','i:58998537;',1769956184),('aguinane-cars-cache-fortify.2fa_codes.800f363d6a7291f07dcec1978b692dbb','i:58924543;',1767736375),('aguinane-cars-cache-fortify.2fa_codes.80a7d45886c6d76dd06f9b217fa32bc1','i:59306095;',1779182922),('aguinane-cars-cache-fortify.2fa_codes.8729e4dc78c04f7218fbc1623af3f59c','i:58963345;',1768900434),('aguinane-cars-cache-fortify.2fa_codes.87c08e912001aa7927c57d7c5c455be3','i:58956146;',1768684462),('aguinane-cars-cache-fortify.2fa_codes.88d10ea2807283d2b492703a84209f34','i:58892920;',1766787668),('aguinane-cars-cache-fortify.2fa_codes.89104657230d9f6d716d3cac8d0ffb52','i:59080476;',1772414363),('aguinane-cars-cache-fortify.2fa_codes.8c64a0fa78b36d67f703a2945081af01','i:59350223;',1780506760),('aguinane-cars-cache-fortify.2fa_codes.8c68c496bf19cbcf0a38bcd6e8f82add','i:59372831;',1781185017),('aguinane-cars-cache-fortify.2fa_codes.8cb3c786a19ee5b607b18fd73e1c8a8e','i:58917446;',1767523467),('aguinane-cars-cache-fortify.2fa_codes.91fb0a8166a00a75639b8c19da49969a','i:58959306;',1768779252),('aguinane-cars-cache-fortify.2fa_codes.929a11e7612a1e98a96c56b3fb5e1b82','i:59312029;',1779360940),('aguinane-cars-cache-fortify.2fa_codes.94d16a091c914fec16eed382339ff752','i:58900637;',1767019188),('aguinane-cars-cache-fortify.2fa_codes.9ade7929f95d860a4a6cfb9f55bec470','i:58908897;',1767266987),('aguinane-cars-cache-fortify.2fa_codes.9e8ddacad37d60a72f3ee162b993c9e6','i:58889055;',1766671725),('aguinane-cars-cache-fortify.2fa_codes.a4cd67fc468d46e53dd7a3effddd718c','i:59070355;',1772110730),('aguinane-cars-cache-fortify.2fa_codes.a89639b33f161db7c20506daca3159b7','i:58967617;',1769028570),('aguinane-cars-cache-fortify.2fa_codes.aac5a9f0c5e1a2c3fefa765f72dadc6f','i:59291892;',1778756830),('aguinane-cars-cache-fortify.2fa_codes.ac6599a68fd69c81a86f383571a63538','i:58860964;',1765828990),('aguinane-cars-cache-fortify.2fa_codes.b03bc27e7f19820f1517f04f4d5e3db6','i:58877544;',1766326400),('aguinane-cars-cache-fortify.2fa_codes.b0cf96e6c6d3e7a12e2645f90c7c5751','i:58882529;',1766475949),('aguinane-cars-cache-fortify.2fa_codes.b51d8160eb6e3928eb8da04ba40d2f01','i:58984073;',1769522279),('aguinane-cars-cache-fortify.2fa_codes.bbe6ddae4adc2f2a7cfa77633f13ece8','i:58964257;',1768927798),('aguinane-cars-cache-fortify.2fa_codes.bd845050bd559152441fd1b92725a25d','i:58817523;',1764525775),('aguinane-cars-cache-fortify.2fa_codes.bda3c2210b4aa0847a5df6a985eb75f9','i:58986949;',1769608542),('aguinane-cars-cache-fortify.2fa_codes.be248e45f4549e9c64f93b8654a91daa','i:58823280;',1764698480),('aguinane-cars-cache-fortify.2fa_codes.bf9db288a56862a44b76c5e8bfefb129','i:58966305;',1768989214),('aguinane-cars-cache-fortify.2fa_codes.c2d1c76092acf4bd646837a0db1f2a45','i:58970491;',1769114813),('aguinane-cars-cache-fortify.2fa_codes.c85116ddf63252b9b45f31d7f4938681','i:59271688;',1778150701),('aguinane-cars-cache-fortify.2fa_codes.cb2a72e46295df8a9f1fdd00c2dd1c24','i:59381651;',1781449613),('aguinane-cars-cache-fortify.2fa_codes.cb7dfca585a7404664aa6b31e9ea2940','i:59076318;',1772289607),('aguinane-cars-cache-fortify.2fa_codes.cd3473e1ff81344dcf9960bd6ca05f7f','i:58838289;',1765148750),('aguinane-cars-cache-fortify.2fa_codes.cde94c2b9f31b17a43fe51900d8e1654','i:58987798;',1769634027),('aguinane-cars-cache-fortify.2fa_codes.d50ab083fd55d162e156283e2d706fe7','i:59350492;',1780514833),('aguinane-cars-cache-fortify.2fa_codes.d8eb953687782fa327f35514587d542a','i:59171777;',1775153394),('aguinane-cars-cache-fortify.2fa_codes.d94e073556e58f3ed55e258fa30e1fa9','i:59212698;',1776381026),('aguinane-cars-cache-fortify.2fa_codes.dab15a08ed678e5cff18f49455de4759','i:58887162;',1766614935),('aguinane-cars-cache-fortify.2fa_codes.dd816493d8311cfd55ac82a8fe3f8e12','i:59281749;',1778452555),('aguinane-cars-cache-fortify.2fa_codes.e48a0fd8ca56a2076870782afc452a97','i:58912901;',1767387100),('aguinane-cars-cache-fortify.2fa_codes.e5b64f99c139e285685d0da18cb03ac7','i:58849508;',1765485325),('aguinane-cars-cache-fortify.2fa_codes.e856cf0da940c760946a6ae9b6399b28','i:58978679;',1769360438),('aguinane-cars-cache-fortify.2fa_codes.ea4e969b85d8cd1ba8b2688f5d8cda49','i:58999408;',1769982301),('aguinane-cars-cache-fortify.2fa_codes.ef525d45eec864a0bec827cdcf98a280','i:58840133;',1765204061),('aguinane-cars-cache-fortify.2fa_codes.f10fe36919d10507061023f199f68b81','i:59100660;',1773019876),('aguinane-cars-cache-fortify.2fa_codes.f2ea75a79fcb37f5113f1f7b2937bca7','i:58961086;',1768832653),('aguinane-cars-cache-fortify.2fa_codes.f88130c0ed719cbf6f0165eba687761f','i:59126333;',1773790079),('aguinane-cars-cache-fortify.2fa_codes.f9b38ee7855125ac198f4b8a6eb54cb4','i:58864185;',1765925621),('aguinane-cars-cache-fortify.2fa_codes.fde3f833b23d4176d7a748f247c49128','i:59192472;',1775774243),('aguinane-cars-cache-fortify.2fa_codes.feb6410023d5aa0fe8b522119a2f5aa5','i:58923649;',1767709553),('aguinane-cars-cache-marques_for_filter','O:39:\"Illuminate\\Database\\Eloquent\\Collection\":2:{s:8:\"\0*\0items\";a:26:{i:0;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:9;s:10:\"nom_marque\";s:4:\"Audi\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:9;s:10:\"nom_marque\";s:4:\"Audi\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:1;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:6;s:10:\"nom_marque\";s:3:\"BMW\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:6;s:10:\"nom_marque\";s:3:\"BMW\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:2;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:21;s:10:\"nom_marque\";s:9:\"Chevrolet\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:21;s:10:\"nom_marque\";s:9:\"Chevrolet\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:3;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:8;s:10:\"nom_marque\";s:8:\"Citroën\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:8;s:10:\"nom_marque\";s:8:\"Citroën\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:4;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:1;s:10:\"nom_marque\";s:5:\"Dacia\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:1;s:10:\"nom_marque\";s:5:\"Dacia\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:5;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:15;s:10:\"nom_marque\";s:4:\"Fiat\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:15;s:10:\"nom_marque\";s:4:\"Fiat\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:6;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:13;s:10:\"nom_marque\";s:4:\"Ford\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:13;s:10:\"nom_marque\";s:4:\"Ford\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:7;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:22;s:10:\"nom_marque\";s:5:\"Honda\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:22;s:10:\"nom_marque\";s:5:\"Honda\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:8;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:11;s:10:\"nom_marque\";s:7:\"Hyundai\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:11;s:10:\"nom_marque\";s:7:\"Hyundai\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:9;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:23;s:10:\"nom_marque\";s:4:\"Jeep\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:23;s:10:\"nom_marque\";s:4:\"Jeep\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:10;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:12;s:10:\"nom_marque\";s:3:\"Kia\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:12;s:10:\"nom_marque\";s:3:\"Kia\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:11;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:24;s:10:\"nom_marque\";s:10:\"Land Rover\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:24;s:10:\"nom_marque\";s:10:\"Land Rover\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:12;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:19;s:10:\"nom_marque\";s:5:\"Mazda\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:19;s:10:\"nom_marque\";s:5:\"Mazda\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:13;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:18;s:10:\"nom_marque\";s:13:\"Mercedes-Benz\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:18;s:10:\"nom_marque\";s:13:\"Mercedes-Benz\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:14;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:20;s:10:\"nom_marque\";s:10:\"Mitsubishi\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:20;s:10:\"nom_marque\";s:10:\"Mitsubishi\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:15;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:4;s:10:\"nom_marque\";s:6:\"Nissan\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:4;s:10:\"nom_marque\";s:6:\"Nissan\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:16;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:14;s:10:\"nom_marque\";s:4:\"Opel\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:14;s:10:\"nom_marque\";s:4:\"Opel\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:17;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:2;s:10:\"nom_marque\";s:7:\"Peugeot\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:2;s:10:\"nom_marque\";s:7:\"Peugeot\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:18;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:26;s:10:\"nom_marque\";s:7:\"Porsche\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:26;s:10:\"nom_marque\";s:7:\"Porsche\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:19;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:3;s:10:\"nom_marque\";s:7:\"Renault\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:3;s:10:\"nom_marque\";s:7:\"Renault\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:20;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:5;s:10:\"nom_marque\";s:4:\"Seat\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:5;s:10:\"nom_marque\";s:4:\"Seat\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:21;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:17;s:10:\"nom_marque\";s:5:\"Skoda\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:17;s:10:\"nom_marque\";s:5:\"Skoda\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:22;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:16;s:10:\"nom_marque\";s:6:\"Suzuki\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:16;s:10:\"nom_marque\";s:6:\"Suzuki\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:23;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:10;s:10:\"nom_marque\";s:6:\"Toyota\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:10;s:10:\"nom_marque\";s:6:\"Toyota\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:24;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:7;s:10:\"nom_marque\";s:10:\"Volkswagen\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:7;s:10:\"nom_marque\";s:10:\"Volkswagen\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}i:25;O:20:\"App\\Models\\MarqueCar\":33:{s:13:\"\0*\0connection\";s:5:\"mysql\";s:8:\"\0*\0table\";s:11:\"marque_cars\";s:13:\"\0*\0primaryKey\";s:2:\"id\";s:10:\"\0*\0keyType\";s:3:\"int\";s:12:\"incrementing\";b:1;s:7:\"\0*\0with\";a:0:{}s:12:\"\0*\0withCount\";a:0:{}s:19:\"preventsLazyLoading\";b:0;s:10:\"\0*\0perPage\";i:15;s:6:\"exists\";b:1;s:18:\"wasRecentlyCreated\";b:0;s:28:\"\0*\0escapeWhenCastingToString\";b:0;s:13:\"\0*\0attributes\";a:2:{s:2:\"id\";i:25;s:10:\"nom_marque\";s:5:\"Volvo\";}s:11:\"\0*\0original\";a:2:{s:2:\"id\";i:25;s:10:\"nom_marque\";s:5:\"Volvo\";}s:10:\"\0*\0changes\";a:0:{}s:11:\"\0*\0previous\";a:0:{}s:8:\"\0*\0casts\";a:0:{}s:17:\"\0*\0classCastCache\";a:0:{}s:21:\"\0*\0attributeCastCache\";a:0:{}s:13:\"\0*\0dateFormat\";N;s:10:\"\0*\0appends\";a:0:{}s:19:\"\0*\0dispatchesEvents\";a:0:{}s:14:\"\0*\0observables\";a:0:{}s:12:\"\0*\0relations\";a:0:{}s:10:\"\0*\0touches\";a:0:{}s:27:\"\0*\0relationAutoloadCallback\";N;s:26:\"\0*\0relationAutoloadContext\";N;s:10:\"timestamps\";b:1;s:13:\"usesUniqueIds\";b:0;s:9:\"\0*\0hidden\";a:0:{}s:10:\"\0*\0visible\";a:0:{}s:11:\"\0*\0fillable\";a:3:{i:0;s:10:\"nom_marque\";i:1;s:10:\"created_by\";i:2;s:10:\"updated_by\";}s:10:\"\0*\0guarded\";a:1:{i:0;s:1:\"*\";}}}s:28:\"\0*\0escapeWhenCastingToString\";b:0;}',1793798646);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_path` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seats` int NOT NULL,
  `ac` tinyint(1) NOT NULL DEFAULT '0',
  `price` decimal(10,2) NOT NULL DEFAULT '20.00',
  `display_in_home` tinyint(1) NOT NULL DEFAULT '0',
  `transmission` enum('automatic','manual') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'manual',
  `fuel_type` enum('diesel','gasoline','electric','hybrid') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'gasoline',
  `status` enum('available','rented','maintenance','out_of_service') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'available',
  `created_by` bigint unsigned DEFAULT NULL,
  `updated_by` bigint unsigned DEFAULT NULL,
  `marque_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cars_slug_unique` (`slug`),
  KEY `cars_created_by_foreign` (`created_by`),
  KEY `cars_updated_by_foreign` (`updated_by`),
  KEY `cars_marque_id_foreign` (`marque_id`),
  CONSTRAINT `cars_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `cars_marque_id_foreign` FOREIGN KEY (`marque_id`) REFERENCES `marque_cars` (`id`) ON UPDATE RESTRICT,
  CONSTRAINT `cars_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'DACIA LOGAN','dacia-dacia-logan','1763644517DACIALOGAN.jpg',5,1,25.00,0,'manual','diesel','available',NULL,6,1,'2025-11-20 13:15:17','2026-10-31 14:40:32'),(2,'DACIA LOGAN','dacia-dacia-logan-2','1763907049DACIALOGAN.jpg',5,1,25.00,1,'manual','diesel','available',3,6,1,'2025-11-23 14:10:49','2026-10-31 14:40:47'),(3,'DACIA LOGAN','dacia-dacia-logan-3','1763907341DACIALOGAN.png',5,1,25.00,0,'manual','diesel','available',3,6,1,'2025-11-23 14:15:41','2026-10-31 14:41:01'),(4,'DACIA LOGAN','dacia-dacia-logan-4','1763907521DACIALOGAN.png',5,1,25.00,1,'manual','diesel','available',3,6,1,'2025-11-23 14:18:41','2026-10-31 14:41:15'),(5,'CLIO 5','renault-clio-5','1763907738CLIO5.jpg',5,1,30.00,1,'manual','diesel','available',3,6,3,'2025-11-23 14:20:46','2026-09-02 10:45:02'),(6,'DACIA SANDERO','dacia-dacia-sandero','1763907863DACIASANDERO.png',5,1,25.00,1,'manual','diesel','available',3,6,1,'2025-11-23 14:24:23','2026-10-31 14:41:29'),(7,'DACIA SANDERO','dacia-dacia-sandero-2','1763908048DACIASANDERO.jpg',5,1,25.00,1,'manual','diesel','available',3,6,1,'2025-11-23 14:27:28','2026-10-31 14:41:45'),(8,'DACIA JOGGER','dacia-dacia-jogger','1763908504DACIAJOGGER.jpg',7,1,40.00,1,'manual','diesel','available',3,6,1,'2025-11-23 14:35:04','2026-10-24 12:34:15');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marque_cars`
--

DROP TABLE IF EXISTS `marque_cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marque_cars` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `nom_marque` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` bigint unsigned DEFAULT NULL,
  `updated_by` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `marque_cars_nom_marque_unique` (`nom_marque`),
  KEY `marque_cars_created_by_foreign` (`created_by`),
  KEY `marque_cars_updated_by_foreign` (`updated_by`),
  CONSTRAINT `marque_cars_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `marque_cars_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marque_cars`
--

LOCK TABLES `marque_cars` WRITE;
/*!40000 ALTER TABLE `marque_cars` DISABLE KEYS */;
INSERT INTO `marque_cars` VALUES (1,'Dacia',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(2,'Peugeot',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(3,'Renault',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(4,'Nissan',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(5,'Seat',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(6,'BMW',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(7,'Volkswagen',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(8,'Citroën',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(9,'Audi',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(10,'Toyota',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(11,'Hyundai',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(12,'Kia',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(13,'Ford',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(14,'Opel',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(15,'Fiat',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(16,'Suzuki',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(17,'Skoda',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(18,'Mercedes-Benz',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(19,'Mazda',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(20,'Mitsubishi',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(21,'Chevrolet',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(22,'Honda',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(23,'Jeep',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(24,'Land Rover',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(25,'Volvo',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18'),(26,'Porsche',NULL,NULL,'2025-11-17 20:28:18','2025-11-17 20:28:18');
/*!40000 ALTER TABLE `marque_cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2025_08_26_100418_add_two_factor_columns_to_users_table',1),(5,'2025_10_30_120942_create_marque_cars_table',1),(6,'2025_11_01_221830_create_cars_table',1),(7,'2025_11_01_233247_create_orders_table',1),(8,'2025_11_06_134552_create_reglements_table',1),(9,'2025_11_22_174002_add_fcm_token_to_users_table',2),(10,'2025_12_01_000000_add_slug_to_cars_table',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `car_id` bigint unsigned NOT NULL,
  `pickup_date` datetime NOT NULL,
  `drop_date` datetime NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `solde_du` decimal(10,2) NOT NULL,
  `daily_rate` decimal(10,2) NOT NULL,
  `status` enum('pending','confirmed','active','completed','cancelled') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `pickup_location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `drop_location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `updated_by` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_car_id_foreign` (`car_id`),
  KEY `orders_updated_by_foreign` (`updated_by`),
  CONSTRAINT `orders_car_id_foreign` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`) ON DELETE RESTRICT,
  CONSTRAINT `orders_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reglements`
--

DROP TABLE IF EXISTS `reglements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reglements` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint unsigned NOT NULL,
  `montant` decimal(10,2) NOT NULL,
  `mode_paiement` enum('cash','card','transfer','check') COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_paiement` date NOT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `created_by` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reglements_order_id_foreign` (`order_id`),
  KEY `reglements_created_by_foreign` (`created_by`),
  KEY `reglements_date_paiement_index` (`date_paiement`),
  KEY `reglements_mode_paiement_index` (`mode_paiement`),
  CONSTRAINT `reglements_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `reglements_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reglements`
--

LOCK TABLES `reglements` WRITE;
/*!40000 ALTER TABLE `reglements` DISABLE KEYS */;
/*!40000 ALTER TABLE `reglements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fcm_token` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'Ayoub Wazane','ayoubwazane306@gmail.com',NULL,'$2y$12$8OA3LgkTW5s0vWS5EFvyB.1GIOjold5HkjmEpmUem30p2VAezIGLi',NULL,NULL,NULL,'hQcxBagYj5FIaNTZVqpTVyRWtqmv2nVdUWdFM1DLb8msDTkABVWGQQK5E6xf','d6G38FnUUrbNZFyL6jp_q-:APA91bELHbZehY97p-2Wa5C8Z5AH6FsbBQlYRT_oDyRY3X-rQ6rfQ4w22R8Gr3MCKeaotaH0DusAnFy4AtoaXC4sWZ7cH7hOuIOEG75iuUwbRZ4FbU1wSe4','2025-11-22 12:33:11','2026-01-18 12:52:25'),(6,'ADMIN ISMAAIL','aguinanecars@gmail.com',NULL,'$2y$12$SJd3nNBGTwlh8lVNzO5H9ePMmrFYSCf5P2c9j.cYgTP14/C5GKzb2',NULL,NULL,NULL,'mBsGWR6jNhc52eNt0TVvjgJCVqbvgVYsInQmo2lWtPNnPkKAZerHoprriyEf',NULL,'2026-07-13 15:17:01','2026-07-13 15:17:01');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'aguinane_cars'
--

--
-- Dumping routines for database 'aguinane_cars'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-04 14:04:07
