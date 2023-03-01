<?php
if($_POST) {
    $name = trim(stripslashes($_POST['name']));
    $email = trim(stripslashes($_POST['email']));
    $subject = trim(stripslashes($_POST['subject']));
    $message = trim(stripslashes($_POST['message']));

    if ($subject == '') { $subject = "Contact Form Submission"; }

    $message .= "Email from: " . $name . "<br />";
	$message .= "Email address: " . $email . "<br />";
    $message .= "Message: <br />";
    $message .= nl2br($contact_message);
    $message .= "<br /> ----- <br /> This email was sent from your site <br />
                contact form. <br />";

    
    $from =  $name . " <" . $email . ">";
    // Email Headers
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
 	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


    $recipient = "yushanwang0816@gmail.com";
    mail($recipient, $subject, $message, $headers) or die("Error!");
}
?>