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
		subject: `Mensagem Automática do Portfolio Rebeca Lameira`,
		text: `Olá ${name},
Agradeço por entrar em contato e expressar seu interesse em meu trabalho.

Recebi seu mensagem "${message}" com o seu email "${email}"
		
Em breve eu mesma entrarei em contato com você.
		


Atenciosamente,
Rebeca Lameira
Desenvolvedora Front-End
beca.rezendel@gmail.com`,
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
		return NextResponse.json({ message: "Email enviado com Sucesso!!" }); //Snackbar(info="Sucesso", message="Email enviado com Sucesso!!")
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 });
	}
}
