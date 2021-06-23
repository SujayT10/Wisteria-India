<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

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

         // Mail part
        $mail = new PHPMailer;
        $mail->SMTPDebug = 4;                     // Enable verbose debug output
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';       // on Localhost
        // $mail->Host = 'smtp.hostinger.in ';      // on server
        $mail->SMTPAuth = true;

        // // On LocalHost
        $mail->Username = 'sujaytank16595@gmail.com';
        $mail->Password = 'MH27bh3242@google';

        //On serve Data
        // $mail->Username = 'hr@wisteriaindia.com';                // SMTP username
        // $mail->Password = 'HumanResourceWimpl@2017';                // SMTP password

        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        // On LocalHost
        $mail->setFrom('sujaytank16595@gmail.com', 'Wisteria India');
        $mail->addReplyTo('sujaytank16595@gmail.com');

        //On serve Data
        // $mail->setFrom('hr@wisteriaindia.com', 'Wisteria India');
        // $mail->addReplyTo('hr@wisteriaindia.com');

        $mail->addAddress($email);
        // $mail->addAddress('hr@wisteriaindia.com');       // Add a recipient

        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'Get started with Wisteria India';
        $mail->Body    = '  <h1>Wisteria India</h1>
                            <h3>Mr./Ms.&nbsp; '. $fullName .'</h3>
                            <p>With reference to your application and subsequent interview you had with us, we are pleased to inform you that, you have been selected to join us and will be reporting to your senior.</p>
                            <p>Your place of posting will be as per your Pin code, however if required you will at all times render services to the company at any of its current or future locations.</p>
                            <p>Offer you the position with us on the terms and conditions as per mentioned in Offer letter.</p>
                            <p>Your Commencement of employment will be effective, as of or any other date
                            mutually agreed up on in writing is subject to successful completion of your Verification process,
                            or any other mutually agreed upon, failing which this offer will stand automatically withdrawn.
                            </p>
                            <p>We would like to take this opportunity to welcome you to Wisteria India family and look forward to have a long and mutually beneficial relationship.</p>
                            <p>With Kind Regards,<br>
                               Human Resorce<br>
                               Wisteria India Multitrade Pvt Ltd.
                            </p>' ;

        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Message has been sent';
        }

    } else{
      http_response_code(404);
      }

}

?>
