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
		subject: "Welcome to the fam! 👋👋",
		html: '<h1>Thank you for subscribing to our newsletter</h1><p><h3>Welcome to the family 👋</h3>  <p>Here\'s your joining gift<br />  <a href="https://code-with-harsh.tk/post/vscode-extensions">Top 10 VsCode Extensions</a></p>You have made a great decision by subscribing to our newsletter.<br /></p><a href="https://github.com/Harsh-0986"><img src="https://img.icons8.com/ios-filled/50/000000/github.png"/></a><a href="https://twitter.com/Harsh_Shah2102"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png"/></a><p>Happy coding!</p>',
	};

	const handleSendEmail = (err, data) => {
		if (err) {
			return res.status(500).json({ message: err });
		} else {

			return res.status(201).json({message:data})
		}
	};

		transporter.sendMail(message, handleSendEmail);

}
