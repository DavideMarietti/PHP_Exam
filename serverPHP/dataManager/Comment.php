<?php

class Comment
{

    private $conn;

	  public $id;
      public $testo;
      public $autore;
      public $parentid;
      public $level;
      public $like = [];
      public $dislike = [];
      public $creato;

    public function __construct($db)
    {
        $this->conn = $db;
        //$this->image = "/assets/images/user.png";
        //$this->iscrizione = date("Y-m-d H:i:s");
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }


    public function getParentId()
    {
        return $this->parentid;
    }

    public function setParentId($id)
    {
        $this->parentid = $id;
    }


    public function getLevel()
    {
        return $this->level;
    }

    public function setLevel($id)
    {
        $this->level = $id;
    }


    public function getTesto()
    {
        return $this->testo;
    }

    public function setTesto($testo)
    {
        $this->testo = $testo;
    }

    public function getAutore()
    {
        return $this->autore;
    }

    public function setAutore($autore)
    {
        $this->autore = $autore;
    }

    public function getLike() {
        return $this->like;
    }

    public function setLike($like) {
        $this->like = $like;
    }

    public function giveLike($userid) {
        if (in_array($userid, $this->dislike)) {
            $dislikeIndex = array_search($userid, $this->dislike);
            unset($this->dislike[$dislikeIndex]);
            // Re-index the array after removing the element
            $this->dislike = array_values($this->dislike);
        }

        if (in_array($userid, $this->like)) {
            $likeIndex = array_search($userid, $this->like);
            unset($this->like[$likeIndex]);
            // Re-index the array after removing the element
            $this->like = array_values($this->like);
        } else {
            $this->like[] = $userid;
        }
    }

    public function getDislike() {
        return $this->dislike;
    }

    public function setDislike($dislike) {
        $this->dislike = $dislike;
    }

    public function giveDislike($userid) {
        if (in_array($userid, $this->like)) {
            $likeIndex = array_search($userid, $this->like);
            unset($this->like[$likeIndex]);
            // Re-index the array after removing the element
            $this->like = array_values($this->like);
        }

        if (in_array($userid, $this->dislike)) {
            $dislikeIndex = array_search($userid, $this->dislike);
            unset($this->dislike[$dislikeIndex]);
            // Re-index the array after removing the element
            $this->dislike = array_values($this->dislike);
        } else {
            $this->dislike[] = $userid;
        }
    }

    public function getCreato()
        {
            return $this->creato;
        }

        public function setCreato($creato)
        {
            $this->creato = $creato;
        }


    function read()
    {
        $query = "SELECT * FROM comments";
        // query preparation
        $stmt = $this->conn->prepare($query);
        // query execution
        $stmt->execute();

        return $stmt;
    }

    function readByAutore()
    {
        $query = "SELECT * FROM comments WHERE comments.autore = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->autore);
        $stmt->execute();

        return $stmt;
    }

    function readByParentId()
    {
        $query = "SELECT * FROM comments WHERE comments.parentid = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->parentid);
        $stmt->execute();

        return $stmt;
    }

    function create()
    {
		/*
		se non si compilasse automaticamente l'id aggiungere qualcosa come:
		id = (SELECT MAX(id) + 1 FROM comments), */
        $query = "INSERT INTO comments SET
				  testo=:testo, autore=:autore";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":testo", $this->testo);
        $stmt->bindParam(":autore", $this->autore);

        $stmt->execute();

        return $stmt;
    }

    function update()
    {
        $query = "UPDATE comments SET
					testo = :tx,
					autore = :a
					WHERE
					id = :i";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':tx', $this->testo);
        $stmt->bindParam(':a', $this->autore);
        $stmt->bindParam(':i', $this->id);
        $stmt->execute();

        return $stmt;
    }

    function delete()
    {
        $query = "DELETE FROM comments WHERE id = ?";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->id);

        $stmt->execute();

        return $stmt;
    }

    function deleteAll()
    {
        $query = "DELETE FROM comments";

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }
}

?>