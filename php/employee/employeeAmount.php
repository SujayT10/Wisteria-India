<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $emp_id = trim($request->emp_id);
    $amount = trim($request->amount);

    $sql = "UPDATE employee SET wallet = wallet + '$amount' WHERE emp_id = '$emp_id' ";

      // $res = mysqli_query($mysqli, $sql);
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
                    'emp_id' => $emp_id,
                    'amount' => $amount,
                   ];

         echo json_encode($authdata);
    }
    else{
      http_response_code(404);
      }
}

?>

