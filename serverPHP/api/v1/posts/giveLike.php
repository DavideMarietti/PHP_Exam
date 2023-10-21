<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, PATCH");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/Post.php';

$database = new Database();
$db = $database->getConnection();

$post = new Post($db);

$id_toRead = isset($_GET['id']) ? $_GET['id'] : die();
$data = json_decode(file_get_contents("php://input"));

$post->setId($id_toRead);

$stmt = $post->readById();

if ($stmt) {
    $posts_list = array();

    foreach ($stmt as $row) {
        $post_obj = array(
            "id" => (int)$row['id'],
            "titolo" => $row['titolo'],
            "testo" => $row['testo'],
            "autore" => $row['autore'],
            "like" => json_decode($row['like']),
            "dislike" =>  json_decode($row['dislike']),
            "creato" => $row['creato']
        );

        array_push($posts_list, $post_obj);
    }
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Post not found"));
}

$post->setTitolo($posts_list[0]['titolo']);
$post->setTesto($posts_list[0]['testo']);
$post->setAutore($posts_list[0]['autore']);
$post->setLike($posts_list[0]['like']);
$post->setDislike($posts_list[0]['dislike']);
$post->setCreato($posts_list[0]['creato']);

//echo json_encode($post);

$post->giveLike($data);

$stmt = $post->updateLikeDislike();

if($stmt) {
    http_response_code(200);
    echo json_encode($post);
}
else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to update product"));
}
?>