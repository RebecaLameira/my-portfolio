export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`rounded-full bg-primary px-[12px] py-[8px] text-white hover:bg-green-800 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
