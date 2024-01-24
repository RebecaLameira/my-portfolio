import Form from "../../components/Form/Form";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact- Portfolio Rebeca Lameira",
};
export default function Contact() {
	return (
		<div>
			<section className="grid place-content-center">
				<div
					className="grid box-content my-10 p-8 h-[600px] w-[800px] justify-items-center bg-gradient-to-r from-[#26212C] via-[#376549] to-[#0E864C] rounded-[50px] 
				mobile:h-[550px] mobile:w-[303px] mobile:my-4"
				>
					<div className="grid text-white justify-items-center gap-4">
						<h1 className="text-5xl font-bold mobile:text-2xl">Contate-me</h1>
						<p className="text-xl mobile:text-base justify-center mobile:text-center">
							Gostou deste Portfólio? Ou você gostaria de me enviar uma
							declaração.
						</p>
					</div>
					<br />

					<Form />
				</div>
			</section>
		</div>
	);
}
