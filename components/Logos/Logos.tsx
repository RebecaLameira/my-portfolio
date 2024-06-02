import Image from "next/image";
import { Julius_Sans_One } from "next/font/google";
import Link from "next/link";

const juliusFont = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-julius",
});

const Logos = () => {
  return (
    <section className="mt-6 grid place-content-center">
      <div
        className={`${juliusFont.className} flex h-20 w-full flex-wrap items-center justify-center gap-10 rounded-lg bg-white p-4 dark:bg-neutral-900`}
      >
        <Link href="https://tailwindcss.com/">
          <Image
            className="animate-pulse [animation-delay:-0.5s] hover:animate-none"
            src="/img/Tailwind-logo.svg"
            alt="Tailwind css logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="https://www.typescriptlang.org/">
          <Image
            className="animate-pulse [animation-delay:-0.10s] hover:animate-none"
            src="/img/Typescript-logo.svg"
            alt="Typescript logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="https://react.dev/">
          <Image
            className="animate-pulse [animation-delay:-0.5s] hover:animate-none"
            src="/img/React-logo.svg"
            alt="React.js logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="https://nextjs.org/">
          <svg
            width="50"
            height="50"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-pulse fill-black [animation-delay:-0.10s] hover:animate-none dark:fill-white"
          >
            <path d="M64 0C28.7 0 0 28.7 0 64C0 99.3 28.7 128 64 128C75.2 128 85.7 125.1 94.8 120.1L48.4 55.3V91.9H41.6V41.8H48.4L98.9 117.6C116.4 106.2 128 86.5 128 64C128 28.7 99.3 0 64 0ZM86.1 84.6L78.6 73.3V41.8H86.1V84.6Z" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Logos;
