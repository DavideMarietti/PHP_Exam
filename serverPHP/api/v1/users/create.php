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
include_once '../../../dataManager/User.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->username) &&
    !empty($data->password) &&
    !empty($data->nome) &&
    !empty($data->cognome)
) {
    $user->setUsername($data->username);
    $user->setPassword($data->password);
    $user->setNome($data->nome);
    $user->setCognome($data->cognome);

    $stmt = $user->create();

    $res = $user->read();

    if ($res) {
        $users_list = array();

        foreach ($res as $row) {
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
        echo json_encode(end($users_list));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create the user"));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create the user. Data is incomplete:"
        . " username=" . (empty($data->username) ? "null" : $data->username) . " password=" . (empty($data->password) ? "null" : $data->password) . " nome=" . (empty($data->nome) ? "null" : $data->nome) . " cognome=" . (empty($data->cognome) ? "null" : $data->cognome)));
}
?>