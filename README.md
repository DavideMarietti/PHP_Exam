# PHP_Exam
Repository for the PHP exam. 

**This project is dockerized**, to use it:
1) Clone it (anywhere, **there is no need to place it inside a xampp folder**),
2) Run the Docker engine (*e.g.* opening Docker desktop),
3) Open a terminal inside the cloned project and run `docker-compose up --build`. The project (*i.e.* the PHP web server, the phpMyAdmin service, the MySQL database and the frontend in Angular) is now up and running 😎.

NOTE:
* XAMPP is not required to run this project.
* The application front-end in Angular is available on port 3002 (http://localhost:3002).
* The PHP REST API server listens on port 3000 (http://localhost:3000).
* The phpMyAdmin service is available on port 3001 (http://localhost:3001). It can be accessed using MYSQL_USER as username and MYSQL_PASSWORD as password. Thanks to dump.sql and a volume defined for the db container, the MySQL database is automatically initialized when the db container starts.
* There is a bind-mount attached to the php-apache-environment container to allow live updates in development.
* Link to the REST API documentation: https://documenter.getpostman.com/view/20410203/2s9YR83Cd6.
* If you want to modify the front-end, then it must be built running `npm run build`.