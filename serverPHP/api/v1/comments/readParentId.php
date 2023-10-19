<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/Comment.php';

$database = new Database();
$db = $database->getConnection();

$comment = new Comment($db);


$parentid_toRead = isset($_GET['parentid']) ? $_GET['parentid'] : die();
$comment->setParentId($parentid_toRead);

$stmt = $comment->readByParentId();

if ($stmt) {
    $comments_list = array();

    foreach ($stmt as $row) {
        $comment_obj = array(
            "id" => $row['id'],
            "testo" => $row['testo'],
            "autore" => $row['autore'],
            "parentid" => $row['parentid'],
            "level" => $row['level'],
            "like" => $row['like'],
            "dislike" => $row['dislike'],
            "creato" => $row['creato']
        );

        array_push($comments_list, $comment_obj);
    }

    http_response_code(200);
    echo json_encode($comments_list);
}
else {
    http_response_code(404);
    echo json_encode(array("message" => "Comment does not exist"));
}
?>