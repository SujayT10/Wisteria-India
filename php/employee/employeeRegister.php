<?php
include_once("../database.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $firstname = trim($request->firstname);
    $lastname = trim($request->lastname);
    // $password = sha1(mysqli_real_escape_string($mysqli, trim($request->pwd)));
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $contactno = trim($request->contactno);
    $datetime = trim($request->datetime);
    $address = trim($request->address);

    $fullName = $firstname." ".$lastname;

    $sql = "INSERT INTO employee(	firstname, 	lastname, email, contactno, password, address,datetime)
                             VALUES ('$firstname','$lastname','$email','$contactno','$password','$address','$datetime')";

      $res = mysqli_query($mysqli, $sql);
      $last_id = mysqli_insert_id($mysqli);

      if($last_id){
        $emp_Id = "WIE-".$firstname.$last_id;
        $sql1 = "UPDATE employee SET emp_Id = '$emp_Id' WHERE id = '$last_id' ";
        $res1 = mysqli_query($mysqli, $sql1);
      }

    if ($mysqli->query($sql1) === TRUE) {
        $authdata = [
                    'Id' => mysqli_insert_id($mysqli),
                    'Emp_Id' => $emp_Id,
                    'firstname' => $firstname,
                    'lastname' => $lastname,
                    'email' => $email,
                    'contactno' => $contactno,
                    'datetime' => $datetime,
                    'address'=> $address
                   ];

         echo json_encode($authdata);
    } else{
      http_response_code(404);
      }

}

?>
