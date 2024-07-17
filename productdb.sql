-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2024 at 01:28 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `productdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `created_at`) VALUES
(9, 'Laptop Pro X', '2024-07-18 04:30:00'),
(10, 'Smartphone Plus', '2024-07-18 04:45:00'),
(11, 'Tablet Pro', '2024-07-18 05:00:00'),
(12, 'Desktop Ultra', '2024-07-18 05:15:00'),
(13, 'Smartwatch Series 5', '2024-07-18 05:30:00'),
(14, 'Gaming PC Ultimate', '2024-07-18 05:45:00'),
(15, 'Wireless Headphones', '2024-07-18 06:00:00'),
(16, 'Portable SSD Drive', '2024-07-18 06:15:00'),
(17, '4K Monitor Pro', '2024-07-18 06:30:00'),
(18, 'Robot Vacuum Cleaner', '2024-07-18 06:45:00');

-- --------------------------------------------------------

--
-- Table structure for table `product_info`
--

CREATE TABLE `product_info` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_info`
--

INSERT INTO `product_info` (`id`, `product_id`, `description`, `price`, `category`) VALUES
(8, 9, 'High-performance laptop with advanced features.', 1200.00, 'Laptop'),
(9, 10, 'Top-tier smartphone with cutting-edge technology.', 999.99, 'Smartphone'),
(10, 11, 'Professional tablet for business and creative use.', 899.00, 'Tablet'),
(11, 12, 'Powerful desktop computer for gaming and professional use.', 1999.99, 'Desktop PC'),
(12, 13, 'Latest smartwatch with health tracking and communication features.', 299.00, 'Smartwatch'),
(13, 14, 'Ultimate gaming PC with high-end graphics and processing power.', 2499.99, 'Gaming PC'),
(14, 15, 'Wireless headphones with noise-canceling technology.', 149.99, 'Headphones'),
(15, 16, 'Portable SSD drive for fast and secure data storage.', 199.00, 'Storage'),
(16, 17, '4K monitor for professional-grade visual clarity.', 699.00, 'Monitor'),
(17, 18, 'Robot vacuum cleaner with AI for automated cleaning.', 399.00, 'Home Appliances');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_info`
--
ALTER TABLE `product_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `product_info`
--
ALTER TABLE `product_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_info`
--
ALTER TABLE `product_info`
  ADD CONSTRAINT `product_info_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
