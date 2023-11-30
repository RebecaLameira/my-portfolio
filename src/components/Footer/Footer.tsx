import Link from "next/link";
const Footer = () => {
	return (
		<footer className="bg-white rounded-lg shadow m-4">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span className="font-indie text-2xl">Rebeca Lameira</span>
				<ul className="flex flex-wrap justify-between items-center mt-3 text-sm ">
					<li>
						<Link
							href="/Contact"
							className="hover:underline me-4 md:me-6 cursor-pointer"
						>
							<img src="/img/github.svg" />
						</Link>
					</li>
					<li>
						<Link href="/Contact" className="hover:underline me-4 md:me-6">
							{<img src="/img/Linkedin.svg"></img>}
						</Link>
					</li>
					<li>
						<Link href="/Contact" className="hover:underline me-4 md:me-6">
							{<img src="/img/Figma.svg"></img>}
						</Link>
					</li>
					<li>
						<Link href="/Contact" className="hover:underline me-4 md:me-6">
							{<img src="/img/Discord.svg"></img>}
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
