-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2024 at 06:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employeems`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'fast123');

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `timein` time NOT NULL,
  `duration` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `date`, `timein`, `duration`, `emp_id`) VALUES
(1, '2024-12-01', '10:44:00', 3, 3),
(2, '2024-12-01', '12:46:00', 4, 6),
(3, '2024-12-09', '10:47:00', 1, 7),
(4, '2024-12-06', '09:00:00', 0, 9),
(5, '2024-12-06', '09:00:00', 0, 10),
(6, '2024-12-06', '09:00:00', 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `benefits`
--

CREATE TABLE `benefits` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `startdate` date NOT NULL,
  `duration` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `benefits`
--

INSERT INTO `benefits` (`id`, `type`, `startdate`, `duration`, `emp_id`) VALUES
(1, 'Diabled Pay', '2024-12-01', 10, 3),
(2, 'Maternity Aid', '2024-12-01', 20, 11);

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `location` varchar(200) NOT NULL,
  `numberofemployees` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `name`, `location`, `numberofemployees`) VALUES
(1, 'IT', 'Karachi', 10),
(2, 'Research', 'Karachi', 8),
(3, 'Finance', 'Karachi', 20),
(4, 'HR', 'Karachi', 10),
(5, 'Marketing', 'Lahore', 25),
(6, 'Customer Support', 'Hyderabad', 10);

-- --------------------------------------------------------

--
-- Table structure for table `disciplinaryaction`
--

CREATE TABLE `disciplinaryaction` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `dateofaction` date NOT NULL,
  `reason` varchar(255) NOT NULL,
  `emp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `disciplinaryaction`
--

INSERT INTO `disciplinaryaction` (`id`, `type`, `dateofaction`, `reason`, `emp_id`) VALUES
(10, 'Financial Records Leak', '2024-12-05', 'The employee leaked the company\'s important documents regarding finance and accounts', 8);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `salary` int(11) NOT NULL,
  `address` varchar(80) NOT NULL,
  `image` varchar(80) NOT NULL,
  `department_id` int(11) NOT NULL,
  `position_id` int(11) NOT NULL,
  `meeting_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `email`, `password`, `salary`, `address`, `image`, `department_id`, `position_id`, `meeting_id`) VALUES
(1, 'Alice', 'Alice@gmail.com', '$2b$10$R06xm3qV8a5OljdkgKSET.iI1sdHogdYbY4CFPL3pRc', 49000, 'Seesame Street', 'image_1733463271648.jpeg', 2, 3, 4),
(3, 'Bob', 'Bob@gmail.com', '$2b$10$E/SDbepilEn3/TttmC7mCukirDPFNAJ99BHYukR/C2i', 45000, 'Walter Street', 'image_1733463326931.jpeg', 5, 1, 2),
(4, 'Charlie', 'charlie@gmail.com', '$2b$10$a0xq2Jy3SLRQVRvhmaUIAe15zF./na8IrdY6hLnsBdL', 36000, 'NearValley Street ', 'image_1733463382050.jpeg', 1, 5, 4),
(6, 'David', 'david@gmail.com', '$2b$10$ugcW6uKjGdrcNtoro5g9G.wd/BMuAU2GKwQqcxue0Ir', 47000, 'RiverValley Street', 'image_1733463436798.jpeg', 4, 1, 3),
(7, 'Eva', 'eva@gmail.com', '$2b$10$mLat57NF3wk.pDBKRyGH1ONs270mQtWiBwOqzJIiA4O', 75000, 'Rosemarry Street', 'image_1733463484444.jpeg', 6, 3, 1),
(8, 'Taseem', 'dummy@gmail.com', '$2b$10$khAb09jZiWjLiBFX0XLRf.JJKtp9o9waspLvMk5hy9e', 25000, 'Dollar Market', 'image_1733466496860.jpeg', 3, 5, 4),
(9, 'Rania', 'rania@gmail.com', '$2b$10$chhFPPzaSMcfz6gZ23wpO.43mvY9FGdmIFN4B.IgbS/', 75000, 'Fast Bazaar', 'image_1733467476047.jpeg', 5, 1, 5),
(10, 'Shayan', 'shayan@gmail.com', '$2b$10$bwtfdKWETpji19HkuFAzf.S9Pm5TtJMbD8DzPnfcEQh', 80000, 'Burj Khalifa', 'image_1733468186416.jpeg', 3, 1, 3),
(11, 'Marium', 'marium@gmail.com', '$2b$10$Aiq64fvV3ANRjXc2CdNuROdFoNqlqxci089iIuB5vNj', 55000, 'Cement Industry', 'image_1733468651794.jpeg', 3, 3, 3);

--
-- Triggers `employee`
--
DELIMITER $$
CREATE TRIGGER `enforce_salary_constraints` BEFORE UPDATE ON `employee` FOR EACH ROW BEGIN
    DECLARE min_salary INT;
    DECLARE max_salary INT;

    -- Get salary limits for the employee's position
    SELECT minsalary, maxsalary INTO min_salary, max_salary
    FROM empposition
    WHERE id = NEW.position_id;

    -- Check if the new salary is within the allowed range
    IF NEW.salary < min_salary OR NEW.salary > max_salary THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Salary exceeds position limits';
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `enforce_salary_constraints_insert` BEFORE INSERT ON `employee` FOR EACH ROW BEGIN
    DECLARE min_salary INT;
    DECLARE max_salary INT;

    -- Ensure the position_id exists in the empposition table
    IF NOT EXISTS (SELECT 1 FROM empposition WHERE id = NEW.position_id) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Position ID does not exist';
    END IF;

    -- Get salary limits for the employee's position
    SELECT minsalary, maxsalary INTO min_salary, max_salary
    FROM empposition
    WHERE id = NEW.position_id
    LIMIT 1; -- Ensure exactly one row is returned

    -- Check if the new salary is within the allowed range
    IF NEW.salary < min_salary OR NEW.salary > max_salary THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Salary exceeds position limits';
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `insert_initial_attendance` AFTER INSERT ON `employee` FOR EACH ROW BEGIN
    INSERT INTO attendance (date, timein, duration, emp_id)
    VALUES (CURDATE(), '09:00:00', 0, NEW.id);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `insert_salary_into_payroll` AFTER INSERT ON `employee` FOR EACH ROW BEGIN
    INSERT INTO payroll (basicsalary, bonus, deduction, netsalary, paydate, payperiod, emp_id)
    VALUES (NEW.salary, 0, 0, NEW.salary, CURDATE(), 7, NEW.id);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_salary_in_payroll` AFTER UPDATE ON `employee` FOR EACH ROW BEGIN
    IF OLD.salary <> NEW.salary THEN
        UPDATE payroll
        SET basicsalary = NEW.salary
        WHERE emp_id = NEW.id;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `empposition`
--

CREATE TABLE `empposition` (
  `id` int(11) NOT NULL,
  `postitle` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `minsalary` int(11) NOT NULL,
  `maxsalary` int(11) NOT NULL,
  `requiredskills` varchar(255) NOT NULL,
  `department_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `empposition`
--

INSERT INTO `empposition` (`id`, `postitle`, `description`, `minsalary`, `maxsalary`, `requiredskills`, `department_id`) VALUES
(1, 'Manager', 'Manages the team', 50000, 80000, 'Leadership, Communication', 1),
(2, 'Developer', 'Develops software', 40000, 70000, 'JavaScript, Python', 2),
(3, 'Analyst', 'Analyzes data', 45000, 75000, 'Excel, SQL', 3),
(4, 'Marketer', 'Creates marketing campaigns', 40000, 60000, 'SEO, Content Writing', 4),
(5, 'Operator', 'Manages operations', 30000, 55000, 'Problem-solving, Logistics', 5);

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  `reason` varchar(255) NOT NULL,
  `emp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`id`, `type`, `startdate`, `enddate`, `reason`, `emp_id`) VALUES
(1, 'Medical', '2024-12-01', '2024-12-10', 'Fractured Leg', 4);

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `starttime` time NOT NULL,
  `duration` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `agenda` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `title`, `description`, `date`, `starttime`, `duration`, `location`, `agenda`) VALUES
(1, 'Team Meeting', 'Discuss Project Updates', '2024-12-12', '12:30:00', 3, 'Conference Room A', 'Project Progress'),
(2, 'Client Meeting', 'Present Project Proposal', '2024-12-08', '13:30:00', 3, 'Conference Room B', 'Proposal Review'),
(3, 'HR Meeting', 'Policy discussion', '2024-03-15', '14:00:00', 1, 'Room 101', 'Policy Updates'),
(4, 'Training Session', 'Skill enhancement', '2024-04-20', '09:00:00', 4, 'Auditorium', 'Technical Training'),
(5, 'Budget Meeting', 'Discuss department budgets', '2024-05-25', '13:00:00', 2, 'Room 202', 'Budget Allocation');

-- --------------------------------------------------------

--
-- Table structure for table `payroll`
--

CREATE TABLE `payroll` (
  `id` int(11) NOT NULL,
  `basicsalary` int(11) NOT NULL,
  `bonus` int(11) NOT NULL,
  `deduction` int(11) NOT NULL,
  `netsalary` int(11) NOT NULL,
  `paydate` date NOT NULL,
  `payperiod` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payroll`
--

INSERT INTO `payroll` (`id`, `basicsalary`, `bonus`, `deduction`, `netsalary`, `paydate`, `payperiod`, `emp_id`) VALUES
(2, 49000, 5000, 3000, 52000, '2024-12-05', 7, 1),
(3, 40000, 8000, 3000, 45000, '2024-12-05', 7, 3),
(4, 36000, 2000, 4000, 60000, '2024-12-05', 7, 4),
(5, 50000, 0, 3000, 47000, '2024-12-05', 7, 6),
(6, 80000, 1000, 6000, 75000, '2024-12-05', 7, 7),
(7, 80000, 0, 0, 80000, '2024-12-05', 7, 10),
(8, 60000, 50, 50, 60000, '2024-12-02', 7, 11);

--
-- Triggers `payroll`
--
DELIMITER $$
CREATE TRIGGER `enforce_salary_in_payroll_update` BEFORE UPDATE ON `payroll` FOR EACH ROW BEGIN
    DECLARE min_salary INT;
    DECLARE max_salary INT;

    -- Get salary limits for the employee's position
    SELECT minsalary, maxsalary INTO min_salary, max_salary
    FROM empposition
    WHERE id = (SELECT position_id FROM employee WHERE id = NEW.emp_id);

    -- Check if the new salary in the payroll is within the allowed range
    IF NEW.basicsalary < min_salary OR NEW.basicsalary > max_salary THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Salary exceeds position salary range';
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_netsalary_in_payroll` BEFORE UPDATE ON `payroll` FOR EACH ROW BEGIN
    -- Calculate the new net salary
    SET NEW.netsalary = NEW.basicsalary + NEW.bonus - NEW.deduction;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `performance`
--

CREATE TABLE `performance` (
  `id` int(11) NOT NULL,
  `reviewdate` date NOT NULL,
  `ratings` int(11) NOT NULL,
  `feedback` varchar(255) NOT NULL,
  `goals` varchar(255) NOT NULL,
  `emp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `performance`
--

INSERT INTO `performance` (`id`, `reviewdate`, `ratings`, `feedback`, `goals`, `emp_id`) VALUES
(1, '2024-12-10', 8, 'Well Defined Skillset', 'Improve Punctuality', 1);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `p_name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `p_name`, `description`, `startdate`, `enddate`) VALUES
(1, 'Project Alpha', 'AI Based System Development', '2024-11-06', '2024-12-06'),
(2, 'Project Beta', 'Website ReDesign', '2024-12-12', '2024-12-31');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `duedate` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `project_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `name`, `description`, `duedate`, `status`, `project_id`, `employee_id`) VALUES
(1, 'System Requirements Analysis', 'Analyse the System requirements', '2024-12-20', 'ongoing', 1, 3),
(2, 'Design Ui', 'Develop Backend APIs', '2024-12-02', 'ongoing', 2, 6),
(3, 'Data Collection', 'Gather Market Data', '2024-11-07', 'completed', 2, 7);

-- --------------------------------------------------------

--
-- Table structure for table `training`
--

CREATE TABLE `training` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `startdate` date NOT NULL,
  `duration` int(11) NOT NULL,
  `emp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `training`
--

INSERT INTO `training` (`id`, `name`, `description`, `startdate`, `duration`, `emp_id`) VALUES
(1, 'AI Workshop', 'Fundamentals of AI', '2024-12-10', 3, 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `benefits`
--
ALTER TABLE `benefits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disciplinaryaction`
--
ALTER TABLE `disciplinaryaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`),
  ADD KEY `position_id` (`position_id`),
  ADD KEY `meeting_id` (`meeting_id`);

--
-- Indexes for table `empposition`
--
ALTER TABLE `empposition`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payroll`
--
ALTER TABLE `payroll`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `performance`
--
ALTER TABLE `performance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `project_id` (`project_id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- Indexes for table `training`
--
ALTER TABLE `training`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `benefits`
--
ALTER TABLE `benefits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `disciplinaryaction`
--
ALTER TABLE `disciplinaryaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `empposition`
--
ALTER TABLE `empposition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `payroll`
--
ALTER TABLE `payroll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `performance`
--
ALTER TABLE `performance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `training`
--
ALTER TABLE `training`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendance`
--
ALTER TABLE `attendance`
  ADD CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `benefits`
--
ALTER TABLE `benefits`
  ADD CONSTRAINT `benefits_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `disciplinaryaction`
--
ALTER TABLE `disciplinaryaction`
  ADD CONSTRAINT `disciplinaryaction_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_3` FOREIGN KEY (`meeting_id`) REFERENCES `meetings` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `employee_ibfk_4` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `employee_ibfk_5` FOREIGN KEY (`position_id`) REFERENCES `empposition` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `empposition`
--
ALTER TABLE `empposition`
  ADD CONSTRAINT `empposition_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `leaves`
--
ALTER TABLE `leaves`
  ADD CONSTRAINT `leaves_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payroll`
--
ALTER TABLE `payroll`
  ADD CONSTRAINT `payroll_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `performance`
--
ALTER TABLE `performance`
  ADD CONSTRAINT `performance_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `task_ibfk_2` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `training`
--
ALTER TABLE `training`
  ADD CONSTRAINT `training_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
