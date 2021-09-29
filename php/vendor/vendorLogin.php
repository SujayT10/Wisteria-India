<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata)){
    // $pwd = sha1(mysqli_real_escape_string($mysqli, trim($request->password)));
    $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
    $userId = mysqli_real_escape_string($mysqli, trim($request->userId));
    $id = "WIV-".$userId;
    // $email = mysqli_real_escape_string($mysqli, trim($request->username));

    $sql = "SELECT * FROM vendor where vendor_id = '$id' and password='$pwd'";

    if($result = mysqli_query($mysqli,$sql)){
      $rows = array();
        while($row = mysqli_fetch_assoc($result)){
          $rows[] = $row;
        }
        echo json_encode($rows);
    }
    else{
      http_response_code(404);
    }
}
?>
