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

        // On LocalHost
        $mail->Username = 'sujaytank16595@gmail.com';
        $mail->Password = 'MH27bh3242@google';

        //On serve Data
        // $mail->Username = 'info@wisteriaindia.com';                // SMTP username
        // $mail->Password = 'infoWimpl@2017';                // SMTP password

        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        // On LocalHost
        $mail->setFrom('sujaytank16595@gmail.com', 'Wisteria India');
        $mail->addReplyTo('sujaytank16595@gmail.com');

        //On serve Data
        // $mail->setFrom('info@wisteriaindia.com', 'Wisteria India');
        // $mail->addReplyTo('info@wisteriaindia.com');

        $mail->addAddress($email);
        // $mail->addAddress('info@wisteriaindia.com');       // Add a recipient

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
                            <h3>Name: '. $fullName .'</h3>
                            <h3>Email ID: '. $email .'</h3>
                            <h3>User ID: '. $emp_Id  .'</h3>
                          </div>' ;

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
