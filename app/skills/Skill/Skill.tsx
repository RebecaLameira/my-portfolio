export type SkillProps = {
  label: string;
  level: string;
  percent: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Skill = ({ label, level, percent, className }: SkillProps) => {
  return (
    <>
      <div className="mb-1 flex justify-between px-4">
        <span className="sm:text-xs md:text-sm text-base font-semibold text-secondary">
          {label}
        </span>
        <span className="sm:text-xs md:text-xs text-sm font-medium text-secondary">
          {level}
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-200">
        <div
          className={`h-2.5 rounded-full bg-gradient-to-r from-[#40A65C] via-[#69D186] to-[#ACEDD5] px-4 ${percent}`}
        ></div>
      </div>
    </>
  );
};

export default Skill;
