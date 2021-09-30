<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");
require(__DIR__.'/core.php');

$data = array();
$lines = file('contacts.csv', FILE_IGNORE_NEW_LINES);

foreach ($lines as $key => $value)
{
    if($key !=0){
        $data[$key] = str_getcsv($value);
    }
}

if(!isset($_GET['action'])){
    echo JSON(
        $data
    );
}
?>