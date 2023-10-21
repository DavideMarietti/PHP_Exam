<?php

class User
{

    private $conn;

    public $id;
    public $username;
    public $password;
    public $nome;
    public $cognome;
    public $sesso;
    public $eta;

    public $image;
    public $iscrizione;

    public function __construct($db)
    {
        $this->conn = $db;
        $this->image = "/assets/images/user.png";
        $this->iscrizione = date("Y-m-d H:i:s");
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id_par)
    {
        $this->id = $id_par;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function setUsername($username_par)
    {
        $this->username = $username_par;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function setPassword($password_par)
    {
        $this->password = $password_par;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome_par)
    {
        $this->nome = $nome_par;
    }

    public function getCognome()
    {
        return $this->cognome;
    }

    public function setCognome($cognome_par)
    {
        $this->cognome = $cognome_par;
    }

    public function getSesso()
    {
        return $this->sesso;
    }

    public function setSesso($sesso_par)
    {
        $this->sesso = $sesso_par;
    }

    public function getEta()
    {
        return $this->eta;
    }

    public function setEta($eta_par)
    {
        $this->eta = $eta_par;
    }


    function read()
    {
        $query = "SELECT * FROM users";
        // query preparation
        $stmt = $this->conn->prepare($query);
        // query execution
        $stmt->execute();

        return $stmt;
    }

    function readByAge()
    {
        $query = "SELECT * FROM users WHERE users.eta = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->eta);
        $stmt->execute();

        return $stmt;
    }

    function readByUsername()
    {
        $query = "SELECT * FROM users WHERE users.username = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->username);
        $stmt->execute();

        return $stmt;
    }

    function readByNome()
    {
        $query = "SELECT * FROM users WHERE users.nome = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->nome);
        $stmt->execute();

        return $stmt;
    }

    function readByCognome()
    {
        $query = "SELECT * FROM users WHERE users.cognome = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->cognome);
        $stmt->execute();

        return $stmt;
    }

    function create()
    {
        $query = "INSERT INTO users SET
				  username=:username, password=:password, nome=:nome, cognome=:cognome, sesso=:sesso, eta=:eta, image=:image, iscrizione=:iscrizione";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":cognome", $this->cognome);
        $stmt->bindParam(":sesso", $this->sesso);
        $stmt->bindParam(":eta", $this->eta);
        $stmt->bindParam(":image", $this->image);
        $stmt->bindParam(":iscrizione", $this->iscrizione);

        $stmt->execute();

        return $stmt;
    }

    function update()
    {
        $query = "UPDATE users SET
					username = :un,
					password = :p,
					nome = :n,
					cognome = :c,
                    sesso = :s,
                    eta = :e,
                    image = :image,
                    iscrizione = :iscrizione
					WHERE
					id = :i";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':un', $this->username);
        $stmt->bindParam(':p', $this->password);
        $stmt->bindParam(':n', $this->nome);
        $stmt->bindParam(':c', $this->cognome);
        $stmt->bindParam(':s', $this->sesso);
        $stmt->bindParam(':e', $this->eta);
        $stmt->bindParam(':i', $this->id);
        $stmt->bindParam(":image", $this->image);
        $stmt->bindParam(":iscrizione", $this->iscrizione);
        $stmt->execute();

        return $stmt;
    }

    function delete()
    {
        $query = "DELETE FROM users WHERE id = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->id);

        $stmt->execute();

        return $stmt;
    }

    function deleteAll()
    {
        $query = "DELETE FROM users";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }
}
?>