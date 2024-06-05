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
      className="md:justify-center mx-auto grid w-full max-w-md gap-4"
    >
      <label htmlFor="name" className="pl-3 pt-1 text-base text-white">
        Nome Completo *
      </label>
      <input
        type="text"
        placeholder="Nome completo"
        className="md:w-[277px] w-[470px] rounded-[50px] p-3 indent-4 outline-0 focus:ring-4 focus:ring-green-300"
        {...register("name", { required: true })}
      />
      {errors?.name?.type === "required" && (
        <p className="indent-4 text-base font-black text-red-500">
          Campo obrigatório.
        </p>
      )}
      <label htmlFor="email" className="pl-3 pt-1 text-base text-white">
        Email *
      </label>
      <input
        type="email"
        placeholder="example@domain.com"
        className="md:w-[277px] w-[470px] rounded-[50px] p-3 indent-4 outline-0 focus:ring-4 focus:ring-green-300"
        {...register("email", {
          required: true,
          validate: (value) => isEmail(value),
        })}
      />
      {errors?.email?.type === "required" && (
        <p className="indent-4 text-sm font-black text-red-500">
          Campo obrigatório.
        </p>
      )}

      {errors?.email?.type === "validate" && (
        <p className="error-message indent-4 text-sm font-black text-red-500">
          Email Inválido.
        </p>
      )}

      <label htmlFor="message" className="pl-3 pt-1 text-base text-white">
        Mensagem *
      </label>
      <textarea
        rows={4}
        placeholder="Escreva sua mensagem..."
        className="md:w-[277px] w-[470px] rounded-[50px] p-3 indent-4 outline-0 focus:ring-4 focus:ring-green-300"
        {...register("message", { required: true })}
      ></textarea>

      <div className="grid justify-center">
        <button className="rounded-full bg-primary px-[20px] py-[12px] font-bold text-white hover:bg-green-800">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
