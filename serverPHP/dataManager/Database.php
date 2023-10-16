<?php

class Database
{

    private $host = "db";
    private $db_name = "MY_DATABASE";
    private $username = "MYSQL_USER";
    private $password = "MYSQL_PASSWORD";
    private $conn;

    public function getConnection()
    {
        $this->conn = null;
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name . ";charset=utf8", $this->username, $this->password);
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}

?>