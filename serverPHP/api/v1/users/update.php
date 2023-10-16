<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, PATCH");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/User.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

$id_toRead = isset($_GET['id']) ? $_GET['id'] : die();
$data = json_decode(file_get_contents("php://input"));

$user->setId($id_toRead);
$user->setUsername($data->username);
$user->setPassword($data->password);
$user->setNome($data->nome);
$user->setCognome($data->cognome);
$user->setSesso($data->sesso);
$user->setEta($data->eta);

$stmt = $user->update();

if($stmt) {
    http_response_code(200);
    echo json_encode($user);
}
else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to update product"));
}
?><?php
