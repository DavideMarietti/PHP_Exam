<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/Comment.php';

$database = new Database();
$db = $database->getConnection();

$comment = new Comment($db);

$id_toRead = isset($_GET['id']) ? $_GET['id'] : die();
$data = json_decode(file_get_contents("php://input"));

$comment->setId($id_toRead);

$stmt = $comment->readById();

if ($stmt) {
    $comments_list = array();

    foreach ($stmt as $row) {
        $comment_obj = array(
            "id" => (int)$row['id'],
            "testo" => $row['testo'],
            "autore" => $row['autore'],
            "parentid" => (int)$row['parentid'],
            "level" => (int)$row['level'],
            "like" => json_decode($row['like']),
            "dislike" =>  json_decode($row['dislike']),
            "creato" => $row['creato']
        );

        array_push($comments_list, $comment_obj);
    }
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Comment not found"));
}

$comment->setTesto($comments_list[0]['testo']);
$comment->setAutore($comments_list[0]['autore']);
$comment->setParentId($comments_list[0]['parentid']);
$comment->setLevel($comments_list[0]['level']);
$comment->setLike($comments_list[0]['like']);
$comment->setDislike($comments_list[0]['dislike']);
$comment->setCreato($comments_list[0]['creato']);

$comment->giveDislike($data);

$stmt = $comment->updateLikeDislike();

$res = $comment->readById();

if ($res) {
    foreach ($res as $row) {
        $comment_obj = array(
            "id" => (int)$row['id'],
            "testo" => $row['testo'],
            "autore" => $row['autore'],
            "parentid" => (int)$row['parentid'],
            "level" => (int)$row['level'],
            "like" => json_decode($row['like']),
            "dislike" => json_decode($row['dislike']),
            "creato" => $row['creato']
        );
    }

    http_response_code(200);
    echo json_encode($comment_obj);
}
else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable give like"));
}
?>