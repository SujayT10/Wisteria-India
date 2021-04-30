<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $firstname = trim($request->firstname);
    $lastname = trim($request->lastname);
    // $pwd = md5(mysqli_real_escape_string($mysqli, trim($request->pwd)));
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $contactno = trim($request->contactno);
    $datetime = trim($request->datetime);
    $referalId = trim($request->referalId);
    $address = trim($request->address);

    $sql = "INSERT INTO partners(firstname,lastname,contactno,email,password,datetime,referalId,address)
                             VALUES ('$firstname','$lastname','$contactno','$email','$password', '$datetime', '$referalId', '$address')";

      $res = mysqli_query($mysqli, $sql);
      $last_id = mysqli_insert_id($mysqli);

      if($last_id){
        $partner_id = "WIP-".$firstname.$last_id;
        $sql1 = "UPDATE partners SET partner_id = '$partner_id' WHERE id = '$last_id' ";
        $res1 = mysqli_query($mysqli, $sql1);
      }

    if ($mysqli->query($sql1) === TRUE) {
        $authdata = [
                    'firstname' => $firstname,
                    'lastname' => $lastname,
                    'password' => '',
                    'email' => $email,
                    'contactno' => $contactno,
                    'Id' => mysqli_insert_id($mysqli),
                    'datetime' => $datetime,
                    'referalId' => $referalId,
                    'address'=> $address
                   ];

         echo json_encode($authdata);
    }
    else{
      http_response_code(404);
    }
}

?>
