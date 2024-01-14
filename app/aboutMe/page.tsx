import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Trajectory from "../../components/Trajectory/Trajectory";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Me - Portfolio Rebeca Lameira",
};

export default function AboutMe() {
	return (
		<div>
			<Navbar path="/contact">Contato</Navbar>
			<div>
				<Content />
				<Trajectory />
			</div>
			<Footer />
		</div>
	);
}
