export type InputProps = {
	label?: string;
	multiline?: boolean;
	type: string;
	htmlFor: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, className, type, htmlFor, ...rest }: InputProps) => {
	return (
		<div>
			<label className="pt-1 pl-3 text-white text-base" htmlFor={htmlFor}>
				{label}
			</label>
			<div className="relative">
				<input
					type={type}
					className={`
         w-[470px] rounded-[50px] p-3 indent-4 mobile:w-[277px] outline-0 focus:ring-4 focus:ring-green-300
        ${className}`}
					{...rest}
				/>
			</div>
		</div>
	);
};

export default Input;
