<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

  $request = json_decode($postdata);
  $vendor_id = trim($request->vendor_id);
    $vendors = [];

    $sql = "SELECT * FROM vendor where vendor_id = '$vendor_id' ";

    if($result = mysqli_query($mysqli, $sql)){
      $request = json_decode($postdata);
      $cr = 0;
      while($row = mysqli_fetch_assoc($result)){
        $vendors[$cr]['id'] = $row['id'];
        $vendors[$cr]['vendor_id'] = $row['vendor_id'];
        $vendors[$cr]['cName'] = $row['cName'];
        $vendors[$cr]['fullName'] = $row['fullName'];
        $vendors[$cr]['email'] = $row['email'];
        $vendors[$cr]['contactno'] = $row['contactno'];
        $vendors[$cr]['email'] = $row['email'];
        $vendors[$cr]['datetime'] = $row['datetime'];
        $vendors[$cr]['zip'] = $row['zip'];
        $vendors[$cr]['address'] = $row['address'];
        // $partner[$cr]['password'] = $row['password'];
        $cr++;
      }
      // print_r(($vendors));
      echo json_encode($vendors);
    }
    else{
      http_response_code(404);
    }
}
?>
