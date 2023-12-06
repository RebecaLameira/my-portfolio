import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/Navbar";
import Head from "next/head";
export default function AboutMe() {
	return (
		<div>
			<Head>
				<title>About Me - Portfolio Rebeca Lameira</title>
			</Head>
			<Navbar path="/Contact">{"Contact me"}</Navbar>
			<div>
				<article className="bg-white m-16 p-8 grid gap-6 indent-8 text-xl text-justify">
					<h1 className="text-4xl text-secondary font-semibold">About me</h1>
					<p>
						{" "}
						I'm a Front-end developer specializing in creating elegant and
						highly functional interfaces. With three years of development
						experience and a recent Computer Engineering degree, I am constantly
						improving my programming skills. I am always looking for new
						challenges and collaboration opportunities to expand my knowledge
						and contribute to innovative projects.
					</p>
					<p>
						My expertise includes HTML5, CSS3, JavaScript and TypeScript,
						essential for delivering sophisticated designs and intuitive user
						experiences. I have experience in several CSS frameworks, such as
						Tailwind CSS, Bootstrap and Material UI, in addition to mastering
						libraries such as React.js and the Next.js framework. On the
						back-end, I have knowledge of Python, Node.js and ASP.NET, as well
						as SQL, MySQL, MongoDB and Firebase Realtime Database. I'm always
						looking for new challenges and collaboration opportunities to expand
						my knowledge and contribute to innovative projects.
					</p>
				</article>
				<section className="bg-white m-16 p-8">
					<h1 className=" text-4xl text-secondary font-semibold">Trajectory</h1>
				</section>
			</div>
			<Footer />
		</div>
	);
}
