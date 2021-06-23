<?php
include_once("../database.php");
$telentHunt = [];
$sql = "SELECT * FROM telent_hunt ORDER BY datetime DESC";

if($result = mysqli_query($mysqli, $sql)){
  $cr = 0;
  while($row = mysqli_fetch_assoc($result)){
    $telentHunt[$cr]['id'] = $row['id'];
    $telentHunt[$cr]['customer_id'] = $row['customer_id'];
    $telentHunt[$cr]['name_1'] = $row['name_1'];
    $telentHunt[$cr]['dob_1'] = $row['dob_1'];
    $telentHunt[$cr]['telent_1'] = $row['telent_1'];

    $telentHunt[$cr]['name_2'] = $row['name_2'];
    $telentHunt[$cr]['dob_2'] = $row['dob_2'];
    $telentHunt[$cr]['telent_2'] = $row['telent_2'];

    $telentHunt[$cr]['name_3'] = $row['name_3'];
    $telentHunt[$cr]['dob_3'] = $row['dob_3'];
    $telentHunt[$cr]['telent_3'] = $row['telent_3'];

    $telentHunt[$cr]['name_4'] = $row['name_4'];
    $telentHunt[$cr]['dob_4'] = $row['dob_4'];
    $telentHunt[$cr]['telent_4'] = $row['telent_4'];

    $telentHunt[$cr]['name_5'] = $row['name_5'];
    $telentHunt[$cr]['dob_5'] = $row['dob_5'];
    $telentHunt[$cr]['telent_5'] = $row['telent_5'];

    $telentHunt[$cr]['email'] = $row['email'];
    $telentHunt[$cr]['contactno'] = $row['contactno'];
    $telentHunt[$cr]['address'] = $row['address'];
    $telentHunt[$cr]['pinCode'] = $row['pinCode'];
    $telentHunt[$cr]['transaction_id'] = $row['transaction_id'];
    $telentHunt[$cr]['datetime'] = $row['datetime'];
    $cr++;
  }
  echo json_encode($telentHunt);
}
else{
  http_response_code(404);
}
?>
