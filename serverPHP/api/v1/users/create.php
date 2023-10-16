<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/User.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->username) &&
    !empty($data->password) &&
    !empty($data->nome) &&
    !empty($data->cognome) &&
    !empty($data->sesso) &&
    !empty($data->eta)
) {
    $user->setUsername($data->username);
    $user->setPassword($data->password);
    $user->setNome($data->nome);
    $user->setCognome($data->cognome);
    $user->setSesso($data->sesso);
    $user->setEta($data->eta);

    $stmt = $user->create();
    if ($stmt) {
        http_response_code(201);
        echo json_encode($user);
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create the user"));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create the user. Data is incomplete:"
        . " username=" . (empty($data->username) ? "null" : $data->usernaem) . " password=" . (empty($data->password) ? "null" : $data->password) . " nome=" . (empty($data->nome) ? "null" : $data->nome) . " cognome=" . (empty($data->cognome) ? "null" : $data->cognome) . " sesso=" . (empty($data->sesso) ? "null" : $data->sesso) . " eta=" . (empty($data->eta) ? "null" : $data->eta)));
}
?>