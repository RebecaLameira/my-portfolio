export type TitleProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={`text-2xl font-semibold text-secondary md:text-xl sm:text-lg ${className}`}
    >
      {children}
    </h1>
  );
};

export default Title;
