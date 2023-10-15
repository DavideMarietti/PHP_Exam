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

    public function __construct($db)
    {
        $this->conn = $db;
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


    function readOne()
    {
        $query = "SELECT * FROM users WHERE users.id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {
            $this->username = $row['username'];
            $this->password = $row['password'];
            $this->nome = $row['nome'];
            $this->cognome = $row['cognome'];
            $this->sesso = $row['sesso'];
            $this->eta = $row['eta'];
        } else {
            $this->username = null;
            $this->password = null;
            $this->nome = null;
            $this->cognome = null;
            $this->sesso = null;
            $this->eta = null;
        }
    }


    function create()
    {
        $query = "INSERT INTO users SET
				  username=:username, password=:password, nome=:nome, cognome=:cognome, sesso=:sesso eta:=eta";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":cognome", $this->cognome);
        $stmt->bindParam(":sesso", $this->sesso);
        $stmt->bindParam(":eta", $this->eta);

        $stmt->execute();

        return $stmt;
    }


    function update()
    {
        $query = "UPDATE users SET
					username =: un,
					password =: p,
					nome =: n,
					cognome =: c,
                    sesso = :s,
                    eta =: e
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
}

?>