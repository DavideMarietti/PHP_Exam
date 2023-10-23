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


    $res = $post->read();

    if ($res) {
        $posts_list = array();

        foreach ($res as $row) {
            $post_obj = array(
                "id" => (int)$row['id'],
                "titolo" => $row['titolo'],
                "testo" => $row['testo'],
                "autore" => $row['autore'],
                "like" => json_decode($row['like']),
                "dislike" =>  json_decode($row['dislike']),
                "creato" => $row['creato']
            );

            array_push($posts_list, $post_obj);
        }

        http_response_code(200);
        echo json_encode(end($posts_list));
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