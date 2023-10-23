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
include_once '../../../dataManager/Post.php';

$database = new Database();
$db = $database->getConnection();

$post = new Post($db);

$id_toRead = isset($_GET['id']) ? $_GET['id'] : die();
$data = json_decode(file_get_contents("php://input"));

$post->setId((int)$id_toRead);

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

$post->giveDislike($data);

$stmt = $post->updateLikeDislike();

$res = $post->readById();

if ($res) {
    foreach ($res as $row) {
        $post_obj = array(
            "id" => (int)$row['id'],
            "titolo" => $row['titolo'],
            "testo" => $row['testo'],
            "autore" => $row['autore'],
            "like" => json_decode($row['like']),
            "dislike" => json_decode($row['dislike']),
            "creato" => $row['creato']
        );
    }

    http_response_code(200);
    echo json_encode($post_obj);
}
else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable give dislike"));
}
?>