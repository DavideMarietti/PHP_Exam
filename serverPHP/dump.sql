SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE `users`
(
    `id`         int(11)                                NOT NULL,
    `username`   varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `password`   varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `nome`       varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `cognome`    varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `sesso`      varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `eta`        decimal(10, 2)                         NOT NULL,
    `image`      varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `iscrizione` date                                   NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;


INSERT INTO `users` (`id`, `username`, `password`, `nome`, `cognome`, `sesso`, `eta`, `image`, `iscrizione`)
VALUES (1, 'dave.marietti', 'pollo123', 'davide', 'marietti', 'him/him', '29', '/assets/images/user.png', '2023-10-16');


ALTER TABLE `users`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 1;