import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
	const { email, name, message } = await request.json();

	const transport = nodemailer.createTransport({
		service: "gmail",
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.MY_EMAIL,
			pass: process.env.MY_PASSWORD,
		},
	});

	const mailOptions: Mail.Options = {
		from: process.env.MY_EMAIL,
		to: email,
		cc: process.env.MY_EMAIL,
		subject: `Message from ${name} (${email})`,
		text: message,
	};

	const sendMailPromise = () =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function (err) {
				if (!err) {
					resolve("Problema resolvido e email enviado.");
				} else {
					reject(err.message);
				}
			});
		});

	try {
		await sendMailPromise();
		return NextResponse.json({ message: "Email enviado com Sucesso!!" });
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 });
	}
}