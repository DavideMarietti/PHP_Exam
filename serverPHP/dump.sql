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
VALUES (1, 'Andre', 'test', 'Andrea', 'Balbo Mossetto', 'him/him', '28', '/assets/images/user2.png', '2020-09-23'),
       (2, 'Lollo', 'test', 'Lorenzo', 'Gianotti', 'him/him', '27', '/assets/images/user3.png', '2021-03-25'),
       (3, 'Ali', 'test', 'Alice', 'Pregnolato', 'her/her', '26', '/assets/images/user1.png', '2022-07-06'),
       (4, 'Lauretta', 'test', 'Laura', 'Rossi', 'her/her', '35', '/assets/images/user4.png', '2020-09-15'),
       (5, 'Ale', 'test', 'Alessia', 'Brambilla', 'her/her', '45', '/assets/images/user5.png', '2020-08-17');

ALTER TABLE `users`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 1;


/*________ Posts Table ________*/

CREATE TABLE `posts`
(
    `id`      int(11)                                NOT NULL,
    `titolo`  varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `testo`   text COLLATE utf8mb4_unicode_ci        DEFAULT NULL,
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
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 1;


/*________ Comments Table ________*/

CREATE TABLE `comments`
(
    `id`       int(11)                                NOT NULL,
    `testo`    text COLLATE utf8mb4_unicode_ci        DEFAULT NULL,
    `autore`   varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
    `like`     varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `dislike`  varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `parentid` int(11)                                NOT NULL,
    `level`    int(11)                                NOT NULL,
    `creato`   date                                   NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;


INSERT INTO `comments` (`id`, `testo`, `autore`, `like`, `dislike`, `parentid`, `level`, `creato`)
VALUES (1,
        'Il contributo del datore è tutto fuorchè marginale. Parliamo di una media di 1,5% della retribuzione lorda, ovvero un +20% del tfr maturato annui (che ricordiamo essere il 6.9% della retribuziine lorda).\n\nEdit: aggiungo che se vuoi cambiare spesso mettere il tfr bel fondo negoziale del ccnl con contributo datoriale e poi chiederne il riscatto alle dimissioni per perdità requisiti per me è la cosa migliore',
        'Lollo',
        '[1, 2]',
        '[0]',
        1,
        0,
        '2020-09-23'),
       (2,
        'Non sono d’accordo con la postilla finale. potresti facilmente trovarti nella situazione in cui il controvalore è minore della cifra depositata, come sta succedendo a me in questo momento. Se si cambia spesso e si vuole liquidare ogni volta fare il fondo negoziale non ha senso e ti espone ai rischi della volatilità.',
        'Andre',
        '[1,2]',
        '[0]',
        1,
        1,
        '2021-03-25'),
       (3,
        'È vero sicuramente ha il suo impatto.\n\nE dovrei anche considerare che in caso di riscatto avrei una tassazione importante lasciandolo in azienda.\n\nMa data la necessità di avere una certa liquidità aggiuntiva a breve ha senso impegnarsi ora in un fondo?',
        'Ale',
        '[1,2]',
        '[0]',
        1,
        1,
        '2022-07-06'),
       (4,
        'Puoi cominciare a guardare questa guida, dove spiegano come funzionano entrambi i metodi, e poi valutare:\n\n https://www.covip.it/per-il-cittadino/educazione-previdenziale/guida-introduttiva-alla-previdenza-complementare',
        'Ali',
        '[1,2]',
        '[0]',
        1,
        1,
        '2020-09-15'
       ),
       (5,
        'Puoi cominciare a guardare questa guida, dove spiegano come funzionano entrambi i metodi, e poi valutare:\n\n https://www.covip.it/per-il-cittadino/educazione-previdenziale/guida-introduttiva-alla-previdenza-complementare',
       'Lauretta',
        '[1,2]',
        '[3]',
        1,
        0,
        '2020-09-23'
        ),
       (6,
        'Grazie mille per la prospettiva.\n\n Non ho un Tfr pregresso da versare in quanto liquidato con lo ultimo cambio di lavoro.\n\nHo un po di soldi da parte di cui non ho necessità di utilizzo a stretto giro se non eventualmente per la casa. I quali pensavo di inserirli su un conto deposito 12 mesi.',
        'Ali',
        '[1,2,3,5]',
        '[0]',
        1,
        0,
        '2020-09-23'
        ),
       (7,
        'Grazie, verifo la cosa.',
        'Ale',
        '[4,5]',
        '[1]',
        1,
        1,
        '2022-07-06'),
       (
        8,
        'Siamo nella stessa situazione, con la differenza che non ho cambiato azienda. Per il momento io l’ho lasciato in azienda il tfr, in futuro però penso di trasferirlo su un pac in modo che poi non resta bloccato per 8 anni',
       'Lollo',
        '[1,2,3,4,5]',
        '[0]',
        2,
        2,
        '2022-07-06'),
       (9,
        'Siamo nella stessa situazione, con la differenza che non ho cambiato azienda. Per il momento io l’ho lasciato in azienda il tfr, in futuro però penso di trasferirlo su un pac in modo che poi non resta bloccato per 8 anni',
        'Andre',
        '[5]',
        '[1,2,3,4]',
        2,
        2,
        '2022-07-06'
       ),
       (10,
        'Esattamente la % per arrivare al massimo deducibile annuale',
        'Ale',
        '[5]',
        '[1,2,3,4]',
        2,
        0,
        '2022-07-06'
       ),
       (11,
        'Scusa la domanda un pò ignorante.. Conviene il massimo deducibile per ottimizzare la tassazione? Ma sempre? In qualsiasi scaglione?',
        'Lollo',
        '[5,2]',
        '[1,4]',
        10,
        1,
        '2020-09-23'
       ),
       (12,
        'Curiosità (banale, credo):\n\n Ad ogni aumento fai la procedura per rivedere la % di contributo volontario?',
        'Ale',
        '[5]',
        '[1,2,3,4]',
        10,
        1,
        '2020-09-15'
        ),
       (13,
        'Siamo nella stessa situazione, con la differenza che non ho cambiato azienda. Per il momento io l’ho lasciato in azienda il tfr, in futuro però penso di trasferirlo su un pac in modo che poi non resta bloccato per 8 anni',
        'Lauretta',
        '[1,2,3,4]',
        '[5]',
        12,
        2,
        '2022-07-06'
       ),
       (14,
        'Io metto il minimo per queste ragioni:\n\n La mia generazione (anni 90), se mai ci arriverà, maturerà il diritto alla pensione in area 74 anni. Pertanto non avrò tutto questo tempo per godermi il mio fondo pensione.\n\n Vivendo a Milano, per me è quasi impossibile pensare di rinunciare ad una parte dello stipendio, dato che ormai i costi sono arrivati a livelli folli su tutti i fronti (ed in prospettiva la situazione non migliorerà).\n\n Con i livelli di inquinamento dell''aria, unitamente ad un SSN che si approccia al collasso, non mi stupirei se le mie condizioni di salute peggiorassero con il passare degli anni.',
        'Lauretta',
        '[3]',
        '[1,2]',
        12,
        2,
        '2022-07-06'
        ),
       (15,
        'Per il punto 1 puoi leggere del RITA.',
        'Ale',
        '[5]',
        '[1,2,3,4]',
        14,
        3,
        '2020-09-15'
       ),
       (16,
        'Io cerco di maxare i 5k annuali di deducibilità, ma conviene solo se hai il giusto mix di scaglione IRPEF alto e allocazione del fondo pensione decentemente rischiosa, altrimenti tra risparmio gestito e mille limiti rischia di essere una trappola.\n\n Puoi fare un check veloce se hai già in mente dei numeri sul mio comparatore qua: https://sossoldi.org/pac-o-fondo-pensione.html',
        'Lollo',
        '[5]',
        '[1,2,3,4]',
        14,
        3,
        '2020-09-23'
        );


ALTER TABLE `comments`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `comments`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 1;
