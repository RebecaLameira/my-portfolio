export type TitleProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={`sm:text-xl md:text-2xl text-4xl font-semibold text-secondary ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
