<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/Comment.php';

$database = new Database();
$db = $database->getConnection();

$comment = new Comment($db);


if ($comment->deleteAll()) {
    http_response_code(200);
    echo json_encode(array("message" => "All comments deleted"));
}
else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to delete all comments"));
}
?>