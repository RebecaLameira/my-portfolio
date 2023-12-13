import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { i18n } from "@/translate/i18n";

const Header = () => {
	return (
		<header className="flex flex-wrap m-2 p-4 items-center justify-around mobile:flex-wrap-reverse">
			<div className="laptop:justify-center mobile:justify-center">
				<h1 className="bg-white container w-60 h-20 p-2 font-julius font-black text-4xl my-8">
					DESENVOLVEDORA <br />
					FRONT-END
				</h1>
				<p className="bg-white text-base p-2">
					Front-end focado no React, Typescript, Next.js
				</p>
				<Button className="my-8">
					{
						<Link
							href="/Contact"
							className="text-base font-bold item-end px-8 py-3.5"
						>
							{i18n.t("landingPage.button")}
						</Link>
					}
				</Button>
			</div>
			<div>
				<Image
					src="/img/Photo.svg"
					alt="Foto da Rebeca Lameira"
					width={384}
					height={391}
					className="flex justify-end laptop:scale-75 mobile:scale-75"
				/>
			</div>
		</header>
	);
};

export default Header;
