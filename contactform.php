<?php

//getting data from the contact form
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    //will need to figure out a workaround to send to gmail
    $mailTo = "bwang00@student.ubc.ca";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;
    mail($mailTo, $subject, $txt, $headers);

    header("Location: index.php?mailsend");
}