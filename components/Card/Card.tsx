export type CardProps = {
  title: string;
  description: string;
  url: string;
  src: string;
};
const Card = ({ title, description, url, src }: CardProps) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative flex w-[40rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:bg-slate-100 dark:bg-black dark:hover:bg-neutral-800 lg:mb-20 lg:w-1/3 lg:flex-wrap sm:w-1/2">
          <div className="relative m-0 w-3/5 bg-white bg-clip-border text-gray-700 dark:bg-black lg:h-1/2 lg:w-full">
            <img
              src={src}
              alt="image"
              className="h-full w-full rounded-xl rounded-r-none object-cover lg:h-auto lg:w-auto lg:rounded-b-none lg:rounded-t-xl"
            />
          </div>
          <div className="p-6">
            <h4 className="text-blue-gray-900 lg: mb-2 block text-2xl font-semibold leading-snug tracking-normal antialiased dark:text-white lg:text-xl">
              {title}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased dark:text-slate-300 lg:text-sm">
              {description}
            </p>
            <a className="inline-block" href={url}>
              <button
                className="flex select-none items-center gap-2 rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-green-500 transition-all hover:bg-green-200 active:bg-green-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:hover:bg-green-950"
                type="button"
              >
                Ver o Projeto
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
