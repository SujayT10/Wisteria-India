<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

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


        // Mail part
        $mail = new PHPMailer;
        $mail->SMTPDebug = 4;                     // Enable verbose debug output
        $mail->isSMTP();
        // $mail->Host = 'smtp.gmail.com';       // on Localhost
        $mail->Host = 'smtp.hostinger.in ';      // on server
        $mail->SMTPAuth = true;

        // On LocalHost
        // $mail->Username = 'sujaytank16595@gmail.com';
        // $mail->Password = 'MH27bh3242@google';

        //On serve Data
        $mail->Username = 'talenthunt@wisteriaindia.com';                // SMTP username
        $mail->Password = 'TalentHuntWimpl@2017';                // SMTP password

        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        // On LocalHost
        // $mail->setFrom('sujaytank16595@gmail.com', 'Wisteria India');
        // $mail->addReplyTo('sujaytank16595@gmail.com');

        //On serve Data
        $mail->setFrom('info@wisteriaindia.com', 'Wisteria India');
        $mail->addReplyTo('info@wisteriaindia.com');

        $mail->addAddress($email);
        // $mail->addAddress('info@wisteriaindia.com');       // Add a recipient

        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'Thanks for Participate in Wisteria India Talent Hunt Program';
        $mail->Body    = '<div style="font-family: inter;">
                                      <h1>Wisteria India</h1>
                            <p>First Time for all family Members base on social causes solution theme Performance is the best way to express the problem and solution also. We are looking for solution against social causes like Hunger, Poverty, Crime, Illness, Dowry, Extortion, Pollution, and Women Insecurity and any kinds which affect  Earth. </p>
                            <p>You and your all Families member can give solution through: - Dance Poem, Story Singing, Acting, Drawing, and Photography.It helps to encourage awareness leading to informed concern for active participation in resolving any problems</p>
                            <p> Welcome to the digital world of Talent Hunt Program fastest way to express.</p>
                            <p>Regard<br>
                            Talent Hunt Department<br>
                            Wisteria India Multitrade Pvt. Ltd.</p>
                          </div>' ;

        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Message has been sent';
        }

         echo json_encode($authdata);
    } else{
      http_response_code(404);
      }

}

?>
