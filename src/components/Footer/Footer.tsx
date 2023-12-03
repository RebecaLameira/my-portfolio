import Link from "next/link";
const Footer = () => {
	return (
		<footer className="bg-white border-t-2">
			<div className=" flex items-center w-full mx-auto max-w-screen-xl py-4 px-8 justify-between lg:justify-center md:justify-center sm:justify-center">
				<span className="font-indie text-2xl lg:hidden md:hidden sm:hidden">
					Rebeca Lameira
				</span>
				<ul className="flex gap-8 justify-between items-center mt-3 text-sm lg:gap-20 md:gap-12">
					<li>
						<Link href="/Contact" className=" me-4 md:me-6 ">
							<img src="/img/github.svg" />
						</Link>
					</li>
					<li>
						<Link href="/Contact" className=" me-4 md:me-6">
							{<img src="/img/Linkedin.svg"></img>}
						</Link>
					</li>
					<li>
						<Link href="/Contact" className=" me-4 md:me-6">
							{<img src="/img/Figma.svg"></img>}
						</Link>
					</li>
					<li>
						<Link href="/Contact" className=" me-4 md:me-6">
							{<img src="/img/Discord.svg"></img>}
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
