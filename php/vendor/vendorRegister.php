<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    // name, email, contactno, password, referalId, address,zip,dt

    $name = trim($request->name);
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $contactno = trim($request->contactno);
    $referalId = trim($request->referalId);
    $address = trim($request->address);
    $zip = trim($request->zip);
    $datetime = trim($request->dt);

    $sql = "INSERT INTO vendor(name,email,contactno,password,referalId,address,zip,datetime)
                             VALUES ('$name','$email','$contactno','$password', '$referalId', '$address','$zip','$datetime')";

      $res = mysqli_query($mysqli, $sql);
      $last_id = mysqli_insert_id($mysqli);

      if($last_id){
        $vendor_id = "WIV-".substr($name, 0, strpos($name, ' ')).$last_id;
        $sql1 = "UPDATE vendor SET vendor_id = '$vendor_id' WHERE id = '$last_id' ";
        $res1 = mysqli_query($mysqli, $sql1);
      }

    if ($mysqli->query($sql1) === TRUE) {
        $authdata = [
                    'name' => $name,
                    'email' => $email,
                    'contactno' => $contactno,
                    'Id' => mysqli_insert_id($mysqli),
                    'datetime' => $datetime,
                    'referalId' => $referalId,
                    'address'=> $address,
                    'zip' => $zip,
                    'vendor_id' => $vendor_id,
                   ];

        // Mail part
        $mail = new PHPMailer;
        $mail->SMTPDebug = 4;                     // Enable verbose debug output
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';       // on Localhost
        // $mail->Host = 'smtp.hostinger.in ';      // on server
        $mail->SMTPAuth = true;

        // On LocalHost
        $mail->Username = 'sujaytank16595@gmail.com';
        $mail->password = 'MH27bh3242@google';

        //On serve Data
        // $mail->Username = 'info@wisteriaindia.com';                // SMTP username
        // $mail->password = 'infoWimpl@2017';                // SMTP password

        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        // On LocalHost
        $mail->setFrom('sujaytank16595@gmail.com', 'Wisteria India');
        $mail->addReplyTo('sujaytank16595@gmail.com');

        //On serve Data
        // $mail->setFrom('info@wisteriaindia.com', 'Wisteria India');
        // $mail->addReplyTo('info@wisteriaindia.com');

        $mail->addAddress($email);
        $mail->addAddress('info@wisteriaindia.com');       // Add a recipient

        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'Get started with Wisteria India';
        $mail->Body    = '<div style="width: 40%;
                                      border: 1px;
                                      padding: 20px;
                                      text-align: center;
                                      margin-left: 25%;
                                      border-radius: 10%;
                                      background-color: gainsboro;
                                      font-family: inter;">
                                      <h1>Wisteria India</h1>
                            <h3>Name: '. $name .'</h3>
                            <h3>email ID: '. $email .'</h3>
                            <h3>User ID: '. $vendor_id .'</h3>
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
