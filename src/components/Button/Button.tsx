export type ButtonProps = {
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
	return (
		<button
			className={`bg-primary rounded-[83px] px-[12px] py-[12px] text-white
      ${className}
    `}
		>
			{children}
		</button>
	);
};

export default Button;
