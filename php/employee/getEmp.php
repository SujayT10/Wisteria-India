<?php
include_once("../database.php");
$employee = [];

$sql = "SELECT * FROM employee";

if($result = mysqli_query($mysqli, $sql)){
  $cr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $employee[$cr]['id'] = $row['id'];
    $employee[$cr]['emp_id'] = $row['emp_id'];
    $employee[$cr]['firstname'] = $row['firstname'];
    $employee[$cr]['lastname'] = $row['lastname'];
    $employee[$cr]['contactno'] = $row['contactno'];
    $employee[$cr]['email'] = $row['email'];
    $employee[$cr]['wallet'] = $row['wallet'];
    $employee[$cr]['address'] = $row['address'];
    $employee[$cr]['datetime'] = $row['datetime'];
    $cr++;
  }
  // print_r(($partners));
  echo json_encode($employee);
}
else{
  http_response_code(404);
}
?>
