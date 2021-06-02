<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata)){

    $partner_id = mysqli_real_escape_string($mysqli, trim($request->partner_id));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));

    $sql = "SELECT * FROM partners where email = '$email' and partner_id = '$partner_id' ";

    if($result = mysqli_query($mysqli,$sql)){
      $rows = array();
        while($row = mysqli_fetch_assoc($result)){
          $rows[] = $row;
        }
        echo json_encode($rows);

         // Mail part
         $mail = new PHPMailer;
         $mail->SMTPDebug = 4;                     // Enable verbose debug output
         $mail->isSMTP();
         $mail->Host = 'smtp.gmail.com';       // on Localhost
        //  $mail->Host = 'smtp.hostinger.in ';      // on server
         $mail->SMTPAuth = true;

         // On LocalHost
         $mail->Username = 'sujaytank16595@gmail.com';
         $mail->Password = 'Google@mh27bh3242';

         //On serve Data
        //  $mail->Username = 'info@wisteriaindia.com';                // SMTP username
        //  $mail->Password = 'infoWimpl@2017';                // SMTP password

         $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
         $mail->Port = 587;                                    // TCP port to connect to

         // On LocalHost
         $mail->setFrom('sujaytank16595@gmail.com', 'Wisteria India');
         $mail->addReplyTo('sujaytank16595@gmail.com');

         //On serve Data
        //  $mail->setFrom('info@wisteriaindia.com', 'Wisteria India');
        //  $mail->addReplyTo('info@wisteriaindia.com');

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
                             <h3>Name: </h3>
                             <h3>Partner ID: '. $partner_id .'</h3>
                             <a href="https://wisteriaindia.com/#/reset-password/'. $partner_id .'" target="_blank">
                               <h3>Reset Password</h3>
                             </a>
                           </div>' ;

         $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

         if(!$mail->send()) {
             echo 'Message could not be sent.';
             echo 'Mailer Error: ' . $mail->ErrorInfo;
         } else {
             echo 'Message has been sent';
         }

    }

    else{
      http_response_code(404);
    }
}
?>
