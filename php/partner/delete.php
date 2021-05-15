<?php
include_once("../database.php");

$id= file_get_contents("php://input");
$sql = "DELETE FROM 'partners' WHERE 'id'='{$id}' LIMIT 1";
    if(mysqli_query($mysqli, $sql)){
      http_response_code(204);
    }
    else{
      return http_response_code(422);
    }
?>
