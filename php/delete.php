<?php
include_once("database.php");

$id=$_GET['id'];
$sql = "DELETE FROM 'partners' WHERE 'id'='{$id}' LIMIT 1";
    if(mysqli_query($mysqli, $sql)){
      http_response_code(204);
    }
    else{
      return http_response_code(422);
    }
?>
