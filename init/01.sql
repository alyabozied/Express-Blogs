-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: blogs
-- ------------------------------------------------------
-- Server version	9.1.0

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
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_fc46ede0f7ab797b7ffacb5c08d` (`userId`),
  CONSTRAINT `FK_fc46ede0f7ab797b7ffacb5c08d` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,'The Rise of AI in Healthcare','Artificial intelligence (AI) is rapidly transforming the healthcare landscape. From diagnosing diseases to developing new treatments, AI is revolutionizing how we approach patient care. AI algorithms can analyze vast amounts of medical data, such as patient records, medical images, and genetic information, to identify patterns and make accurate predictions. This can lead to earlier and more accurate diagnoses, personalized treatment plans, and improved patient outcomes. For example, AI-powered systems can assist radiologists in detecting anomalies in medical images, such as tumors or fractures, leading to faster and more accurate diagnoses. Furthermore, AI is playing a crucial role in drug discovery and development by accelerating the process of identifying and testing potential new medications.\r\nAI can also personalize medicine by tailoring treatment plans to individual patients\' unique characteristics and needs. By analyzing a patient\'s genetic makeup, lifestyle, and medical history, AI algorithms can predict their response to different treatments and identify the most effective and personalized care plan. This can lead to improved treatment outcomes and reduce the risk of adverse side effects. However, the integration of AI in healthcare also presents ethical considerations. Issues such as data privacy, algorithmic bias, and the potential for job displacement need to be carefully addressed to ensure that AI is used responsibly and ethically in healthcare.111','2024-12-27 22:34:49.213434','2024-12-28 19:42:02.000000',1),(2,'Sustainable Living: Tips for a Greener Lifestyle','In today\'s world, it is more important than ever to adopt sustainable living practices. By making conscious choices in our daily lives, we can reduce our environmental impact and contribute to a healthier planet. One of the most significant steps towards sustainable living is reducing our carbon footprint. This can be achieved by minimizing energy consumption at home, such as using energy-efficient appliances, switching to renewable energy sources, and reducing reliance on fossil fuels. Additionally, we can embrace sustainable transportation options like walking, cycling, and public transport.  \nConserving water is another crucial aspect of sustainable living. We can reduce water consumption by fixing leaks, installing low-flow fixtures, and watering plants efficiently. Minimizing waste is also essential. This involves reducing, reusing, and recycling whenever possible. We can also opt for reusable products like bags, bottles, and containers, and choose products with minimal packaging. Supporting eco-friendly businesses and choosing products that are sustainably produced and ethically sourced is another important step towards a greener lifestyle. By making conscious choices and embracing a more sustainable way of life, we can all play a part in protecting our planet for future generations. ','2024-12-27 23:07:53.145671','2024-12-27 23:07:53.145671',1),(3,'The Impact of Social Media on Mental Health','Social media platforms have become an integral part of our lives, connecting us with friends and family, providing access to information, and offering entertainment. However, the constant exposure to curated and often idealized versions of reality on social media can have significant impacts on our mental health. The constant comparison of our own lives to the seemingly perfect lives portrayed on social media can lead to feelings of inadequacy, low self-esteem, and social anxiety. This phenomenon, often referred to as \"fear of missing out\" (FOMO), can have a detrimental effect on our overall well-being.\nFurthermore, the constant stream of information and notifications from social media platforms can be overwhelming and contribute to feelings of stress and anxiety. Cyberbullying and online harassment are also serious concerns that can have a significant negative impact on the mental health of individuals. However, social media can also have positive effects on mental health. It can provide a platform for connecting with others who share similar interests and experiences, offer support during challenging times, and increase feelings of social connectedness. ','2024-12-27 23:08:42.894704','2024-12-27 23:09:46.000000',1),(4,'The Future of Work: Adapting to the Gig Economy','The rise of the gig economy has significantly altered the landscape of work. With the increasing availability of freelance platforms and remote work opportunities, many individuals are choosing to work independently rather than for traditional employers. The gig economy offers numerous benefits, such as flexibility and autonomy in work arrangements. However, it also presents challenges such as job insecurity, fluctuating income, and the lack of traditional employee benefits like healthcare and retirement plans. \nTo thrive in the gig economy, individuals need to develop a diverse set of skills, including strong communication, problem-solving, and project management abilities. Building a strong online presence and developing a personal brand are also crucial for success in the gig economy. Furthermore, individuals need to be proactive in managing their finances and ensuring financial stability in the absence of a stable paycheck. As the gig economy continues to evolve, it is essential to adapt and develop strategies to navigate its challenges and capitalize on its opportunities','2024-12-27 23:10:51.577576','2024-12-27 23:10:51.577576',1),(5,'Space Exploration: The Next Frontier','Space exploration has captivated humanity for centuries, pushing the boundaries of human knowledge and technological innovation. Recent advancements in space technology have opened up new possibilities for space travel and exploration. Private companies are now leading the charge in space exploration, developing reusable rockets and innovative spacecraft, which has significantly reduced the cost of space travel. This has paved the way for space tourism and the possibility of establishing permanent human settlements on other planets.\nThe search for extraterrestrial life is another key area of focus in space exploration. Scientists are using powerful telescopes and sophisticated instruments to search for signs of life on other planets and moons. The potential discovery of extraterrestrial life would have profound implications for our understanding of the universe and our place within it. While the challenges of space exploration are numerous, including the risks to human life and the environmental impact, the potential rewards are immense. Continued investment in space exploration will undoubtedly lead to breakthroughs in science and technology that will benefit humanity for generations to come.   ','2024-12-27 23:11:22.896675','2024-12-27 23:11:22.896675',1),(6,'The Importance of Mindfulness in Everyday Life','Mindfulness is a mental state achieved by focusing one\'s awareness on the present moment, while calmly acknowledging and accepting one\'s feelings, thoughts, and bodily sensations, used as a therapeutic technique. In today\'s fast-paced world, it is easy to get caught up in the constant demands of daily life and lose sight of the present moment. This can lead to feelings of stress, anxiety, and overwhelm.\nMindfulness practices, such as meditation, deep breathing exercises, and mindful movement, can help us to become more aware of our thoughts and feelings, and to manage stress more effectively. By cultivating mindfulness, we can learn to appreciate the present moment, reduce anxiety, and improve our overall well-being. Mindfulness can also enhance our focus and concentration, enabling us to be more productive and effective in our work and personal lives.\nIncorporating mindfulness into our daily routines can be as simple as taking a few minutes each day to focus on our breath, practicing mindful listening, or simply enjoying the present moment without distractions. By making a conscious effort to be more mindful, we can cultivate a greater sense of peace and well-being in our lives.','2024-12-27 23:11:58.672492','2024-12-27 23:11:58.672492',1);
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1735338518876,'CreateTables1735338518876');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'ali','abozied','2024-12-27 22:32:39.664063','2024-12-27 22:32:39.664063','alyabozied@gmail.com','$2a$12$qfoy4H19DkAH2PEzwPXW6.F5Q5GHOwgRmYaRxZmfEkZtyRORgNWpm'),(2,'ziad','ahmed','2024-12-28 14:33:17.686900','2024-12-28 14:33:17.686900','kambora@gmail.com','$2a$12$4ahgbuC.NoXA2f6mV.e1Kenrz9DSZA2k6D7nYV9EsLazIhFYVG3x2'),(3,'test','test','2024-12-28 21:23:55.581584','2024-12-28 21:23:55.581584','test@test.com','$2a$12$kkjYOzKKK9536SJb/FchWeO0553xDmSZ9XcXa.1sdY0D8xeApxfVm');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-28 23:24:04
