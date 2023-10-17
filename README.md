# php_exam
Repository for the PHP exam. **This project is dockerized**, to use it:
1) Clone it (anywhere, **there is no need to place it in the xampp folder** because the PHP web server and the MySQL database are going to be inside a container),
3) Run the Docker engine (*i.e.* open Docker desktop),
4) Specify your path to the serverPHP folder in the bind-mount attached to the php-apache-environment container (*i.e.* in docker-compose.yml, row 24),
5) Open a Git bash inside the serverPHP folder and run ./launchApp. This will built a docker image based on php:8.0-apache and run the cluster of containers made by a php REST API server, a MySQL database and a phpMyAdmin service.

NOTE:
* XAMPP is not required to run this project.
* The REST API server written in PHP listens on port 3000 (http://localhost:3000).
* The phpMyAdmin service is available on port 3001 (http://localhost:3001) and can be accessed using MYSQL_USER as username, MYSQL_PASSWORD as username. The database is automatically initialized when the corrispondent container is started thanks to the dump.sql file.
* There is a bind-mount attached to the php-apache-environment container to allow live updates in development (you don't have built a image when changes in the src code occure).
* Link to the REST API documentation: https://documenter.getpostman.com/view/20410203/2s9YR83Cd6.
