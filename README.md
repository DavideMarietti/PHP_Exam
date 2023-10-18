# PHP_Exam
Repository for the PHP exam. 

**This project is dockerized**, to use it:
1) Clone it (anywhere, **there is no need to place it in the xampp folder**),
2) Run the Docker engine (*i.e.* open Docker desktop),
3) Open a terminal inside the serverPHP folder and run `docker-compose up --build`. The project (*i.e.* the PHP web server, the phpMyAdmin service and the MySQL database) is now up and running 😎.

NOTE:
* XAMPP is not required to run this project.
* The REST API server written in PHP listens on port 3000 (http://localhost:3000).
* The phpMyAdmin service is available on port 3001 (http://localhost:3001) and can be accessed using MYSQL_USER as username and MYSQL_PASSWORD as password. Thanks to dump.sql and a volume defined for the db container, the MySQL database is automatically initialized when the db container starts.
* There is a bind-mount attached to the php-apache-environment container to allow live updates in development (you don't have built a image when changes occure in the src code).
* Link to the REST API documentation: https://documenter.getpostman.com/view/20410203/2s9YR83Cd6.
