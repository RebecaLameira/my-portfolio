export type TitleProps = {
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Title = ({ children, className }: TitleProps) => {
	return (
		<h1 className={`text-4xl text-secondary font-semibold ${className}`}>
			{children}
		</h1>
	);
};

export default Title;
