<?php
include_once("database.php");
include_once("PHPMailerAutoload.php");

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
    $fullName = $firstname." ".$lastname;

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
    } else{
      http_response_code(404);
      }

        // Mail part
      $mail = new PHPMailer;

      $mail->SMTPDebug = 4;                               // Enable verbose debug output

      $mail->isSMTP();                                      // Set mailer to use SMTP
      $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = 'sujaytank16595@gmail.com';                 // SMTP username
      $mail->Password = 'Google@mh27bh3242';                           // SMTP password
      $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 587;                                    // TCP port to connect to

      $mail->setFrom('sujaytank16595@gmail.com', 'Wisteria India');
      $mail->addAddress('sujaytank@gmail.com');     // Add a recipient
      $mail->addAddress('radhikanew1@gmail.com');               // Name is optional
      $mail->addReplyTo('sujaytank@gmail.com');
      // $mail->addCC('cc@example.com');
      // $mail->addBCC('bcc@example.com');

      // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
      // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
      $mail->isHTML(true);                                  // Set email format to HTML

      $mail->Subject = 'Get started with Wisteria India';
      $mail->Body    = '<div style="width: 30%;
                                    border: 1px solid;
                                    padding: 20px;
                                    text-align: center;
                                    margin-left: 25%;
                                    border-radius: 10%;
                                    background-color: gainsboro;
                                    font-family: inter;">
                                    <h1>Wisteria India</h1>
                          <h3>Name: '. $fullName .'</h3>
                          <h3>Email ID: '. $email .'</h3>
                          <h3>User ID: '. $partner_id .'</h3>
                          <h3>Password: '. $password .'</h3>
                        </div>' ;

      $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

      if(!$mail->send()) {
          echo 'Message could not be sent.';
          echo 'Mailer Error: ' . $mail->ErrorInfo;
      } else {
          echo 'Message has been sent';
      }

}

?>
