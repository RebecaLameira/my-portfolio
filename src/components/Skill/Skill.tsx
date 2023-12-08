export type SkillProps = {
	label: string;
	level: string;
	percent: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Skill = ({ label, level, percent, className }: SkillProps) => {
	return (
		<>
			<div className="flex justify-between mb-1 px-4">
				<span className="text-base font-semibold text-secondary">{label}</span>
				<span className="text-sm font-medium text-secondary">{level}</span>
			</div>
			<div className="w-full bg-gray-200 rounded-full h-2.5">
				<div
					className={`px-4 bg-gradient-to-r from-[#40A65C] via-[#69D186] to-[#ACEDD5] h-2.5 rounded-full w-${percent}`}
				></div>
			</div>
		</>
	);
};

export default Skill;
