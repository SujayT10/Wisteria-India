<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata)){

    $id = mysqli_real_escape_string($mysqli, trim($request->id));

    $sql = " DELETE FROM employee WHERE emp_id = '$id' ";

    if($result = mysqli_query($mysqli,$sql)){
      $rows = array();
        while($row = mysqli_fetch_assoc($result)){
          $rows[] = $row;
        }
        echo json_encode($rows);
    }
    else{
      echo "Error";
      http_response_code(404);
    }
}
?>
