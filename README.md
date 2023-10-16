# php_exam
Repo for the PHP exam. **This project is dockerized**, to use it:
1) Clone it,
2) Run the Docker engine (*i.e.* open Docker desktop),
3) Open a Git bash inside the serverPHP folder and run ./launchApp. This will built a docker image based on php:8.0-apache and run the cluster of containers made by a php REST API server, a MySQL database and a phpMyAdmin service each.

NOTE:
* The REST API server written in PHP listen on localhost:3000.
* The phpMyAdmin service is available at localhost:3001 and can be accessed using MYSQL_USER as username, MYSQL_PASSWORD as username. The database is automatically initialized when the corrispondent container is started thanks to the dump.sql file.
* There is a bind-mount set to allow live updates in development (you don't have built a image every time a change in the src code occures).

Link to the REST API documentation: https://documenter.getpostman.com/view/20410203/2s9YR83Cd6
