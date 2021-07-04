<?php
include_once("../database.php");
$vendor = [];
$sql = "SELECT * FROM vendor ORDER BY datetime DESC";

if($result = mysqli_query($mysqli, $sql)){
  $cr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $vendor[$cr]['id'] = $row['id'];
    $vendor[$cr]['vendor_id'] = $row['vendor_id'];
    $vendor[$cr]['name'] = $row['name'];
    $vendor[$cr]['contactno'] = $row['contactno'];
    $vendor[$cr]['email'] = $row['email'];
    $vendor[$cr]['address'] = $row['address'];
    $vendor[$cr]['datetime'] = $row['datetime'];
    $vendor[$cr]['zip'] = $row['zip'];
    $cr++;
  }
  // print_r(($vendor));
  echo json_encode($vendor);
}
else{
  http_response_code(404);
}
?>
