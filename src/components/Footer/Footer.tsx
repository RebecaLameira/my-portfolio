import Link from "next/link";

export type FooterProps = {
	children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Footer = ({ children, className }: FooterProps) => {
	return (
		<footer
			className={`flex w-full py-2 px-16 bg-white border-t-2 inset-x-0 bottom-0 md:relative sm:relative items-center justify-between lg:justify-center md:justify-center sm:justify-center ${className}`}
		>
			<span className="font-indie text-2xl lg:hidden md:hidden sm:hidden">
				Rebeca Lameira
			</span>
			<div>
				<ul className="flex justify-between mt-3 text-sm gap-20 ">
					<li>
						<Link href="/Contact" className=" me-4 md:me-6 ">
							<img className="scale-75" src="/img/github.svg" />
						</Link>
					</li>
					<li>
						<Link href="/Contact" className=" me-4 md:me-6">
							{<img className="scale-75" src="/img/Linkedin.svg"></img>}
						</Link>
					</li>
					<li>
						<Link href="/Contact" className=" me-4 md:me-6">
							{<img className="scale-75" src="/img/Figma.svg"></img>}
						</Link>
					</li>
					<li>
						<Link href="/Contact" className=" me-4 md:me-6">
							{<img className="scale-75" src="/img/Discord.svg"></img>}
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
