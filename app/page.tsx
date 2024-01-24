import Header from "../components/Header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home - Portfolio Rebeca Lameira",
};

export default function Home() {
	return (
		<div>
			<Header />
		</div>
	);
}
