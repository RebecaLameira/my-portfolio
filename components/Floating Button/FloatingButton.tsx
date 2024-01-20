import Button from "../Button/Button";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";

const FloatingButton = () => {
	return (
		<div className="fixed bottom-24 end-6 desktop:hidden">
			<Button>
				{
					<Link href="/contact">
						<IoPerson size={20} className="dark:text-black" />
					</Link>
				}
			</Button>
		</div>
	);
};

export default FloatingButton;
