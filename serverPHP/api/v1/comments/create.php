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
include_once '../../../dataManager/Comment.php';

$database = new Database();
$db = $database->getConnection();

$comment = new Comment($db);

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->testo) &&
    !empty($data->autore)
) {

    $comment->setTesto($data->testo);
    $comment->setAutore($data->autore);
    $comment->setParentId($data->parentid);
    $comment->setLevel($data->level);

    $stmt = $comment->create();

    $res = $comment->read();

    if ($res) {
        $comments_list = array();

        foreach ($res as $row) {
            $comment_obj = array(
                "id" => (int)$row['id'],
                "testo" => $row['testo'],
                "autore" => $row['autore'],
                "parentid" => (int)$row['parentid'],
                "level" => (int)$row['level'],
                "like" => json_decode($row['like']),
                "dislike" => json_decode($row['dislike']),
                "creato" => $row['creato']
            );

            array_push($comments_list, $comment_obj);
        }

        http_response_code(200);
        echo json_encode(end($comments_list));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create the comment"));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create the comment. Data is incomplete"));
}
?>