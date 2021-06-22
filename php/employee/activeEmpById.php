<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

  $request = json_decode($postdata);
  $emp_id = trim($request->emp_id);
    $partners = [];

    $sql = "SELECT * FROM employee where 	emp_id = '$emp_id' ";

    if($result = mysqli_query($mysqli, $sql)){
      $request = json_decode($postdata);
      $cr = 0;
      while($row = mysqli_fetch_assoc($result)){
        $partners[$cr]['id'] = $row['id'];
        $partners[$cr]['emp_id'] = $row['emp_id'];
        $partners[$cr]['firstname'] = $row['firstname'];
        $partners[$cr]['lastname'] = $row['lastname'];
        $partners[$cr]['email'] = $row['email'];
        $partners[$cr]['contactno'] = $row['contactno'];
        $partners[$cr]['email'] = $row['email'];
        $partners[$cr]['address'] = $row['address'];
        $partners[$cr]['datetime'] = $row['datetime'];
        $cr++;
      }
      // print_r(($partners));
      echo json_encode($partners);
    }
    else{
      http_response_code(404);
    }
}
?>
