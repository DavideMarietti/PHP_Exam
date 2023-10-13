<?php
class Database{
 
    private $host = "localhost";
    private $db_name = "MY_DATABASE";
    private $username = "root";
    private $password = "";
    private $conn;

    public function getConnection(){
         $this->conn = null;
         try{
            $this->conn = new PDO("mysql:host=".$this->host.";dbname=".$this->db_name.";charset=utf8", $this->username, $this->password);
             echo "DB Connected";
        }
		catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
         return $this->conn;
    }
}
?>