import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Trajectory from "../../components/Trajectory/Trajectory";

import { Metadata } from "next";
import FloatingButton from "../../components/Floating Button/FloatingButton";

export const metadata: Metadata = {
	title: "About Me - Portfolio Rebeca Lameira",
};

export default function AboutMe() {
	return (
		<div>
			<Navbar path="/contact">Contato</Navbar>
			<FloatingButton />
			<div>
				<Content />
				<Trajectory />
			</div>
			<Footer className="mobile:relative" />
		</div>
	);
}
