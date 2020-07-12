<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

/**
 * Nothing  much here yet - but it's here so we can expand on it cleanly later on.
 * @package Emails
 * @author Ben Keen <ben.keen@gmail.com>
 */
class Emails {

	public static function sendEmail($info) {

		$mail = new PHPMailer;
		$mail->isSMTP();
		$mail->Host = 'smtp.sendgrid.net';
		$mail->Port = 25;
		$mail->SMTPAuth = true;
		$mail->Username = 'apikey';
		$mail->Password = Core::getSgApiKey();
		$mail->setFrom('lazarodm@gmail.com', 'Lalao');
		$mail->addAddress($info["recipient"]);
		$mail->Subject = $info["subject"];
		$mail->AltBody = $info["content"];

		return $mail->send();
	}
}
