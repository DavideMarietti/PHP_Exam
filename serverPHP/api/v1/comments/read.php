<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/Comment.php';

$database = new Database();
$db = $database->getConnection();

$comment = new Comment($db);

$stmt = $comment->read();

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
            "dislike" => json_decode($row['dislike']),
            "creato" => $row['creato']
        );

        array_push($comments_list, $comment_obj);
    }

    http_response_code(200);
    echo json_encode($comments_list);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Comment not found"));
}
?>

