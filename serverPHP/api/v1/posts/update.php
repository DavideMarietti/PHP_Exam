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
$post->setTitolo($data->titolo);
$post->setTesto($data->testo);

$stmt = $post->update();

if($stmt) {
    http_response_code(200);
    echo json_encode($post);
}
else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to update product"));
}
?>