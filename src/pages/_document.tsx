import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/img/RL.ico" sizes="any" />
			</Head>
			<body className="h-screen flex bg-fundo bg-cover">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
