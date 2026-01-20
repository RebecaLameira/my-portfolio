import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Dropdowns from "../components/Dropdowns/Dropdowns";
import Navbar from "../components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Rebeca Lameira",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/RL.ico" sizes="any" />
      </head>

      <body className="min-h-screen bg-fundo bg-cover bg-repeat dark:bg-darkfundo">
        <Providers>
          <Navbar />
          <Dropdowns />

          {/* Conteúdo das páginas */}
          <main className="flex flex-col">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
