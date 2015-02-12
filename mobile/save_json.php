<?php
header("Content-Type: application/json");
$result = $_POST['data'];
$file = '../general.json';
$data = json_decode(file_get_contents($file));
$data[] = array(time() => $result);
file_put_contents($file, json_encode($data));
?>