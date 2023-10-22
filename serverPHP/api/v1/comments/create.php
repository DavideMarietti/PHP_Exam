<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/Comment.php';

$database = new Database();
$db = $database->getConnection();

$comment = new Comment($db);

$data = json_decode(file_get_contents("php://input"));
var_dump( !empty($data->level));

if (
    !empty($data->testo) &&
    !empty($data->autore)
) {

    $comment->setTesto($data->testo);
    $comment->setAutore($data->autore);
    $comment->setParentId($data->parentid);
    $comment->setLevel($data->level);

    $stmt = $comment->create();
    if ($stmt) {
        http_response_code(201);
        echo json_encode($comment);
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create the comment"));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create the comment. Data is incomplete"));
}
?>