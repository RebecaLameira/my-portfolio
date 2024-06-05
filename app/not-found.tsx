import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina não encontrado!",
};
export default function NotFound() {
  return (
    <div>
      <div className="grid place-items-center gap-2 p-4">
        <span className="bg-white dark:bg-black">
          <p className="text-6xl font-bold">Oops!</p>
        </span>

        <Image
          src="/img/404.svg"
          alt="Picture of the author"
          width={700}
          height={415}
          className="sm:scale-50 md:scale-75 bg-white dark:bg-black"
        />
      </div>
    </div>
  );
}
