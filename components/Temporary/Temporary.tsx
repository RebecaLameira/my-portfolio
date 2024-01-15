import Image from "next/image";

const Temporary = () => {
	return (
		<div className="w-full bg-white ">
			<Image
				src="/img/Stripes.svg"
				alt=""
				width={1000}
				height={1000}
				className="w-full"
			/>
			<div className="w-full h-28 grid justify-items-center items-center mobile:h-60">
				<h1 className="my-4  text-6xl text-black justify-items-center mobile:text-2xl">
					Página Em Construção
				</h1>
			</div>

			<Image
				src="/img/Stripes.svg"
				alt=""
				width={1000}
				height={1000}
				className="w-full"
			/>
		</div>
	);
};

export default Temporary;
