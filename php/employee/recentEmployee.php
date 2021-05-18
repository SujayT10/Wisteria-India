<?php
include_once("../database.php");
$employee = [];
$sql = "SELECT * FROM employee ORDER BY datetime DESC";


if($result = mysqli_query($mysqli, $sql)){
  $cr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $employee[$cr]['id'] = $row['id'];
    $employee[$cr]['emp_Id'] = $row['emp_Id'];
    $employee[$cr]['firstname'] = $row['firstname'];
    $employee[$cr]['lastname'] = $row['lastname'];
    $employee[$cr]['contactno'] = $row['contactno'];
    $employee[$cr]['email'] = $row['email'];
    $employee[$cr]['datetime'] = $row['datetime'];
    $employee[$cr]['address'] = $row['address'];
    $cr++;
  }
  // print_r(($partners));
  echo json_encode($employee);
}
else{
  http_response_code(404);
}
?>
