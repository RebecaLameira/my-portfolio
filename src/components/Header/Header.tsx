import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";

const Header = () => {
	return (
		<header className="flex flex-wrap m-2 p-4 items-center justify-around sm:max-lg:flex-wrap-reverse">
			<div className="sm:justify-center">
				<h1 className="bg-white container w-60 h-20 font-julius font-black text-4xl my-8">
					Front-End <br />
					Developer
				</h1>
				<p className="bg-white text-base p-2">
					Front-end focado no React, Typescript, Next
				</p>
				<Button className="my-8">
					{
						<Link
							href="/Contact"
							className="text-base font-bold item-end px-8 py-3.5"
						>
							Contact me
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
					className="flex justify-end"
				/>
			</div>
		</header>
	);
};

export default Header;
