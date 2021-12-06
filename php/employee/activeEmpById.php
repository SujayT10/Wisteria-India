<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

  $request = json_decode($postdata);
  $emp_id = trim($request->emp_id);
    $employees = [];

    $sql = "SELECT * FROM employee where 	emp_id = '$emp_id' ";

    if($result = mysqli_query($mysqli, $sql)){
      $request = json_decode($postdata);
      $cr = 0;
      while($row = mysqli_fetch_assoc($result)){
        $employees[$cr]['id'] = $row['id'];
        $employees[$cr]['emp_id'] = $row['emp_id'];
        $employees[$cr]['firstname'] = $row['firstname'];
        $employees[$cr]['lastname'] = $row['lastname'];
        $employees[$cr]['wallet'] = $row['wallet'];
        $employees[$cr]['contactno'] = $row['contactno'];
        $employees[$cr]['email'] = $row['email'];
        $employees[$cr]['address'] = $row['address'];
        $employees[$cr]['datetime'] = $row['datetime'];
        $cr++;
      }
      // print_r(($employees));
      echo json_encode($employees);
    }
    else{
      http_response_code(404);
    }
}
?>
