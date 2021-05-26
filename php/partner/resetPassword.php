<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $partner_id = trim($request->partner_id);
    $password = trim($request->password);

    $sql = "UPDATE partners SET password = '$password' WHERE partner_id = '$partner_id' ";

      // $res = mysqli_query($mysqli, $sql);
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
                    'partner_id' => $partner_id,
                    'password' => $password,
                   ];

         echo json_encode($authdata);
    }
    else{
      http_response_code(404);
      }
}

?>

