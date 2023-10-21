<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/Post.php';

$database = new Database();
$db = $database->getConnection();

$post = new Post($db);


$id_toRead = isset($_GET['id']) ? $_GET['id'] : die();
$post->setAutore($id_toRead);

$stmt = $post->readById();

if ($stmt) {
    $posts_list = array();

    foreach ($stmt as $row) {
        $post_obj = array(
            "id" => $row['id'],
            "titolo" => $row['titolo'],
            "testo" => $row['testo'],
            "autore" => $row['autore'],
            "like" => json_decode($row['like']),
            "dislike" => json_decode($row['dislike']),
            "creato" => $row['creato']
        );

        array_push($posts_list, $post_obj);
    }

    http_response_code(200);
    echo json_encode($posts_list);
}
else {
    http_response_code(404);
    echo json_encode(array("message" => "Post does not exist"));
}
?>