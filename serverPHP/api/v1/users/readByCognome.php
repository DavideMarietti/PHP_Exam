<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");

include_once '../../../dataManager/Database.php';
include_once '../../../dataManager/User.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);


$cognome_toRead = isset($_GET['cognome']) ? $_GET['cognome'] : die();
$user->setCognome($cognome_toRead);

$stmt = $user->readByCognome();

if ($stmt) {
    $users_list = array();

    foreach ($stmt as $row) {
        $user_obj = array(
            "id" => (int)$row['id'],
            "username" => $row['username'],
            "password" => $row['password'],
            "nome" => $row['nome'],
            "cognome" => $row['cognome'],
            "sesso" => $row['sesso'],
            "eta" => (int)$row['eta'],
            "image" => $row['image'],
            "iscrizione" => $row['iscrizione']
        );

        array_push($users_list, $user_obj);
    }

    http_response_code(200);
    echo json_encode($users_list);
}
else {
    http_response_code(404);
    echo json_encode(array("message" => "Product does not exist"));
}
?>