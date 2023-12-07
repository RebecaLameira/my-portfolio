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
		<div className="relative">
			{label && <label className="absolute pt-1 pl-3 text-xs">{label}</label>}
			<InputOrTextArea
				className={`
         w-[470px] text-gray-primary rounded-[50px] p-3 indent-4 
        
        ${label && "pt-5"}
        ${className}
      `}
				{...rest}
			/>
		</div>
	);
};

export default Input;
