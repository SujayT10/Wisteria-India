<?php
include_once("../database.php");
$vendor = [];
$sql = "SELECT * FROM vendor ORDER BY datetime DESC";

if($result = mysqli_query($mysqli, $sql)){
  $cr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $vendor[$cr]['id'] = $row['id'];
    $vendor[$cr]['vendor_id'] = $row['vendor_id'];
    $vendor[$cr]['cName'] = $row['cName'];
    $vendor[$cr]['fullName'] = $row['fullName'];
    $vendor[$cr]['email'] = $row['email'];
    $vendor[$cr]['contactno'] = $row['contactno'];
    $vendor[$cr]['zip'] = $row['zip'];
    $vendor[$cr]['address'] = $row['address'];
    $cr++;
  }
  // print_r(($vendor));
  echo json_encode($vendor);
}
else{
  http_response_code(404);
}
?>
