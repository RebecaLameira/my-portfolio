export type TitleProps = {
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Title = ({ children, className }: TitleProps) => {
	return (
		<h1
			className={`text-4xl text-secondary font-semibold laptop:text-2xl mobile:text-xl ${className}`}
		>
			{children}
		</h1>
	);
};

export default Title;
