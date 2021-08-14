<?php
include_once("../database.php");
$profiledata = [];

$sql = "SELECT * FROM profiledata";

if($result = mysqli_query($mysqli, $sql)){
  $cr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $profiledata[$cr]['id'] = $row['id'];
    $profiledata[$cr]['referal_id'] = $row['referal_id'];
    $profiledata[$cr]['fullname'] = $row['fullname'];
    $profiledata[$cr]['panNumber'] = $row['panNumber'];
    $profiledata[$cr]['accNumber'] = $row['accNumber'];
    $profiledata[$cr]['bankName'] = $row['bankName'];
    $profiledata[$cr]['ifscCode'] = $row['ifscCode'];
    $cr++;
  }
  // print_r(($profiledata));
  echo json_encode($profiledata);
}
else{
  http_response_code(404);
}
?>
