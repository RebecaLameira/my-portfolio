export type InputProps = {
	label?: string;
	multiline?: boolean;
} & (
	| React.InputHTMLAttributes<HTMLInputElement>
	| React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = (props: InputProps) => {
	if (props.multiline) {
		return (
			<textarea
				{...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
			/>
		);
	}
	return <input {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

const Input = ({ label, className, ...rest }: InputProps) => {
	return (
		<>
			<label className="pt-1 pl-3 text-white text-base">{label}</label>
			<div className="relative">
				<InputOrTextArea
					className={`
         w-[470px] rounded-[50px] p-3 indent-4 mobile:w-[277px] outline-0 focus:ring-4 focus:ring-green-300
        ${className}
      `}
					{...rest}
				/>
			</div>
		</>
	);
};

export default Input;
