-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Oct 13, 2022 at 08:44 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_the_disease`
--

CREATE TABLE `about_the_disease` (
  `R_number` int(10) NOT NULL,
  `Disease_id` int(10) NOT NULL,
  `Symptoms` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `Treatement_id` int(10) DEFAULT NULL,
  `Doctor` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `Doctor_id` int(10) NOT NULL,
  `First_name` varchar(10) NOT NULL,
  `Last_name` varchar(10) NOT NULL,
  `Telephone_number` int(10) NOT NULL,
  `Work_time` datetime NOT NULL,
  `Work_hospital` varchar(10) NOT NULL,
  `Special` varchar(20) NOT NULL,
  `Email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_recommend`
--

CREATE TABLE `doctor_recommend` (
  `E_number` int(10) NOT NULL,
  `No_of_Patient` int(10) NOT NULL,
  `date` date NOT NULL,
  `Recommend` text NOT NULL,
  `Doctor` int(5) NOT NULL,
  `disease_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_risevetion`
--

CREATE TABLE `doctor_risevetion` (
  `Student_id` int(10) NOT NULL,
  `Date` date NOT NULL,
  `Number_of_meet` bigint(255) NOT NULL,
  `Time` date NOT NULL,
  `Doctor` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `drug_pricing`
--

CREATE TABLE `drug_pricing` (
  `Drugs_id` int(10) NOT NULL,
  `Drugs_name` varchar(20) NOT NULL,
  `cost_0PU` int(100) NOT NULL,
  `ex_date` date NOT NULL,
  `No_patient` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `enter_disease`
--

CREATE TABLE `enter_disease` (
  `number` int(10) NOT NULL,
  `id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `medical_treatement`
--

CREATE TABLE `medical_treatement` (
  `Treatement_id` int(10) NOT NULL,
  `Disease_symptoms` varchar(30) NOT NULL,
  `First_aid` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `privet_preson_history`
--

CREATE TABLE `privet_preson_history` (
  `Allergy_medication` text NOT NULL,
  `Disease_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `R_number` int(10) NOT NULL,
  `First_name` varchar(10) NOT NULL,
  `Last_name` varchar(10) NOT NULL,
  `Age` int(10) NOT NULL,
  `Addres` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `Hostel_or_not` varchar(3) NOT NULL,
  `Fucalty` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`R_number`, `First_name`, `Last_name`, `Age`, `Addres`, `email`, `Hostel_or_not`, `Fucalty`) VALUES
(1, 'hh', 'jj', 25, 'kkjj', 'kjjjk', 'y', ',m,mm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_the_disease`
--
ALTER TABLE `about_the_disease`
  ADD PRIMARY KEY (`Disease_id`),
  ADD KEY `Treatement_id` (`Treatement_id`),
  ADD KEY `Doctor` (`Doctor`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`Doctor_id`);

--
-- Indexes for table `doctor_recommend`
--
ALTER TABLE `doctor_recommend`
  ADD PRIMARY KEY (`No_of_Patient`),
  ADD KEY `Doctor` (`Doctor`),
  ADD KEY `disease_id` (`disease_id`);

--
-- Indexes for table `doctor_risevetion`
--
ALTER TABLE `doctor_risevetion`
  ADD PRIMARY KEY (`Student_id`,`Date`),
  ADD KEY `Doctor` (`Doctor`);

--
-- Indexes for table `drug_pricing`
--
ALTER TABLE `drug_pricing`
  ADD PRIMARY KEY (`Drugs_id`),
  ADD KEY `No_patient` (`No_patient`);

--
-- Indexes for table `enter_disease`
--
ALTER TABLE `enter_disease`
  ADD KEY `number` (`number`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `medical_treatement`
--
ALTER TABLE `medical_treatement`
  ADD PRIMARY KEY (`Treatement_id`);

--
-- Indexes for table `privet_preson_history`
--
ALTER TABLE `privet_preson_history`
  ADD PRIMARY KEY (`Disease_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`R_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_the_disease`
--
ALTER TABLE `about_the_disease`
  MODIFY `Disease_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `Doctor_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_recommend`
--
ALTER TABLE `doctor_recommend`
  MODIFY `No_of_Patient` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medical_treatement`
--
ALTER TABLE `medical_treatement`
  MODIFY `Treatement_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `R_number` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `about_the_disease`
--
ALTER TABLE `about_the_disease`
  ADD CONSTRAINT `about_the_disease_ibfk_1` FOREIGN KEY (`Treatement_id`) REFERENCES `medical_treatement` (`Treatement_id`),
  ADD CONSTRAINT `about_the_disease_ibfk_2` FOREIGN KEY (`Doctor`) REFERENCES `doctor` (`Doctor_id`);

--
-- Constraints for table `doctor_recommend`
--
ALTER TABLE `doctor_recommend`
  ADD CONSTRAINT `doctor_recommend_ibfk_1` FOREIGN KEY (`Doctor`) REFERENCES `doctor` (`Doctor_id`),
  ADD CONSTRAINT `doctor_recommend_ibfk_2` FOREIGN KEY (`disease_id`) REFERENCES `privet_preson_history` (`Disease_id`);

--
-- Constraints for table `doctor_risevetion`
--
ALTER TABLE `doctor_risevetion`
  ADD CONSTRAINT `doctor_risevetion_ibfk_1` FOREIGN KEY (`Doctor`) REFERENCES `doctor` (`Doctor_id`);

--
-- Constraints for table `drug_pricing`
--
ALTER TABLE `drug_pricing`
  ADD CONSTRAINT `drug_pricing_ibfk_1` FOREIGN KEY (`No_patient`) REFERENCES `doctor_recommend` (`No_of_Patient`);

--
-- Constraints for table `enter_disease`
--
ALTER TABLE `enter_disease`
  ADD CONSTRAINT `enter_disease_ibfk_1` FOREIGN KEY (`number`) REFERENCES `student` (`R_number`),
  ADD CONSTRAINT `enter_disease_ibfk_2` FOREIGN KEY (`id`) REFERENCES `about_the_disease` (`Disease_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
