<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $partner_id = trim($request->partner_id);
    $amount = trim($request->amount);

    $sql = "UPDATE partners SET wallet = wallet + '$amount' WHERE partner_id = '$partner_id' ";

      // $res = mysqli_query($mysqli, $sql);
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
                    'partner_id' => $partner_id,
                    'amount' => $amount,
                   ];

         echo json_encode($authdata);
    }
    else{
      http_response_code(404);
      }
}

?>

