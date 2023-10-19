SET
SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET
time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


/*________ Users Table ________*/


CREATE TABLE `users`
(
    `id`         int(11) NOT NULL,
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
VALUES (1, 'Dave', 'pollo123', 'Davide', 'Marietti', 'him/him', '29', '/assets/images/user.png', '2023-10-16'),
       (2, 'Andre', 'test', 'Andrea', 'Balbo Mossetto', 'him/him', '28', '/assets/images/user2.png', '2020-09-23'),
       (3, 'Lollo', 'test', 'Lorenzo', 'Gianotti', 'him/him', '27', '/assets/images/user3.png', '2021-03-25'),
       (4, 'Ali', 'test', 'Alice', 'Pregnolato', 'her/her', '26', '/assets/images/user1.png', '2022-07-06'),
       (5, 'Lauretta', 'test', 'Laura', 'Rossi', 'her/her', '35', '/assets/images/user4.png', '2020-09-15'),
       (6, 'Ale', 'test', 'Alessia', 'Brambilla', 'her/her', '45', '/assets/images/user5.png', '2020-08-17');

ALTER TABLE `users`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
    MODIFY `id` int (11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 1;


/*________ Posts Table ________*/

CREATE TABLE `posts`
(
    `id`      int(11)                                NOT NULL,
    `titolo`  varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `testo`   text        COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `autore`  varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `like`    varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `dislike` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `creato`  date                                   NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;


INSERT INTO `posts` (`id`, `titolo`, `testo`, `autore`, `like`, `dislike`, `creato`)
VALUES (1,
        'Fondo pensione o Tfr in azienda?',
        'Buongiorno a tutti.\n\nHo cambiato lavoro a dicembre e devo pensare alla destinazione del Tfr.\n\nIn azienda si usa Fondapi ma potrei anche optare per Cometa.\n\nMi sorge però il dubbio che almeno quest anno non convenga lasciare il tutto in azienda visto che in teoria dovrei avere un rendimento del 1,5% + 0,75*(11,6) (tasso inflazione dicembre 2022).\n\nTotale 10,2%.\n\nCifra che non raggiungerei sui fondi nemmeno con piani azionari.\n\nMi perderei il contributo aggiuntivo del datore ma rimarrebbe marginale.\n\nInoltre con la prospettiva di comprare casa tra 1-2 anni la somma sarebbe più libera in azienda piuttosto che in un fondo che la terrebbe bloccata per i primi 8 anni.\n\ndite che potrebbe essere la scelta migliore?\n\nÈ possibile aprire una posizione su un fondo e versare solo una piccola quota del Tfr + contributo minimo per avere il contributo extra (1-2%)del datore?\n\nPer contesto: ho 25 anni, ral 30k, e non mi sento particolarmente affascinato dal posto fisso. Anzi la idea sarà di cambiare ogni tot anni.\n\nGrazie a tutti quelli che potranno aiutarmi.',
        'Andre',
        '[1, 2, 3, 5]',
        '[4]',
        '2020-09-23'),
       (2,
        'Quanto versate nel fondo pensione (escluso tfr)',
        'Vari articoli che ho letto online consigliavano un 10% ma mi sembra tantino (soprattutto se già si investe per conto proprio) voi quanto versate ?',
        'Lollo',
        '[4]',
        '[1,2,3]',
        '2021-03-25'),
       (3,
        'Offerta di lavoro negli USA a 23 anni',
        'Ciao a tutti,\n\nVolevo chiedere un vostro parere. Mi è stato proposto di recente di trasferirmi in una delle principali città della NorthCarolina, per circa 3 anni, per conto della azienda per la quale attualmente lavoro in Italia.\n\nDevo ancora confermare alla azienda il mio interesse a trasferirmi, ma volevo sentire dei pareri dalle internette :) Una volta confermato lo interesse mi farebbero una proposta ufficiale con RAL e tutto il resto.\n\nLavoro nel settore costumer service da quando ho 19 anni e attualmente guadagno 26K lordi. Non sono laureato.\n\nlavoro proposto è allettante e sicuramente quando tornerei (se torno) avrei un curriculum invidiabile.\n\nQuanto sarebbe un RAL accettabile? / Cosa posso aspettarmi? Cosa dovrei chiedere? E un esperienza che mi consigliate? Qualche pro e contro di pancia??\n\nAttendo vostre, se servono altre info fatemi sapere.',
        'Ali',
        '[]',
        '[1,2,4]',
        '2022-12-23');


ALTER TABLE `posts`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `posts`
    MODIFY `id` int (11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 1;

