export type CardProps = {
  title: string;
  description: string;
  url: string;
  src: string;
};
const Card = ({ title, description, url, src }: CardProps) => {
  return (
    <>
      <div className="flex items-center justify-center hover:bg-slate-300">
        <div className="relative flex w-[40rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-2/5 rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img src={src} alt="image" className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <h4 className="text-blue-gray-900 mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
              {title}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {description}
            </p>
            <a className="inline-block" href={url}>
              <button
                className="flex select-none items-center gap-2 rounded-lg px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-green-500 transition-all hover:bg-green-500/10 active:bg-green-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
