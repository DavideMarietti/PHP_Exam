<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/Post.php';

$database = new Database();
$db = $database->getConnection();

$post = new Post($db);

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->titolo) &&
    !empty($data->testo) &&
    !empty($data->autore)
) {
    $post->setTitolo($data->titolo);
    $post->setTesto($data->testo);
    $post->setAutore($data->autore);

    $stmt = $post->create();
    if ($stmt) {
        http_response_code(201);
        echo json_encode($post);
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create the post"));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create the post. Data is incomplete:"
        . " titolo=" . (empty($data->titolo) ? "null" : $data->titolo) . " testo=" . (empty($data->testo) ? "null" : $data->testo) . " autore=" . (empty($data->autore) ? "null" : $data->autore)));
}
?>