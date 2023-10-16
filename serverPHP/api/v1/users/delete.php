<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/User.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

$id_toDel = isset($_GET['id']) ? $_GET['id'] : die();
$user->setId($id_toDel);

if ($user->delete()) {
    http_response_code(200);
    echo json_encode(array("message" => "User was deleted"));
}
else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to delete the user"));
}
?>