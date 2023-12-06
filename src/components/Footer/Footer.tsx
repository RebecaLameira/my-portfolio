import Link from "next/link";
const Footer = () => {
	return (
		<footer className="flex w-full max-h-32 py-4 px-16 bg-white border-t-2 fixed md:relative sm:relative inset-x-0 bottom-0 items-center justify-between lg:justify-center md:justify-center sm:justify-center">
			<span className="font-indie text-2xl lg:hidden md:hidden sm:hidden">
				Rebeca Lameira
			</span>
			<div>
				<ul className="flex justify-between mt-3 text-sm gap-20 ">
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
