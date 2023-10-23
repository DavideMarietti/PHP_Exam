<?php

class Post
{

    private $conn;

    public $id;
    public $titolo;
    public $testo;
    public $autore;
    private $like;
    private $dislike;
    public $creato;

    public function __construct($db)
    {
        $this->conn = $db;
        $this->like = "[]";
        $this->dislike = "[]";
        $this->creato = date("Y-m-d H:i:s");
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id_par)
    {
        $this->id = (int)$id_par;
    }

    public function getTitolo()
    {
        return $this->titolo;
    }

    public function setTitolo($titolo)
    {
        $this->titolo = $titolo;
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

    public function getLike()
    {
        return $this->like;
    }

    public function setLike($like)
    {
        $this->like = $like;
    }

    public function giveLike($userid)
    {
        $d = (array)$this->dislike;
        $l = (array)$this->like;

        if (in_array($userid, $d)) {
            //Update dislikes
            $dislikeIndex = array_search($userid, $d);
            unset($d[$dislikeIndex]);
            $new_d = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_d = $new_d . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_d = substr_replace($new_d, "", -1);
            }
            $new_d = $new_d . "]";
            $this->dislike = $new_d;

            //Update likes
            $l[] = $userid;
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;
        } elseif (in_array($userid, $l)) {
            //Update dislike
            $new_d = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_d = $new_d . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_d = substr_replace($new_d, "", -1);
            }
            $new_d = $new_d . "]";
            $this->dislike = $new_d;

            //Update likes
            $likeIndex = array_search($userid, $l);
            unset($l[$likeIndex]);
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;
        } else {
            //Update dislike
            $new_d = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_d = $new_d . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_d = substr_replace($new_d, "", -1);
            }
            $new_d = $new_d . "]";
            $this->dislike = $new_d;

            //Update just likes
            $l[] = $userid;
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;
        }

        /*
        if (in_array($userid, $d)) {
            $dislikeIndex = array_search($userid, $d);
            unset($d[$dislikeIndex]);
            $new_l = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->dislike = $new_l;
        } else {
            $new_l = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->dislike = $new_l;
        }

        if (in_array($userid, $l)) {
            $likeIndex = array_search($userid, $l);
            unset($l[$likeIndex]);
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;
        } else {
            $l[] = $userid;
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;
        }*/
    }

    public
    function getDislike()
    {
        return $this->dislike;
    }

    public
    function setDislike($dislike)
    {
        $this->dislike = $dislike;
    }

    public
    function giveDislike($userid)
    {
        $d = (array)$this->dislike;
        $l = (array)$this->like;

        if (in_array($userid, $l)) {
            //Update likes
            $likeIndex = array_search($userid, $l);
            unset($l[$likeIndex]);
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;

            //Update dislikes
            $d[] = $userid;
            $new_d = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_d = $new_d . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_d = substr_replace($new_d, "", -1);
            }
            $new_d = $new_d . "]";
            $this->dislike = $new_d;
        } elseif (in_array($userid, $d)) {
            //Update like
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;

            //Update dislikes
            $dislikeIndex = array_search($userid, $d);
            unset($d[$dislikeIndex]);
            $new_d = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_d = $new_d . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_d = substr_replace($new_d, "", -1);
            }
            $new_d = $new_d . "]";
            $this->dislike = $new_d;
        } else {
            //Update like
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;

            //Update just dislikes
            $d[] = $userid;
            $new_d = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_d = $new_d . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_d = substr_replace($new_d, "", -1);
            }
            $new_d = $new_d . "]";
            $this->dislike = $new_d;
        }

        /*
        if (in_array($userid, $l)) {
            $dislikeIndex = array_search($userid, $l);
            unset($l[$dislikeIndex]);
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;
        } else {
            $new_l = "[";
            $counter = 0;
            foreach ($l as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->like = $new_l;
        }

        if (in_array($userid, $d)) {
            $likeIndex = array_search($userid, $d);
            unset($d[$likeIndex]);
            $new_l = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->dislike = $new_l;
        } else {
            $d[] = $userid;
            $new_l = "[";
            $counter = 0;
            foreach ($d as $item) {
                $new_l = $new_l . $item . ",";
                $counter++;
            }
            if ($counter > 0) {
                $new_l = substr_replace($new_l, "", -1);
            }
            $new_l = $new_l . "]";
            $this->dislike = $new_l;
        }*/
    }

    public
    function getCreato()
    {
        return $this->creato;
    }

    public
    function setCreato($creato)
    {
        $this->creato = $creato;
    }

    function read()
    {
        $query = "SELECT * FROM posts";
        // query preparation
        $stmt = $this->conn->prepare($query);
        // query execution
        $stmt->execute();

        return $stmt;
    }

    function readByAutore()
    {
        $query = "SELECT * FROM posts WHERE posts.autore = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->autore);
        $stmt->execute();

        return $stmt;
    }

    function readById()
    {
        $query = "SELECT * FROM posts WHERE posts.id = ?";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();

        return $stmt;
    }

    function create()
    {
        $query = "INSERT INTO posts SET
				  titolo=:titolo, testo=:testo, autore=:autore, posts.like= :like, posts.dislike=:dislike, creato=:creato";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(":titolo", $this->titolo);
        $stmt->bindParam(":testo", $this->testo);
        $stmt->bindParam(":autore", $this->autore);
        $stmt->bindParam(":like", $this->like);
        $stmt->bindParam(":dislike", $this->dislike);
        $stmt->bindParam(":creato", $this->creato);

        $stmt->execute();

        return $this;
    }

    function updateLikeDislike()
    {
        $query = "UPDATE posts SET
					posts.like = :l,
					posts.dislike = :d
					WHERE
					id = :i";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':l', $this->like);
        $stmt->bindParam(':d', $this->dislike);
        $stmt->bindParam(':i', $this->id);
        $stmt->execute();

        return $stmt;
    }

    function delete()
    {
        $query = "DELETE FROM posts WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();
        return $stmt;
    }

    function deleteAll()
    {
        //aggiungere eliminazione commenti sotto il post
        $query = "DELETE FROM posts";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}

?>