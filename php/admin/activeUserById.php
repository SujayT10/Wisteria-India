<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

  $request = json_decode($postdata);
  $admin_id = trim($request->admin_id);
    $users = [];

    $sql = "SELECT * FROM users where admin_id = '$admin_id' ";

    if($result = mysqli_query($mysqli, $sql)){
      $request = json_decode($postdata);
      $cr = 0;
      while($row = mysqli_fetch_assoc($result)){
        $users[$cr]['id'] = $row['id'];
        $users[$cr]['admin_id'] = $row['admin_id'];
        $users[$cr]['firstname'] = $row['firstname'];
        $users[$cr]['lastname'] = $row['lastname'];
        $users[$cr]['email'] = $row['email'];
        $users[$cr]['contactno'] = $row['contactno'];
        $cr++;
      }
      // print_r(($partners));
      echo json_encode($users);
    }
    else{
      http_response_code(404);
    }
}
?>
