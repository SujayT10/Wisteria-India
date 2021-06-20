<?php
include_once("../database.php");
// include_once("../PHPMailerAutoload.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $name = trim($request->name);
    $dob = trim($request->dob);
    $hobbie = trim($request->hobbie);

    $name2 = trim($request->name2);
    $dob2 = trim($request->dob2);
    $hobbie2 = trim($request->hobbie2);

    $name3 = trim($request->name3);
    $dob3 = trim($request->dob3);
    $hobbie3 = trim($request->hobbie3);

    $name4 = trim($request->name4);
    $dob4 = trim($request->dob4);
    $hobbie4 = trim($request->hobbie4);

    $name5 = trim($request->name5);
    $dob5 = trim($request->dob5);
    $hobbie5 = trim($request->hobbie5);

    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $contactno = trim($request->contactno);
    $address = trim($request->address);
    $pinCode = trim($request->pinCode);
    $transaction_id = trim($request->transaction_id);

    $sql = "INSERT INTO telent_hunt(name_1, dob_1, telent_1,
                                    name_2, dob_2, telent_2,
                                    name_3, dob_3, telent_3,
                                    name_4, dob_4, telent_4,
                                    name_5, dob_5, telent_5,
                                    email, contactno, address, pinCode, transaction_id)
                             VALUES ('$name','$dob','$hobbie',
                                     '$name2','$dob2','$hobbie2',
                                     '$name3','$dob3','$hobbie3',
                                     '$name4','$dob4','$hobbie4',
                                     '$name5','$dob5','$hobbie5',
                                     '$email','$contactno','$address','$pinCode','$transaction_id')";
      $res = mysqli_query($mysqli, $sql);
      $last_id = mysqli_insert_id($mysqli);

      if($last_id){
        $customer_id = "WIC-".str_replace(' ', '', $name).$last_id;
        $sql1 = "UPDATE telent_hunt SET customer_id = '$customer_id' WHERE id = '$last_id' ";
        $res1 = mysqli_query($mysqli, $sql1);
      }

    if ($mysqli->query($sql1) === TRUE) {
        $authdata = [
                       'Id' => mysqli_insert_id($mysqli),
                       'name'=> $name,
                       'dob' => $dob,
                       'hobbie' => $hobbie,
                       'name2'=> $name2,
                       'dob2' => $dob2,
                       'hobbie2' => $hobbie,
                       'name3'=> $name3,
                       'dob3' => $dob3,
                       'hobbie3' => $hobbie3,
                       'name4'=> $name4,
                       'dob4' => $dob4,
                       'hobbie4' => $hobbie4,
                       'name5'=> $name5,
                       'dob5' => $dob5,
                       'hobbie5' => $hobbie5,
                       'email'=> $email,
                       'contactno' => $contactno,
                       'address' => $address,
                       'name5'=> $name5,
                       'pinCode' => $pinCode,
                       'transaction_id' => $transaction_id,
                   ];

         echo json_encode($authdata);
    } else{
      http_response_code(404);
      }

}

?>
