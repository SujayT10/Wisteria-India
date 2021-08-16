<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $firstname = trim($request->firstname);
    $lastname = trim($request->lastname);
    // $wallet = trim($request->wallet);
    // $password = sha1(mysqli_real_escape_string($mysqli, trim($request->pwd)));
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $contactno = trim($request->contactno);
    $datetime = trim($request->todayDate);
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
        $mail->Body    = ' Dear '. $fullName .'<br/>
                          <p><b>Welcome to the world of Wisteria India</b></p>

                          <p><b>Name:'. $fullName .'</b></p>
                          <p><b>Email ID: '. $email .'</b></p>
                          <p><b>Your login Wisteria India User ID: '. $partner_id .'</b></p>

                          <p>Wisteria India started its operations in 2017. One of the strengths of Wisteria India Business Opportunity is the unparalleled quality of its system. Wisteria India deals in categories – Herbal, Organic, Traditional Herbs Personal care, Home Care, Cosmetics, Durables, Educational Courses and Great Value Products. All our products come with money back guarantee for 100% satisfaction of use subject to certain conditions.</p>
                          <p>Wisteria India business is open to everyone. It provides a flexible opportunity to build your business through retailing of products.</p>
                          <p>Please go through the  Business Details  to get further information.</p>
                          <p>
                          To help you get started in the business, we have exciting offers from time to time. Please visit the Wisteria India Partner portal to learn about and avail offers (www.wisteriaindia.com).</p>
                          <p>To help you learn more about our products and develop your merchandising skills we also have an Offline and Online e-learning platform which can be accessed through our portal. We highly recommend the learning welcome program "Introduction" to help you gain a better understanding about Wisteria India, Top-Selling products and tips on how to get started in your Wisteria India business.</p>
                          <p>We strongly urge you to visit the website and Partner Portal regularly as the website provides updates, product related news and changes to Rules of Conduct and other important information.</p>
                          <p>
                          You can also get in touch with us through our Email us:- info@wisteriaindia.com for further support  and more information.</p>
                          <p>With Warm Regards,</p>
                          <p>Wisteria India Multitrade Pvt. Ltd.</p>
                        ' ;

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
