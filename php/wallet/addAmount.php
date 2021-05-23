<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $referral_id = trim($request->referral_id);
    $amount = trim($request->amount);

    $sql = "INSERT INTO wallet(referral_id, amount) VALUES ('$referral_id','$amount')";

      // $res = mysqli_query($mysqli, $sql);

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
                    'referral_id' => $referral_id,
                    'amount' => $amount,
                   ];

         echo json_encode($authdata);
    } else{
      http_response_code(404);
      }

}

?>
