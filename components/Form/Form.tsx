"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";
import { isEmail } from "validator";

export type FormData = {
	name: string;
	email: string;
	message: string;
};

const Form = () => {
	const {
		register,
		resetField,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	function onSubmit(data: FormData) {
		sendEmail(data);
		resetField("name");
		resetField("email");
		resetField("message");
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full max-w-md mx-auto grid gap-4 mobile:justify-center"
		>
			<label htmlFor="name" className="pt-1 pl-3 text-white text-base">
				Nome Completo *
			</label>
			<input
				type="text"
				placeholder="Nome completo"
				className=" w-[470px] rounded-[50px] p-3 indent-4 mobile:w-[277px] outline-0 focus:ring-4 focus:ring-green-300"
				{...register("name", { required: true })}
			/>
			{errors?.name?.type === "required" && (
				<p className="text-red-500 text-base indent-4 font-black">
					Campo obrigatório.
				</p>
			)}
			<label htmlFor="email" className="pt-1 pl-3 text-white text-base">
				Email *
			</label>
			<input
				type="email"
				placeholder="example@domain.com"
				className="w-[470px] rounded-[50px] p-3 indent-4 mobile:w-[277px] outline-0 focus:ring-4 focus:ring-green-300"
				{...register("email", {
					required: true,
					validate: (value) => isEmail(value),
				})}
			/>
			{errors?.email?.type === "required" && (
				<p className="text-red-500 text-sm indent-4 font-black">
					Campo obrigatório.
				</p>
			)}

			{errors?.email?.type === "validate" && (
				<p className="error-message text-red-500 text-sm indent-4 font-black">
					Email Inválido.
				</p>
			)}

			<label htmlFor="message" className="pt-1 pl-3 text-white text-base">
				Mensagem *
			</label>
			<textarea
				rows={4}
				placeholder="Escreva sua mensagem..."
				className="w-[470px] rounded-[50px] p-3 indent-4 mobile:w-[277px] outline-0 focus:ring-4 focus:ring-green-300"
				{...register("message", { required: true })}
			></textarea>

			<div className="grid justify-center">
				<button className="bg-primary rounded-full px-[20px] py-[12px] text-white font-bold hover:bg-green-800">
					Enviar
				</button>
			</div>
		</form>
	);
};

export default Form;
