<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, PATCH");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

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

$comment->giveLike($data);

$stmt = $comment->updateLikeDislike();

if($stmt) {
    http_response_code(200);
    echo json_encode($comment);
}
else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable give like"));
}
?>