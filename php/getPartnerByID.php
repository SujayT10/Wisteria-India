<?php
include_once("database.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

  $request = json_decode($postdata);
  $partner_id = trim($request->partner_id);
    $partners = [];

    $sql = "SELECT * FROM partners where referalId = '$partner_id' ";

    if($result = mysqli_query($mysqli, $sql)){
      $request = json_decode($postdata);
      $cr = 0;
      while($row = mysqli_fetch_assoc($result)){
        $partners[$cr]['id'] = $row['id'];
        $partners[$cr]['partner_id'] = $row['partner_id'];
        $partners[$cr]['firstname'] = $row['firstname'];
        $partners[$cr]['lastname'] = $row['lastname'];
        $partners[$cr]['contactno'] = $row['contactno'];
        $partners[$cr]['email'] = $row['email'];
        $partners[$cr]['datetime'] = $row['datetime'];
        $partners[$cr]['referalId'] = $row['referalId'];
        $partners[$cr]['address'] = $row['address'];
        // $partner[$cr]['password'] = $row['password'];
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
