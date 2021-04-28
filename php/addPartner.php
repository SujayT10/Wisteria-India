<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $firstname = trim($request->firstname);
    $lastname = trim($request->lastname);
    $pwd = md5(mysqli_real_escape_string($mysqli, trim($request->pwd)));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $contactno = trim($request->contactno);
    $role = trim($request->role);
    $datetime = trim($request->datetime);

    $sql = "INSERT INTO partners(firstname,lastname,contactno,email,password,role,datetime)
                             VALUES ('$firstname','$lastname','$contactno','$email','$pwd', '$role', '$datetime')";

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
                    'firstname' => $firstname,
                    'lastname' => $lastname,
                    'pwd' => '',
                    'email' => $email,
                    'contactno' => $contactno,
                    'Id' => mysqli_insert_id($mysqli),
                    'role' => $role,
                    'datetime' => $datetime
                   ];

         echo json_encode($authdata);
    }
    else{
      http_response_code(404);
    }
}

?>
