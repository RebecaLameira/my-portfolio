import { Indie_Flower } from "next/font/google";
import Link from "next/link";

const indieFont = Indie_Flower({
	weight: ["400"],
	subsets: ["latin"],
});
export type FooterProps = {
	children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Footer = ({ children, className }: FooterProps) => {
	return (
		<footer
			className={`flex w-full py-2 px-16 bg-white border-t-2 inset-x-0 bottom-0 items-center justify-between mobile:justify-center dark:bg-black dark:border-none  dark:shadow-2xl ${className}`}
		>
			<span className={`${indieFont.className} text-2xl mobile:hidden`}>
				Rebeca Lameira
			</span>
			<div>
				<ul className="flex justify-between mt-3 text-sm gap-20 ">
					<li>
						<Link
							href="https://linkedin.com/in/rebeca-lameira-de-rezende-4440421b8"
							className=" me-4 mobile:me-6"
						>
							{<img className="scale-75" src="/img/Linkedin.svg"></img>}
						</Link>
					</li>
					<li>
						<Link
							href="https://github.com/RebecaLameira"
							className=" me-4 mobile:me-6 "
						>
							<img className="scale-75 dark:bg-white " src="/img/github.svg" />
						</Link>
					</li>

					<li>
						<Link
							href="https://www.figma.com/@rebeca36"
							className=" me-4 mobile:me-6"
						>
							{
								<img
									className="scale-75 dark:bg-white"
									src="/img/Figma.svg"
								></img>
							}
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
