<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $firstname = trim($request->name);
    $lastname = trim($request->lastname);
    // $pwd = md5(mysqli_real_escape_string($mysqli, trim($request->pwd)));
    $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $contactno = $request->contactno;

    $sql = "INSERT INTO users(firstname,lastname,email,contactno,password)
                             VALUES ('$firstname','$lastname','$email','$contactno','$pwd')";

      $res = mysqli_query($mysqli, $sql);
      $last_id = mysqli_insert_id($mysqli);

      if($last_id){
        $admin_id = "WIA-".$name.$last_id;
        $sql1 = "UPDATE users SET admin_id = '$admin_id' WHERE id = '$last_id' ";
        $res1 = mysqli_query($mysqli, $sql1);
      }

    if ($mysqli->query($sql1) === TRUE) {
        $authdata = [
                    'name' => $name,
                    'lastname' => $lastname,
                    'pwd' => '',
                    'email' => $email,
                    'contactno' => $contactno,
                    'Id' => mysqli_insert_id($mysqli),
                    'Admin_ID' => $admin_id

                   ];

         echo json_encode($authdata);
    }
    else{
          http_response_code(404);
    }
}

?>
