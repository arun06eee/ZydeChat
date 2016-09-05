-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2016 at 12:53 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `zyde_messenger`
--

-- --------------------------------------------------------

--
-- Table structure for table `zydechat_customer`
--

CREATE TABLE IF NOT EXISTS `zydechat_customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(50) DEFAULT NULL,
  `customer_location` varchar(255) NOT NULL,
  `customer_contact1` varchar(25) NOT NULL,
  `customer_contact2` varchar(25) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `customer_alt_email` int(100) NOT NULL,
  `customer_organization_id` varchar(60) NOT NULL,
  `useragent_id` int(10) NOT NULL,
  `organization_id` int(10) NOT NULL,
  `updated_datetime` timestamp NOT NULL,
  PRIMARY KEY (`customer_id`),
  KEY `organization_id` (`organization_id`),
  KEY `useragent_id` (`useragent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `zydechat_login`
--

CREATE TABLE IF NOT EXISTS `zydechat_login` (
  `login_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL COMMENT '(Super Admin, Organization, User Agent)',
  `organization_id` int(11) DEFAULT NULL,
  `current_status` varchar(10) DEFAULT NULL COMMENT '(Active, Inactive)',
  `account_status` varchar(10) DEFAULT NULL COMMENT '(Active, Inactive)',
  `updated_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`login_id`),
  KEY `organization_id` (`organization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `zydechat_messenger`
--

CREATE TABLE IF NOT EXISTS `zydechat_messenger` (
  `messenger_id` int(11) NOT NULL AUTO_INCREMENT,
  `useragent_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `messenger_content` text,
  `updated_datetime` timestamp NOT NULL,
  PRIMARY KEY (`messenger_id`),
  KEY `useragent_id` (`useragent_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `zydechat_organization`
--

CREATE TABLE IF NOT EXISTS `zydechat_organization` (
  `organization_id` int(11) NOT NULL AUTO_INCREMENT,
  `organization_name` varchar(50) DEFAULT NULL,
  `organization_address` varchar(255) NOT NULL,
  `organization_location` varchar(60) NOT NULL,
  `organization_zipcode` varchar(15) NOT NULL,
  `organization_contact1` varchar(25) NOT NULL,
  `organization_contact2` varchar(25) NOT NULL,
  `organization_email` varchar(100) DEFAULT NULL,
  `organization_alt_email` varchar(100) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL COMMENT 'super admin, organization',
  `updated_datetime` timestamp NOT NULL,
  PRIMARY KEY (`organization_id`),
  UNIQUE KEY `organization_email` (`organization_email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `zydechat_useragent`
--

CREATE TABLE IF NOT EXISTS `zydechat_useragent` (
  `useragent_id` int(11) NOT NULL AUTO_INCREMENT,
  `useragent_name` varchar(60) DEFAULT NULL,
  `useragent_organization_id` varchar(60) NOT NULL,
  `organization_id` int(10) DEFAULT NULL,
  `created_by` varchar(60) DEFAULT NULL,
  `updated_dateTime` timestamp NOT NULL,
  PRIMARY KEY (`useragent_id`),
  KEY `organization_id` (`organization_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `zydechat_useragent_log`
--

CREATE TABLE IF NOT EXISTS `zydechat_useragent_log` (
  `agent_log_id` int(11) NOT NULL AUTO_INCREMENT,
  `useragent_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `start_time` timestamp NOT NULL,
  `end_time` timestamp NOT NULL,
  `agent_rating` varchar(10) NOT NULL,
  `customer_feedback` varchar(255) NOT NULL,
  `updated_datetime` timestamp NOT NULL,
  PRIMARY KEY (`agent_log_id`),
  KEY `useragent_id` (`useragent_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `zydechat_useragent_status`
--

CREATE TABLE IF NOT EXISTS `zydechat_useragent_status` (
  `status_id` int(11) NOT NULL AUTO_INCREMENT,
  `useragent_id` int(11) DEFAULT NULL,
  `chat_status` varchar(8) DEFAULT NULL COMMENT '(true, false)',
  `updated_datetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`status_id`),
  UNIQUE KEY `useragent_id` (`useragent_id`),
  KEY `useragent_id_2` (`useragent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `zydechat_customer`
--
ALTER TABLE `zydechat_customer`
  ADD CONSTRAINT `organization` FOREIGN KEY (`organization_id`) REFERENCES `zydechat_organization` (`organization_id`),
  ADD CONSTRAINT `useragent` FOREIGN KEY (`useragent_id`) REFERENCES `zydechat_useragent` (`useragent_id`);

--
-- Constraints for table `zydechat_login`
--
ALTER TABLE `zydechat_login`
  ADD CONSTRAINT `login_organization_id` FOREIGN KEY (`organization_id`) REFERENCES `zydechat_organization` (`organization_id`);

--
-- Constraints for table `zydechat_messenger`
--
ALTER TABLE `zydechat_messenger`
  ADD CONSTRAINT `customer_useragent` FOREIGN KEY (`useragent_id`) REFERENCES `zydechat_useragent` (`useragent_id`),
  ADD CONSTRAINT `customer` FOREIGN KEY (`customer_id`) REFERENCES `zydechat_customer` (`customer_id`);

--
-- Constraints for table `zydechat_useragent`
--
ALTER TABLE `zydechat_useragent`
  ADD CONSTRAINT `useragent_id_organization_id` FOREIGN KEY (`organization_id`) REFERENCES `zydechat_organization` (`organization_id`);

--
-- Constraints for table `zydechat_useragent_log`
--
ALTER TABLE `zydechat_useragent_log`
  ADD CONSTRAINT `useragent_log_customer` FOREIGN KEY (`customer_id`) REFERENCES `zydechat_customer` (`customer_id`),
  ADD CONSTRAINT `useragent_log_useragent` FOREIGN KEY (`useragent_id`) REFERENCES `zydechat_useragent` (`useragent_id`);

--
-- Constraints for table `zydechat_useragent_status`
--
ALTER TABLE `zydechat_useragent_status`
  ADD CONSTRAINT `useragent_status_useragent` FOREIGN KEY (`useragent_id`) REFERENCES `zydechat_useragent` (`useragent_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
