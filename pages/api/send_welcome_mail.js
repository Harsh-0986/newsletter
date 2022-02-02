//"use strict";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
	pool: true,
	host: "smtp.gmail.com",
	port: 587,
	secure: false, // true for 465, false for other ports
	auth: {
		user: process.env.EMAIL_ID,
		pass: process.env.EMAIL_PASS,
	},
});

export default async function send_welcome_mail(req, res) {
	const email = JSON.parse(req.body);

	var message = {
		from: "support@harsh-shah.tk",
		to: email,
		subject: "test",
		html: "<h1>Test msg</h1>",
	};

	const handleSendEmail = (err, data) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Email sent successfully");
		}
	};

	try {
		transporter.sendMail(message, handleSendEmail);
	} catch (e) {
		return res.status(500).json({ message: "An internal error occured" });
	}

	return res.status(201).json({ message: "Email sent" });
}
