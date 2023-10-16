<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../../dataManager/Database.php';

$database = new Database();
$db = $database->getConnection();
